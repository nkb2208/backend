const express = require('express');
const cors = require('cors');
const multer = require('multer');
const aiService = require('./services/aiService');
const contentService = require('./services/contentService');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// FACE & HAIR ANALYSIS ENDPOINT
app.post('/api/analyze/face', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file provided." });
        }

        const mimeType = req.file.mimetype;
        const base64Data = req.file.buffer.toString('base64');

        console.log("Analyzing face image...");
        const aiResponse = await aiService.analyzeFace(mimeType, base64Data);

        console.log("Resolving content...");
        aiResponse.recommendations = contentService.resolveFaceContent(aiResponse.recommendations);

        res.json(aiResponse);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: error.message || "System error." });
    }
});

// BODY ANALYSIS ENDPOINT (Placeholder for now)
app.post('/api/analyze/body', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No image file provided." });
        }

        const mimeType = req.file.mimetype;
        const base64Data = req.file.buffer.toString('base64');

        console.log("Analyzing body image...");
        const aiResponse = await aiService.analyzeBody(mimeType, base64Data);

        console.log("Resolving content...");
        aiResponse.recommendations = contentService.resolveBodyContent(aiResponse.recommendations);

        res.json(aiResponse);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: error.message || "System error." });
    }
});

// SKINCARE RECOMMENDATION ENDPOINT
app.post('/api/recommend/skincare', upload.single('image'), async (req, res) => {
    try {
        const { skinType, budget } = req.body;
        
        if (!skinType || !budget) {
            return res.status(400).json({ error: "Missing skinType or budget." });
        }

        let mimeType = null;
        let base64Data = null;
        if (req.file) {
            mimeType = req.file.mimetype;
            base64Data = req.file.buffer.toString('base64');
        }

        console.log(`Analyzing skincare for ${skinType} and ${budget}...`);
        const aiResponse = await aiService.recommendSkincare(skinType, budget, mimeType, base64Data);

        console.log("Resolving content...");
        aiResponse.routine = contentService.resolveSkincareContent(aiResponse.routine);

        res.json(aiResponse);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: error.message || "System error." });
    }
});

// WARDROBE ANALYSIS ENDPOINT
app.post('/api/analyze/wardrobe', upload.array('images', 10), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No clothing items provided." });
        }

        const images = req.files.map(file => ({
            mimeType: file.mimetype,
            base64Data: file.buffer.toString('base64')
        }));

        console.log(`Analyzing ${images.length} wardrobe items...`);
        const aiResponse = await aiService.analyzeWardrobe(images);

        res.json(aiResponse);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: error.message || "System error." });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
