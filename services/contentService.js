const HAIR_DB = require('../content/hairDB');
const MAKEUP_DB = require('../content/makeupDB');
const OUTFIT_DB = require('../content/outfitDB');

function resolveFaceContent(recommendations) {
    const resolveItems = (aiItems, db) => {
        if (!aiItems || !Array.isArray(aiItems)) return [];
        return aiItems.map(aiItem => {
            const dbItem = db.find(d => d.id === aiItem.id);
            if (!dbItem) return null;
            // Merge static DB content with AI's personalized reason
            return {
                ...dbItem,
                whyItSuitsUser: aiItem.whyItSuitsUser
            };
        }).filter(item => item != null);
    };

    return {
        makeup: resolveItems(recommendations.makeup, MAKEUP_DB),
        hair: resolveItems(recommendations.hair, HAIR_DB)
    };
}

function resolveBodyContent(recommendations) {
    const resolveItems = (aiItems, db) => {
        if (!aiItems || !Array.isArray(aiItems)) return [];
        return aiItems.map(aiItem => {
            const dbItem = db.find(d => d.id === aiItem.id);
            if (!dbItem) return null;
            return {
                ...dbItem,
                whyItSuitsUser: aiItem.whyItSuitsUser
            };
        }).filter(item => item != null);
    };

    return {
        outfit: resolveItems(recommendations.outfit, OUTFIT_DB)
    };
}

const SKINCARE_DB = require('../content/skincareDB');

function resolveSkincareContent(routine) {
    if (!routine) return { morning: [], night: [] };

    const resolveSteps = (steps) => {
        if (!steps || !Array.isArray(steps)) return [];
        return steps.map(aiStep => {
            const dbItem = SKINCARE_DB.find(d => d.id === aiStep.id);
            if (!dbItem) return null;
            return {
                stepName: aiStep.stepName,
                ...dbItem,
                whyItSuitsUser: aiStep.whyItSuitsUser,
                purchaseLink: `https://shopee.vn/search?keyword=${encodeURIComponent(dbItem.name)}`
            };
        }).filter(item => item != null);
    };

    return {
        morning: resolveSteps(routine.morning),
        night: resolveSteps(routine.night)
    };
}

module.exports = {
    resolveFaceContent,
    resolveBodyContent,
    resolveSkincareContent
};
