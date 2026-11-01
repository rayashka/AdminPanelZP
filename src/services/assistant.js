// Сервис ответов ИИ-ассистента.
// Сейчас это заглушка с задержкой. Чтобы подключить настоящий ИИ, замените тело
// функции на запрос к вашему серверу (пример ниже) — остальной код менять не нужно.
//
// history — массив { role: 'user' | 'bot', text: string }
export async function askAssistant(history) {
  // const res = await fetch('/api/assistant', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ messages: history }),
  // });
  // if (!res.ok) throw new Error('Assistant request failed');
  // const data = await res.json();
  // return data.reply;

  await new Promise((resolve) => setTimeout(resolve, 1800));
  return 'Спасибо за сообщение! Скоро здесь появятся ответы ассистента.';
}
