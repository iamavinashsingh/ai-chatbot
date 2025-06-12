# AI Chatbot

This is an AI-powered chatbot application built with modern web technologies. It provides a clean and responsive user interface and leverages advanced AI models for intelligent conversations.

## Deployment links

- *link*:  https://ai-chatbot-a8kvwtw5c-iamavinashsinghs-projects.vercel.app/

## Features

- **AI-Powered Conversations**: Uses Google's `gemini-2.0-flash` model for intelligent and context-aware responses.
- **Real-Time Streaming**: Chat responses are streamed for a smooth and interactive user experience.
- **Modern UI**: Built with reusable React components and styled for simplicity and usability.

## Tech Stack

- **Next.js**: A React framework for building server-rendered and statically generated web applications.
- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Google AI SDK**: Used to integrate the `gemini-2.0-flash` model for AI-powered responses.
- **TypeScript**: Provides static typing for better code quality and maintainability.

## Project Structure

- **Frontend**: Located in the `app` and `components` directories, featuring the chatbot interface and reusable UI components.
- **API**: The backend logic for handling chat messages is implemented in [`app/api/chat/route.ts`](app/api/chat/route.ts).



## Key Files
**Chat Interface:**  app/page.tsx - The main page rendering the chatbot UI.
**Chat API:**  app/api/chat/route.ts - Handles backend logic for processing chat messages.
**Navbar Component:**  components/ui/navbar.tsx - A reusable navigation bar component.
**Assistant Component:**     app/assistant.tsx - The core chatbot component.


## How It Works
- The user interacts with the chatbot interface on the frontend.
- Messages are sent to the backend API at /api/chat.
- The API processes the messages using Google's AI model and streams the response back to the frontend.


## Tech Highlights
- Next.js: Enables server-side rendering and API routes for seamless integration between frontend and backend.
- Tailwind CSS: Simplifies styling with pre-defined utility classes, ensuring a responsive and modern design.
- Google AI SDK: Provides access to advanced AI models for natural language processing.
