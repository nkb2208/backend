require('dotenv').config();

class ApiKeyManager {
    constructor() {
        this.keys = [];
        this.currentIndex = 0;
        this.loadKeys();
    }

    loadKeys() {
        for (const [key, value] of Object.entries(process.env)) {
            if (key.startsWith('GEMINI_API_KEY_') && value) {
                this.keys.push(value);
            }
        }
        if (this.keys.length === 0) {
            console.warn("[Key Manager] No Gemini API keys found in environment.");
        }
    }

    getNextKey() {
        if (this.keys.length === 0) {
            throw new Error("No API keys available.");
        }
        const key = this.keys[this.currentIndex];
        console.log(`[Key Router] Using key #${this.currentIndex + 1}`);
        this.currentIndex = (this.currentIndex + 1) % this.keys.length;
        return key;
    }

    // Attempt to execute a function with round robin + retry logic
    async executeWithRetry(apiCallFn, maxRetries = this.keys.length) {
        if (this.keys.length === 0) {
            throw new Error("Hiện tại hệ thống AI đang quá tải. Vui lòng thử lại sau.");
        }

        let attempts = 0;
        let lastError = null;

        while (attempts < maxRetries) {
            const key = this.getNextKey();
            try {
                return await apiCallFn(key);
            } catch (error) {
                console.error(`[Key Router] Key failed. Error: ${error.message}`);
                lastError = error;
                // If it's a rate limit or quota exceeded, try next key
                if (error.status === 429 || error.status === 403 || error.message.includes('quota') || error.message.includes('rate limit')) {
                    attempts++;
                    continue; // Try the next key
                }
                
                // If it's a structural error (bad request), just throw immediately
                throw error;
            }
        }

        console.error("[Key Router] All keys exhausted or failed.");
        throw new Error("Hiện tại hệ thống AI đang quá tải. Vui lòng thử lại sau.");
    }
}

module.exports = new ApiKeyManager();
