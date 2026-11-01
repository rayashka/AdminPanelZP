import useCountUp from '../hooks/useCountUp.js';

function Counter({ target, suffix = '' }) {
  const [ref, value] = useCountUp(target);
  return <b className="stats__num" ref={ref}>{value}{suffix}</b>;
}

export default function Stats() {
  return (
    <section className="section" aria-label="Клиника в цифрах">
      <ul className="stats">
        <li>
          <Counter target={20} /> <span className="stats__unit">лет</span>
          <span className="stats__label">На медицинском рынке</span>
        </li>
        <li>
          <Counter target={40} suffix="+" />
          <span className="stats__label">Квалифицированных врачей</span>
        </li>
        <li>
          <Counter target={20} />
          <span className="stats__label">Основных направлений</span>
        </li>
      </ul>
    </section>
  );
}
