import { useEffect, useRef, useState } from 'react';
import { askAssistant } from '../services/assistant.js';

const GREETING = 'Ассалам Алейкум! Как ты? Я твой умный помощник.';

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff" aria-hidden="true">
      <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
    </svg>
  );
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([{ id: 0, role: 'bot', text: GREETING }]);

  const nextId = useRef(1);
  const alive = useRef(true);
  const firstRender = useRef(true);
  const chipRef = useRef(null);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    alive.current = true;
    return () => { alive.current = false; };
  }, []);

  // Фокус: при открытии — в поле ввода, при закрытии — обратно на кнопку
  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    (open ? inputRef : chipRef).current?.focus();
  }, [open]);

  // Закрытие по Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  // Автопрокрутка вниз
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  const send = async (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value || typing) return;

    const userMsg = { id: nextId.current++, role: 'user', text: value };
    const history = [...messages, userMsg];
    setMessages(history);
    setText('');
    setTyping(true); // показываем «ИИ думает ···»

    let reply;
    try {
      reply = await askAssistant(history);
    } catch {
      reply = 'Не удалось получить ответ. Попробуйте ещё раз чуть позже.';
    }
    if (!alive.current) return;
    setMessages((prev) => [...prev, { id: nextId.current++, role: 'bot', text: reply }]);
    setTyping(false);
  };

  if (!open) {
    return (
      <button
        ref={chipRef}
        type="button"
        className="float assistant"
        aria-label="Открыть ИИ Ассистента, в сети"
        aria-expanded="false"
        aria-controls="chat-panel"
        onClick={() => setOpen(true)}
      >
        <span className="assistant__icon"><SparkIcon /></span>
        <span className="assistant__text">
          <b className="assistant__name">ИИ Ассистент</b>
          <span className="assistant__status"><i></i>В сети</span>
        </span>
      </button>
    );
  }

  return (
    <section className="chat" id="chat-panel" role="dialog" aria-label="ИИ Ассистент">
      <header className="chat__head">
        <span className="assistant__icon"><SparkIcon /></span>
        <span className="assistant__text">
          <b className="assistant__name">ИИ Ассистент</b>
          <span className="assistant__status"><i></i>В сети</span>
        </span>
        <button type="button" className="chat__close" aria-label="Свернуть чат" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </header>

      <div className="chat__body" ref={bodyRef} role="log" aria-live="polite">
        {messages.map((m) => (
          <p key={m.id} className={'msg msg--' + m.role}>{m.text}</p>
        ))}
        {typing && (
          <p className="msg msg--bot msg--typing" aria-label="ИИ думает">
            ИИ думает
            <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          </p>
        )}
      </div>

      <form className="chat__form" onSubmit={send}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите сообщение..."
          aria-label="Сообщение"
          autoComplete="off"
          maxLength={500}
        />
        <button type="submit" className="chat__send" aria-label="Отправить" disabled={typing || !text.trim()}>
          <svg viewBox="0 0 24 24" width="15" height="15" fill="#fff" aria-hidden="true">
            <path d="M3 20.5l18-8.5L3 3.5l.02 6.6L15 12 3.02 13.9z" />
          </svg>
        </button>
      </form>
    </section>
  );
}
