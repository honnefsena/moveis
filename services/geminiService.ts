import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in process.env.API_KEY");
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSalesDescription = async (keyword: string, price: string): Promise<string> => {
  try {
    const ai = getAiClient();
    const prompt = `
      Escreva uma descrição curta, atraente e vendedora para um item usado de mudança.
      Item: ${keyword}
      Preço sugerido: ${price}
      Idioma: Português do Brasil.
      Tom: Amigável, honesto e urgente (motivo: mudança).
      Máximo de 3 frases.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Descrição não disponível no momento.";
  } catch (error) {
    console.error("Error generating description:", error);
    return "Não foi possível gerar a descrição automaticamente. Tente novamente.";
  }
};