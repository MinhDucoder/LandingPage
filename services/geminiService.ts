
import { GoogleGenAI } from "@google/genai";

export const getBeautyAdvice = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are a professional beauty consultant for 'Healthmate GLOW'. 
        Product: Healthmate GLOW 60 Chewable Tablets.
        Flavor: Delicious Strawberry.
        Key Ingredients (4-in-1): Nano Collagen, Biotin, Vitamin B-Complex, and Omega-3 Fatty Acid.
        FDA Reg: FR-4000013932279.
        Benefits: Whitens skin, reduces hair fall, strengthens nails, boosts energy, and supports heart/brain health.
        Style: Encouraging, luxurious yet affordable brand tone, helpful, and concise.
        If asked about cost, tell them about the 'Value Pair' deal in the pricing section.
        Target: People who want a 'better version of themselves' through easy daily supplementation.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm here to help you glow! Could you please try your question again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hi! Our beauty experts are currently assisting other glow-getters. Feel free to explore our 4-in-1 formula details above!";
  }
};
