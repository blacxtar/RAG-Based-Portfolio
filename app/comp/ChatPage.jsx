"use client";
import React, { useEffect, useRef, useState } from "react";
import ChatBar from "./ChatBar";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const streamingMessageRef = useRef("");
  const [typingState, setTypingState] = useState({
    isTyping: false,
    stage: "fetching",
    message: "",
  });
  const messagesEndRef = useRef(null);

  const initialMessages = [
    {
      id: "1",
      text: "👋 Hello! I'm your AI assistant specialized in helping with questions about **Salman Ahmad**.\n\nI can help you with:\n- 📚 Research and information\n- 💡 Analysis and insights\n- 🎯 Specific questions\n- 📝 Detailed explanations\n\nWhat would you like to know?",
      isUser: false,
      timestamp: new Date(),
    },
  ];

  const typingMessages = {
    fetching: "Searching knowledge base...",
    generating: "Processing and analyzing...",
    finalizing: "Crafting response...",
  };

  const suggestions = [
    { id: 1, text: "Write a short bio of Salman Ahmad." },
    { id: 2, text: "What projects is he working on?" },
    { id: 3, text: "Should we hire him? If yes,then why?" },
  ];

  // Function to handle click on a suggestion
  const handleSuggestionClick = (id) => {
    const selectedSuggestion = suggestions.find((s) => s.id === id);
    if (selectedSuggestion) {
      setInput(selectedSuggestion.text); // This will now work properly!
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(initialMessages);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingState]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInput = (e) => setInput(e.target.value);

  const handleSend = () => {
    if (!input.trim() || typingState.isTyping) return;

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput(""); // Clear input

    setTimeout(() => {
      generateAIResponse(currentInput);
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const generateAIResponse = async (input) => {
    try {
      // Stage 1: Fetching
      setTypingState({
        isTyping: true,
        stage: "fetching",
        message: typingMessages.fetching,
      });

      await new Promise((resolve) => setTimeout(resolve, 800));

      // Stage 2: Generating
      setTypingState((prev) => ({
        ...prev,
        stage: "generating",
        message: typingMessages.generating,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      if (!reader) throw new Error("No reader found");

      const messageId = Date.now().toString();
      streamingMessageRef.current = "";

      // Stage 3: Finalizing
      setTypingState((prev) => ({
        ...prev,
        stage: "finalizing",
        message: typingMessages.finalizing,
      }));

      // Insert placeholder AI message
      setMessages((prev) => [
        ...prev,
        { id: messageId, text: "", isUser: false, timestamp: new Date() },
      ]);

      // Hide typing indicator
      setTimeout(() => {
        setTypingState((prev) => ({ ...prev, isTyping: false }));
      }, 500);

      let lastUpdate = Date.now();
      const updateInterval = 50;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        streamingMessageRef.current += chunk;

        if (Date.now() - lastUpdate > updateInterval) {
          lastUpdate = Date.now();
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId
                ? { ...msg, text: streamingMessageRef.current }
                : msg
            )
          );
        }
      }

      // Final update after stream ends
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, text: streamingMessageRef.current }
            : msg
        )
      );
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: "⚠️ **Error**: Something went wrong. Please try again.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setTypingState((prev) => ({ ...prev, isTyping: false }));
    }
  };

  return (
    <div className="flex flex-col overflow-y-scroll w-full text-gray-500">
      {/* Chat messages container */}
      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Suggestions appear only when there's just the greeting */}
          {messages.length <= 1 && (
            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              {suggestions.map((q) => (
                <button
                  key={q.id}
                  onClick={() => handleSuggestionClick(q.id)}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full shadow-sm transition"
                >
                  {q.text}
                </button>
              ))}
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-3 max-w-[85%] ${
                  message.isUser ? "flex-row-reverse space-x-reverse" : ""
                }`}
              >
                {/* Message bubble */}
                <div className="flex flex-col space-y-1 flex-1">
                  <div
                    className={`relative px-5 py-4 ${
                      message.isUser
                        ? " text-gray-900 bg-gray-200 rounded-2xl"
                        : " text-gray-800"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          <div
            className={`${
              typingState.isTyping ? "flex" : "hidden"
            } justify-start group`}
          >
            <div className="flex items-start space-x-3 max-w-[85%]">
              <div className="flex flex-col space-y-1 flex-1">
                <div className="relative px-5 py-4 flex items-center gap-3">
                  {/* Loader */}
                  <div className="w-4 h-4 border-2 border-t-gray-600 border-gray-700 rounded-full animate-spin"></div>
                  {/* Status text */}
                  <p className="text-sm text-gray-700">{typingState.message}</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat input bar */}
      <ChatBar
        onSend={handleSend}
        handleInput={handleInput}
        input={input}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default ChatPage;
