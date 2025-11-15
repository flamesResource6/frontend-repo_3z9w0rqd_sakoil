import { useEffect, useRef, useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function AgentChatModal({ open, onClose, systemInstruction }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m Career-Twin, Iqbal\'s agent. How can I help?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  if (!open) return null;

  const sendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: 'user', content: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/askAgent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content, systemInstruction }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      setMessages((m) => [...m, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Sorry, something went wrong contacting the agent.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-[95vw] max-w-2xl h-[75vh] bg-gray-900/95 border border-white/10 rounded-2xl backdrop-blur-md shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div>
            <h3 className="text-white font-semibold">Ask My Agent</h3>
            <p className="text-white/60 text-xs">Career-Twin: professional Q&A about Iqbal</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-white/10">
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <div className="p-4 space-y-3 h-[calc(75vh-120px)] overflow-y-auto prose prose-invert max-w-none">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
              <div className={
                'inline-block px-3 py-2 rounded-2xl text-sm ' +
                (m.role === 'user' ? 'bg-sky-500/20 text-sky-200 border border-sky-400/30' : 'bg-white/5 text-white border border-white/10')
              }>
                {m.role === 'assistant' ? (
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                ) : (
                  <span>{m.content}</span>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-sm bg-white/5 text-white border border-white/10">
                <Loader2 className="h-4 w-4 animate-spin" />
                Thinking...
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        <form onSubmit={sendMessage} className="absolute bottom-0 inset-x-0 p-3 border-t border-white/10 bg-gray-900/80">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Iqbal's skills, projects, or experience..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-white text-sm hover:bg-sky-400 transition">
              <Send className="h-4 w-4" />
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
