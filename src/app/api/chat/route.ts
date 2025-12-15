import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Access the key using the specific name we defined in .env.local
    const apiKey = process.env.NEXT_PUBLIC_CHATBOT_API_KEY;

    // Debugging: Check if key is loaded (prints last 4 chars to server console)
    console.log("Chat API Key Check:", apiKey ? `Loaded (ends in ...${apiKey.slice(-4)})` : "MISSING");

    if (!apiKey) {
      console.error("API Key is completely missing from process.env");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using 'gemini-1.5-flash' which is the current standard model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const body = await req.json();
    
    // specific error handling for body parsing
    if (!body) {
         return NextResponse.json({ error: "No body provided" }, { status: 400 });
    }

    // Handle both 'messages' array (standard) or 'prompt' string
    const message = body.messages ? body.messages[body.messages.length - 1].content : body.prompt;

    const systemPrompt = `You are a helpful AI assistant for a portfolio website. 
    Answer questions about the portfolio owner professionally and concisely.
    User Query: ${message}`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ role: 'assistant', content: text });

  } catch (error: any) {
    console.error("Chat API Detailed Error:", error);
    
    // Return the specific error message to the frontend for better debugging
    return NextResponse.json(
      { error: `Chat failed: ${error.message || "Unknown error"}` },
      { status: 500 }
    );
  }
}