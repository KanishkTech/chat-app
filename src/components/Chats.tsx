// pages/chat.js
import MessageBubble from "../components/MessageBubble";

export default function ChatScreen() {
  const messages = [
    { text: "Hi! How are you?", sender: false ,time:"05:30 AM"},
    { text: "I'm good, thanks! You?", sender: true,time:"05:45 AM" },
    { text: "Doing great!", sender: false ,time:"05:46 AM" },
    {text: "are yaar kuch baat nahi kar rahe ho aap,", sender: false ,time:"05:47 AM" },
    { text: "are nahi thoda busy tha main ", sender: true ,time:"05:48 AM" },
  ];

  return (
    <div className="flex flex-col p-4 h-screen overflow-y-auto scrollbar-hide bg-gray-100">
      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          message={msg.text}
          sender={msg.sender}
          time={msg.time || ""}
        />
      ))}
    </div>
  );
}
