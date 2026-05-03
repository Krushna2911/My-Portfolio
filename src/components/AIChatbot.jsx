import { useState, useRef, useEffect, useCallback } from "react";
import { PORTFOLIO_CONTEXT } from "../data/portfolioContext";

const QUICK_QUESTIONS = [
  "What are your top skills?",
  "Tell me about your projects",
  "Are you available to hire?",
  "What certifications do you have?",
];

export default function AIChatbot({ dark }) {
  const [open,    setOpen]    = useState(false);
  const [input,   setInput]   = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs,    setMsgs]    = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm a Portfolio Copilot. Ask me anything about skills, projects, or availability!",
    },
  ]);

  const bottomRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const sendMessage = useCallback(async (text) => {
    const userMsg = (text || input).trim();
    if (!userMsg || loading) return;

    setInput("");

    const updatedMsgs = [...msgs, { role: "user", content: userMsg }];
    setMsgs(updatedMsgs);
    setLoading(true);

    try {
      // ── Groq free API call ──
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",   // free model
            max_tokens: 500,
            messages: [
              // System prompt — tells AI who you are
              { role: "system", content: PORTFOLIO_CONTEXT },
              // Full conversation history
              ...updatedMsgs.map((m) => ({
                role:    m.role,
                content: m.content,
              })),
            ],
          }),
        }
      );

      // Check if API call was successful
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || "API error");
      }

      const data  = await response.json();
      const reply = data?.choices?.[0]?.message?.content ?? "Sorry, no response.";

      setMsgs((prev) => [...prev, { role: "assistant", content: reply }]);

    } catch (err) {
      console.error("Groq API error:", err);
      setMsgs((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `⚠️ Error: ${err.message || "Something went wrong. Check your API key."}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, msgs]);

  const borderColor = dark
    ? "rgba(255,255,255,0.08)"
    : "rgba(0,0,0,0.06)";

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setOpen(!open)}
        title="Chat with Portfolio Copilot"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 200,
          width: 56, height: 56, borderRadius: "50%",
          border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          color: "white", fontSize: 22,
          boxShadow: "0 8px 25px rgba(99,102,241,0.45)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {open ? "✕" : "🕶️"}
      </button>

      {/* ── Chat panel ── */}
      {open && (
        <div style={{
          position: "fixed", bottom: 92, right: 16, zIndex: 200,
          width: "min(380px, 92vw)", maxHeight: "72vh",
          display: "flex", flexDirection: "column",
          borderRadius: 20, overflow: "hidden",
          background: dark ? "#111120" : "white",
          border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          animation: "scaleIn 0.2s ease",
        }}>

          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            padding: "14px 18px",
            display: "flex", alignItems: "center", gap: 12,
            flexShrink: 0,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 18,
            }}>🕶️</div>

            <div>
              <div style={{ fontWeight: 800, color: "white", fontSize: 14 }}>
                Portfolio Copilot
              </div>
              <div style={{
                fontSize: 11, color: "rgba(255,255,255,0.7)",
                display: "flex", alignItems: "center", gap: 5,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#22c55e", display: "inline-block",
                  animation: "pulse 2s infinite",
                }} />
                Powered by Krushna Nikam
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                marginLeft: "auto", background: "none",
                border: "none", color: "rgba(255,255,255,0.8)",
                cursor: "pointer", fontSize: 20, lineHeight: 1,
              }}
            >✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto",
            padding: 16,
            display: "flex", flexDirection: "column", gap: 10,
          }}>
            {msgs.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "85%",
                  padding: "10px 14px",
                  fontSize: 13, lineHeight: 1.6,
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                    : dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
                  color: msg.role === "user"
                    ? "white"
                    : dark ? "rgba(255,255,255,0.85)" : "#1e293b",
                  borderRadius: msg.role === "user"
                    ? "16px 16px 4px 16px"
                    : "16px 16px 16px 4px",
                  wordBreak: "break-word",
                }}
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br>"),
                  }}
                />
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{
                display: "flex", gap: 5, width: "fit-content",
                padding: "12px 16px", borderRadius: "16px 16px 16px 4px",
                background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)",
              }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#7c3aed", display: "inline-block",
                    animation: `pulse 0.6s ease-in-out ${i * 0.2}s infinite`,
                  }} />
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          {msgs.length <= 2 && (
            <div style={{
              padding: "0 12px 10px",
              display: "flex", flexWrap: "wrap", gap: 6,
              flexShrink: 0,
            }}>
              {QUICK_QUESTIONS.map((q) => (
                <button key={q} onClick={() => sendMessage(q)} style={{
                  padding: "6px 12px", borderRadius: 100,
                  border: "1px solid rgba(124,58,237,0.3)",
                  background: "rgba(124,58,237,0.08)",
                  color: "#7c3aed", fontSize: 11, fontWeight: 700,
                  cursor: "pointer", transition: "background 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.18)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(124,58,237,0.08)"}
                >{q}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: "10px 12px",
            borderTop: `1px solid ${borderColor}`,
            display: "flex", gap: 8, flexShrink: 0,
          }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !loading && sendMessage()}
              placeholder="Ask anything..."
              disabled={loading}
              style={{
                flex: 1, padding: "10px 14px",
                borderRadius: 12, fontSize: 13, outline: "none",
                border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                color: dark ? "white" : "#0f172a",
                opacity: loading ? 0.6 : 1,
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              style={{
                padding: "10px 16px", borderRadius: 12,
                border: "none", cursor: "pointer",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "white", fontWeight: 800, fontSize: 16,
                opacity: (!input.trim() || loading) ? 0.45 : 1,
                transition: "opacity 0.2s",
              }}
            >→</button>
          </div>

        </div>
      )}
    </>
  );
}