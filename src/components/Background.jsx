import { useEffect, useRef, useState } from 'react';

// Фоновое видео на весь экран. Зациклено, без звука, не двигается при прокрутке.
// Если у пользователя включено «уменьшение движения», видео не запускается — виден постер.
export default function Background() {
  const ref = useRef(null);
  const [reduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    v.muted = true; // для автозапуска во всех браузерах
    v.play().catch(() => {});
  }, [reduce]);

  return (
    <video
      ref={ref}
      className="bg-video"
      src="/assets/bg.mp4"
      poster="/assets/bg-poster.jpg"
      autoPlay={!reduce}
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
