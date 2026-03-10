import React, { useState, useRef, useEffect } from 'react';

const OPENROUTER_API_KEY = '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';
const MODEL = 'stepfun/step-3.5-flash:free';
const SYSTEM_PROMPT = "You are AI Health Copilot, a knowledgeable and empathetic AI health assistant. Provide clear, evidence-based health information and guidance. Always remind users to consult a qualified healthcare professional for medical diagnoses or treatment decisions. Keep responses concise and easy to understand.";

// ── Inline markdown: **bold**, *italic*, `code`
const parseInline = (text) => {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[2] !== undefined) parts.push(<strong key={match.index} className="font-semibold">{match[2]}</strong>);
    else if (match[3] !== undefined) parts.push(<em key={match.index}>{match[3]}</em>);
    else if (match[4] !== undefined) parts.push(<code key={match.index} className="bg-blue-50 text-blue-700 px-1 rounded text-xs font-mono">{match[4]}</code>);
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};

// ── Block-level markdown renderer (returns JSX)
const MarkdownMessage = ({ text }) => {
  const lines = text.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (line.trim() === '') { i++; continue; }

    // ⚠️ Warning / alert line
    if (line.trim().startsWith('⚠️')) {
      blocks.push(
        <div key={i} className="my-2 p-2 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg text-xs text-amber-800">
          {parseInline(line.trim())}
        </div>
      );
      i++; continue;
    }

    // Heading ## or ###
    if (/^#{1,3} /.test(line)) {
      const level = line.match(/^(#+)/)[1].length;
      const content = line.replace(/^#+\s*/, '');
      const cls = level === 1
        ? 'text-sm font-bold text-gray-900 mt-2 mb-1'
        : 'text-xs font-bold text-gray-800 mt-2 mb-0.5 uppercase tracking-wide';
      blocks.push(<div key={i} className={cls}>{parseInline(content)}</div>);
      i++; continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      blocks.push(<hr key={i} className="my-2 border-gray-200" />);
      i++; continue;
    }

    // Blockquote >
    if (line.trimStart().startsWith('> ')) {
      blocks.push(
        <div key={i} className="my-1 pl-3 border-l-4 border-blue-300 text-gray-600 italic text-xs">
          {parseInline(line.replace(/^>\s*/, ''))}
        </div>
      );
      i++; continue;
    }

    // Unordered list  - item / * item
    if (/^[\s]*[-*]\s/.test(line)) {
      const items = [];
      while (i < lines.length && /^[\s]*[-*]\s/.test(lines[i])) {
        items.push(<li key={i} className="flex gap-1.5 items-start"><span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span><span>{parseInline(lines[i].replace(/^[\s]*[-*]\s/, ''))}</span></li>);
        i++;
      }
      blocks.push(<ul key={`ul-${i}`} className="my-1 space-y-1 text-xs">{items}</ul>);
      continue;
    }

    // Ordered list  1. item
    if (/^[\s]*\d+\.\s/.test(line)) {
      const items = [];
      let num = 1;
      while (i < lines.length && /^[\s]*\d+\.\s/.test(lines[i])) {
        items.push(<li key={i} className="flex gap-1.5 items-start"><span className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold flex items-center justify-center">{num}</span><span>{parseInline(lines[i].replace(/^[\s]*\d+\.\s/, ''))}</span></li>);
        i++; num++;
      }
      blocks.push(<ol key={`ol-${i}`} className="my-1 space-y-1 text-xs">{items}</ol>);
      continue;
    }

    // Normal paragraph
    blocks.push(<p key={i} className="text-xs leading-relaxed">{parseInline(line)}</p>);
    i++;
  }

  return <div className="space-y-1">{blocks}</div>;
};

const QUICK_PROMPTS = [
  "I have a headache",
  "How to sleep better?",
  "Stress relief tips",
  "Check my symptoms",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm your **AI Health Copilot**.\n\nI can help you with:\n- Symptom checking\n- Health advice\n- Wellness tips\n- Medical information\n\nHow can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages, isLoading]);

  const toggleChat = () => setIsOpen(prev => !prev);

  const sendMessage = async (text) => {
    if (!text.trim() || isLoading) return;
    setShowQuickPrompts(false);

    const userMessage = { id: Date.now(), text: text.trim(), sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const updatedHistory = [...conversationHistory, { role: 'user', content: text.trim() }];
    setConversationHistory(updatedHistory);

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'AI Health Copilot'
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...updatedHistory]
        })
      });

      if (!response.ok) throw new Error(`API error: ${response.status}`);

      const data = await response.json();
      const botText = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
      setConversationHistory(prev => [...prev, { role: 'assistant', content: botText }]);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot', timestamp: new Date() }]);
    } catch {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: 'Sorry, I encountered an error connecting to the AI. Please try again.', sender: 'bot', timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => sendMessage(inputValue);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="w-96 h-[620px] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-white/20"
          style={{ background: 'linear-gradient(145deg, #ffffff, #f0f4ff)' }}
        >
          {/* ── Header ── */}
          <div
            className="relative p-4 flex items-center justify-between flex-shrink-0 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0040C1 0%, #3b5fe2 50%, #6366f1 100%)' }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10"></div>
            <div className="absolute -bottom-4 right-12 w-16 h-16 rounded-full bg-white/5"></div>

            <div className="flex items-center gap-3 relative">
              {/* Bot Avatar */}
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">AI Health Copilot</h3>
                <p className="text-blue-200 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online · Always here to help
                </p>
              </div>
            </div>

            <button
              onClick={toggleChat}
              className="relative w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all border border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: '#c7d2fe transparent' }}>
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                {message.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center mt-1"
                    style={{ background: 'linear-gradient(135deg, #0040C1, #6366f1)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                )}
                {message.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl flex-shrink-0 bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}

                <div className={`max-w-[78%] ${message.sender === 'user' ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl shadow-sm ${
                      message.sender === 'user'
                        ? 'text-white rounded-tr-sm'
                        : 'bg-white text-gray-800 border border-blue-50 rounded-tl-sm'
                    }`}
                    style={message.sender === 'user' ? { background: 'linear-gradient(135deg, #0040C1, #3b5fe2)' } : {}}
                  >
                    {message.sender === 'bot'
                      ? <MarkdownMessage text={message.text} />
                      : <p className="text-xs leading-relaxed">{message.text}</p>
                    }
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex gap-2 items-start">
                <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0040C1, #6366f1)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="bg-white border border-blue-50 px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm">
                  <div className="flex items-center gap-1">
                    {[0, 150, 300].map(delay => (
                      <span key={delay} className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }}></span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quick prompts */}
            {showQuickPrompts && !isLoading && (
              <div className="pt-1">
                <p className="text-[10px] text-gray-400 text-center mb-2">Quick questions</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {QUICK_PROMPTS.map(prompt => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="text-xs px-3 py-1.5 rounded-full border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input ── */}
          <div className="px-4 pb-4 pt-3 bg-white/80 backdrop-blur-sm border-t border-blue-50 flex-shrink-0">
            <div className="flex items-center gap-2 bg-white rounded-2xl border border-blue-100 shadow-sm px-3 py-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a health question…"
                disabled={isLoading}
                className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400 disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isLoading}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: inputValue.trim() && !isLoading ? 'linear-gradient(135deg, #0040C1, #6366f1)' : '#e5e7eb' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${inputValue.trim() && !isLoading ? 'text-white' : 'text-gray-400'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              🔒 AI Health Copilot · Not a substitute for professional medical advice
            </p>
          </div>
        </div>
      )}

      {/* ── FAB Toggle Button ── */}
      <button
        onClick={toggleChat}
        className="relative w-16 h-16 rounded-2xl text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: 'linear-gradient(135deg, #0040C1 0%, #3b5fe2 60%, #6366f1 100%)' }}
      >
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-2xl animate-ping opacity-30"
            style={{ background: 'linear-gradient(135deg, #0040C1, #6366f1)' }}></span>
        )}
        <div className="relative">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white"></span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default Chatbot;