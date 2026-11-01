import ChatAssistant from './ChatAssistant.jsx';

// Статичные элементы: всегда в нижних углах экрана (position: fixed)
export default function FloatingWidgets() {
  return (
    <>
      <img
        className="float float--ambulance"
        src="/assets/ambulance.svg"
        alt=""
        width="72"
        height="65"
      />
      <ChatAssistant />
    </>
  );
}
