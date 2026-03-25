import React, { useState, useRef, useEffect } from "react";

type Sender = "bot" | "user";

interface Message {
  text: string;
  sender: Sender;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hey 👋 Welcome to RAWLINE 🔥", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const suggestions = [
    "Where is Home?",
    "Show Categories",
    "Do you have hoodies?",
    "How much are the products?",
    "Contact support"
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const getReply = (msg: string) => {
    if (msg.includes("home")) {
      scrollToSection("home");
      return "🏠 Taking you to Home!";
    }

    if (msg.includes("about")) {
      scrollToSection("about");
      return "📖 Here's About!";
    }

    if (
      msg.includes("category") ||
      msg.includes("categories") ||
      msg.includes("shop") ||
      msg.includes("products")
    ) {
      scrollToSection("categories");
      return "🛍️ Opening Categories! Check out the latest drops 🔥";
    }

    if (msg.includes("hoodie")) return "🧥 Hoodies are 🔥 right now!";
    if (msg.includes("pants")) return "👖 Check our pants collection!";
    if (msg.includes("tshirt")) return "👕 Clean fits available!";
    if (msg.includes("price") || msg.includes("cost"))
      return "🏷️ Prices are shown below each product!";
    if (msg.includes("contact") || msg.includes("support"))
      return "📩 You can contact us using the Contact button above!";
    if (msg.includes("shipping") || msg.includes("delivery"))
      return "🚚 We offer nationwide delivery!";
    if (msg.includes("return") || msg.includes("refund"))
      return "🔁 Returns are accepted within 7 days!";
    if (msg.includes("hello") || msg.includes("hi"))
      return "👋 Yo! Need help?";
    if (msg.includes("thank"))
      return "❤️ Anytime! Stay stylish 🔥";

    return "😅 I can help with RAWLINE products!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();

    setMessages(prev => [...prev, { text: userMsg, sender: "user" }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = getReply(userMsg.toLowerCase());

      setMessages(prev => [
        ...prev,
        { text: reply, sender: "bot" }
      ]);

      setTyping(false);
    }, 900);
  };

  const handleSuggestionClick = (text: string) => {
    setTyping(true);

    setMessages(prev => [...prev, { text, sender: "user" }]);

    setTimeout(() => {
      const reply = getReply(text.toLowerCase());

      setMessages(prev => [
        ...prev,
        { text: reply, sender: "bot" }
      ]);

      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#000",
          color: "#fff",
          padding: "14px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
          zIndex: 999
        }}
      >
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "330px",
            height: "470px",
            background: "#111",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            zIndex: 999
          }}
        >
          {/* HEADER WITH ACTIVE STATUS */}
          <div
            style={{
              background: "#000",
              color: "#fff",
              padding: "10px 12px",
              borderBottom: "1px solid #333"
            }}
          >
            <div style={{ fontWeight: "bold" }}>RAWLINE Assistant 🔥</div>
            <div style={{ fontSize: "12px", color: "#aaa", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{
                width: "8px",
                height: "8px",
                background: "#4CAF50",
                borderRadius: "50%",
                display: "inline-block"
              }}></span>
              Active now
            </div>
          </div>

          {/* MESSAGES */}
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                  margin: "6px 0"
                }}
              >
                {msg.sender === "bot" && (
                  <div style={{ marginRight: "6px" }}>🤖</div>
                )}

                <span
                  style={{
                    padding: "8px 12px",
                    borderRadius: "18px",
                    background:
                      msg.sender === "user" ? "#aa1414" : "#2a2a2a",
                    color: "#fff",
                    maxWidth: "70%",
                    fontSize: "14px"
                  }}
                >
                  {msg.text}
                </span>

                {msg.sender === "user" && (
                  <div style={{ marginLeft: "6px" }}>🧑</div>
                )}
              </div>
            ))}

            {typing && (
              <div style={{ display: "flex", margin: "5px 0" }}>
                <span
                  style={{
                    background: "#2a2a2a",
                    padding: "8px 12px",
                    borderRadius: "18px",
                    color: "#fff"
                  }}
                >
                  ...
                </span>
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* IMPROVED SUGGESTIONS (HORIZONTAL SCROLL) */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "6px",
              padding: "8px",
              borderTop: "1px solid #222",
              background: "#111"
            }}
          >
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(s)}
                style={{
                  whiteSpace: "nowrap",
                  background: "#1f1f1f",
                  color: "#fff",
                  border: "1px solid #333",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  cursor: "pointer"
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* INPUT */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #333",
              background: "#000"
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                outline: "none",
                background: "#1a1a1a",
                color: "#fff"
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: "8px",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "none",
                background: "#aa1414",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;