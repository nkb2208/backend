const { GoogleGenAI, Type } = require('@google/genai');
const apiKeyManager = require('./apiKeyManager');
const HAIR_DB = require('../content/hairDB');
const MAKEUP_DB = require('../content/makeupDB');
const OUTFIT_DB = require('../content/outfitDB');

function buildCatalogString(db) {
    return db.map(item => {
        const tags = item.tags ? item.tags.join(', ') : `${item.type}, ${item.skinType ? item.skinType.join(',') : ''}`;
        return `ID: ${item.id} | Name: ${item.name} | Tags: ${tags}`;
    }).join('\n');
}

const faceSchema = {
    type: Type.OBJECT,
    properties: {
        inputType: { type: Type.STRING, description: "Always 'face'" },
        analysis: {
            type: Type.OBJECT,
            properties: {
                faceShape: { type: Type.STRING },
                hairLength: { type: Type.STRING },
                hairTexture: { type: Type.STRING },
                skinTone: { type: Type.STRING }
            }
        },
        recommendations: {
            type: Type.OBJECT,
            properties: {
                makeup: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING, description: "Must exactly match an ID from the makeup CATALOG" },
                            whyItSuitsUser: { type: Type.STRING, description: "A personalized explanation why this suits the user's facial features." }
                        },
                        required: ["id", "whyItSuitsUser"]
                    }
                },
                hair: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING, description: "Must exactly match an ID from the hair CATALOG" },
                            whyItSuitsUser: { type: Type.STRING, description: "A personalized explanation why this suits the user's face shape and hair texture." }
                        },
                        required: ["id", "whyItSuitsUser"]
                    }
                }
            },
            required: ["makeup", "hair"]
        }
    },
    required: ["inputType", "analysis", "recommendations"]
};

const bodySchema = {
    type: Type.OBJECT,
    properties: {
        inputType: { type: Type.STRING, description: "Always 'full_body'" },
        analysis: {
            type: Type.OBJECT,
            properties: {
                bodyProportions: { type: Type.STRING },
                styleDirection: { type: Type.STRING }
            }
        },
        recommendations: {
            type: Type.OBJECT,
            properties: {
                outfit: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING, description: "Must exactly match an ID from the outfit CATALOG" },
                            whyItSuitsUser: { type: Type.STRING, description: "A personalized explanation why this suits the user's body." }
                        },
                        required: ["id", "whyItSuitsUser"]
                    }
                }
            },
            required: ["outfit"]
        }
    },
    required: ["inputType", "analysis", "recommendations"]
};

async function analyzeFace(imageMimeType, imageBase64) {
    const catalogStr = `HAIR CATALOG:\n${buildCatalogString(HAIR_DB)}\n\nMAKEUP CATALOG:\n${buildCatalogString(MAKEUP_DB)}`;
    const systemInstruction = `You are an expert beauty consultant. Analyze the user's face photo.
Select 6-8 hair styles and 6-10 makeup looks from the provided catalogs that suit the user.
If the catalog has fewer items, return as many as match.
Write a personalized 'whyItSuitsUser' explanation for each recommendation.
DO NOT invent IDs.
CATALOGS:\n${catalogStr}`;

    const apiCallFn = async (apiKey) => {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: [
                { role: 'user', parts: [{ inlineData: { mimeType: imageMimeType, data: imageBase64 } }, { text: "Analyze this face." }] }
            ],
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: faceSchema,
                temperature: 0.2
            }
        });
        return JSON.parse(response.text);
    };

    return await apiKeyManager.executeWithRetry(apiCallFn);
}

async function analyzeBody(imageMimeType, imageBase64) {
    const catalogStr = `OUTFIT CATALOG:\n${buildCatalogString(OUTFIT_DB)}`;
    const systemInstruction = `You are an expert fashion stylist. Analyze the user's full body photo.
Select outfit ideas from the provided catalog that suit the user's proportions.
Write a personalized 'whyItSuitsUser' explanation for each recommendation.
DO NOT invent IDs.
CATALOGS:\n${catalogStr}`;

    const apiCallFn = async (apiKey) => {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: [
                { role: 'user', parts: [{ inlineData: { mimeType: imageMimeType, data: imageBase64 } }, { text: "Analyze this body." }] }
            ],
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: bodySchema,
                temperature: 0.2
            }
        });
        return JSON.parse(response.text);
    };

    return await apiKeyManager.executeWithRetry(apiCallFn);
}

const SKINCARE_DB = require('../content/skincareDB');

const skincareSchema = {
    type: Type.OBJECT,
    properties: {
        routine: {
            type: Type.OBJECT,
            properties: {
                morning: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            stepName: { type: Type.STRING },
                            id: { type: Type.STRING, description: "Must exactly match an ID from the skincare CATALOG" },
                            whyItSuitsUser: { type: Type.STRING }
                        },
                        required: ["stepName", "id", "whyItSuitsUser"]
                    }
                },
                night: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            stepName: { type: Type.STRING },
                            id: { type: Type.STRING, description: "Must exactly match an ID from the skincare CATALOG" },
                            whyItSuitsUser: { type: Type.STRING }
                        },
                        required: ["stepName", "id", "whyItSuitsUser"]
                    }
                }
            },
            required: ["morning", "night"]
        }
    },
    required: ["routine"]
};

async function recommendSkincare(skinType, budget, imageMimeType, imageBase64) {
    const dbFilter = SKINCARE_DB.filter(item => 
        (item.skinType.includes("all") || item.skinType.includes(skinType.toLowerCase())) &&
        item.budget.includes(budget.toLowerCase())
    );
    const catalogStr = `SKINCARE CATALOG:\n${buildCatalogString(dbFilter)}`;
    const systemInstruction = `You are a dermatologist. Recommend a skincare routine for someone with ${skinType} skin on a ${budget} budget.
If an image is provided, analyze any visible skin conditions to tailor the reason.
Select products strictly from the catalog provided below.
Morning routine should include Cleanser, Moisturizer, and Sunscreen.
Night routine should include Makeup Remover, Cleanser, Treatment/Serum, and Moisturizer.
Provide a compelling 'whyItSuitsUser' reason for each.
CATALOGS:\n${catalogStr}`;

    const apiCallFn = async (apiKey) => {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        const contents = [];
        if (imageBase64) {
            contents.push({ role: 'user', parts: [{ inlineData: { mimeType: imageMimeType, data: imageBase64 } }, { text: "Provide a routine based on this image, skin type, and budget." }] });
        } else {
            contents.push({ role: 'user', parts: [{ text: `Provide a routine for ${skinType} skin on a ${budget} budget.` }] });
        }

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: skincareSchema,
                temperature: 0.2
            }
        });
        return JSON.parse(response.text);
    };

    return await apiKeyManager.executeWithRetry(apiCallFn);
}

const wardrobeSchema = {
    type: Type.OBJECT,
    properties: {
        outfits: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    description: { type: Type.STRING },
                    items: { 
                        type: Type.ARRAY, 
                        items: { type: Type.STRING, description: "Description of the specific item from the uploaded images used in this outfit." }
                    }
                },
                required: ["name", "description", "items"]
            }
        }
    },
    required: ["outfits"]
};

async function analyzeWardrobe(images) {
    const systemInstruction = `You are a fashion stylist. I am providing you with multiple images of my clothing items.
Mix and match them to create 3-5 stylish outfits.
For each outfit, provide a catchy name, a description of the style/vibe, and a list of the exact items you used from my uploads.
Do NOT invent items that are not in the pictures.`;

    const apiCallFn = async (apiKey) => {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        
        const contents = [{
            role: 'user',
            parts: [
                { text: "Here are the items in my wardrobe. Mix and match them to create stylish outfits." }
            ]
        }];
        
        images.forEach(img => {
            contents[0].parts.push({
                inlineData: { mimeType: img.mimeType, data: img.base64Data }
            });
        });

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: wardrobeSchema,
                temperature: 0.4
            }
        });
        return JSON.parse(response.text);
    };

    return await apiKeyManager.executeWithRetry(apiCallFn);
}

module.exports = {
    analyzeFace,
    analyzeBody,
    recommendSkincare,
    analyzeWardrobe
};
