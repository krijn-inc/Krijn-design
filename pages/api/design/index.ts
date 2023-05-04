import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { getAuth } from "@clerk/nextjs/server";

const config = new Configuration({ apiKey: process.env.OPENAI_SECRET_KEY });
const openAI = new OpenAIApi(config);

type Data = {
  markup: string;
  styling: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401);
  }

  const prompt = req.query.prompt! as string;
  const model = "gpt-3.5-turbo";

  const markupPrompt =
    "Generate content solely within the body element of an HTML structure for a web application that creates designs based on user input. Ensure clear class names, accessibility, and use comments for clarification. Feel free to create additional content or use filler material if needed. Provide only the HTML code of the content inside the body without any additional text response, and note that no formatting or line breaks are required.";
  const stylingPrompt =
    "Develop a CSS stylesheet for a given HTML structure created by an AI, which will be placed within an iframe. Keep in mind that the page where the content will be embedded already has a stylesheet, so it is crucial to be verbose in background styling, font sizing, and font usage to avoid conflicts. Utilize the provided class names and ensure accessibility. Consider any comments or intentions within the HTML content inside the body element. Focus on creating a visually appealing and user-friendly design that complements the existing styles. Provide only the CSS code without any additional text response, and note that no formatting or line breaks are required. Please ensure that the design is responsive and mobile-friendly.";

  const markupCompletion = await openAI.createChatCompletion({
    model,
    messages: [
      { role: "system", content: markupPrompt },
      { role: "user", content: prompt },
    ],
  });
  const markupResponse = markupCompletion.data.choices[0].message?.content!;

  const stylingCompletion = await openAI.createChatCompletion({
    model,
    messages: [
      { role: "system", content: stylingPrompt },
      { role: "user", content: markupResponse },
    ],
  });
  const stylingResponse = stylingCompletion.data.choices[0].message?.content!;

  res.status(200).json({ markup: markupResponse, styling: stylingResponse });
}
