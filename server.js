const express = require('express');
const cors = require('cors');
const multer = require('multer');
const aiService = require('./services/aiService');
const contentService = require('./services/contentService');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check for deployment
app.get('/api/explore', (req, res) => {
    const exploreDB = require('./content/exploreDB');
    res.json(exploreDB);
});

app.get('/api/health', (req, res) => res.json({ status: 'ok', message: 'LUMI Backend is running on Railway' }));

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


// WARDROBE ANALYSIS (DB) ENDPOINT
app.post('/api/analyze/wardrobe-db', upload.array('images', 10), async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: "No clothing items provided." });
        }

        const images = req.files.map(file => ({
            mimeType: file.mimetype,
            base64Data: file.buffer.toString('base64')
        }));

        console.log(`Analyzing ${images.length} wardrobe items against DB...`);
        const aiResponse = await aiService.analyzeWardrobeDb(images);

        console.log("Resolving content...");
        // resolveBodyContent resolves from OUTFIT_DB
        
        const OUTFIT_DB = require('./content/outfitDB');
        const resolved = aiResponse.recommendations.map(aiItem => {
            const dbItem = OUTFIT_DB.find(d => d.id === aiItem.id);
            if (!dbItem) return null;
            return {
                ...dbItem,
                whyItSuitsUser: aiItem.whyItSuitsUser
            };
        }).filter(item => item != null);
        aiResponse.recommendations = resolved;


        res.json(aiResponse);
    } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: error.message || "System error." });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});

