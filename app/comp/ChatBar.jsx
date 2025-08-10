"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export default function ChatBar({ input, handleInput, onSend, onKeyPress }) {
  const placeholders = [
    "Ask me anything about Salman Ahmad...",
    "Who is Salman Ahmad?",
    "What projects is he working on?",
    "Write a short bio of Salman Ahmad.",
  ];

  const handleChange = (e) => {
    handleInput(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend();
  };

  return (
    <div className="absolute w-[90%] md:w-4/5 md:left-[10%] bottom-3">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        value={input} // This will now work properly
        onChange={handleChange}
        onSubmit={handleSubmit}
        onKeyDown={onKeyPress}
      />
    </div>
  );
}