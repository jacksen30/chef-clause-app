export default async function getRecipeFromChefClaude(ingredientsArr) {
    try {
        const response = await fetch("/.netlify/functions/anthropic-proxy", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ingredientsArr }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        return data.recipe;  // ✅ Extract recipe text
    } catch (error) {
        console.error("Error fetching recipe:", error);
        return "Sorry, something went wrong while generating the recipe.";
    }
}