export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__card">
        <div className="hero__text">
          <h1 id="hero-title">Забота о здоровье всей семьи</h1>
          <p>Запись к врачу и лабораторные исследования — в одном месте.</p>
          <div className="hero__mark">
            <img src="/assets/logo-white.png" alt="" width="160" height="156" />
            <span>ЗДОРОВОЕ<br />ПОКОЛЕНИЕ</span>
          </div>
        </div>
        <div className="hero__doctors" role="img" aria-label="Команда врачей клиники">
          <img className="doc doc--side" src="/assets/doctor-1.png" alt="" />
          <img className="doc doc--center" src="/assets/doctor-2.png" alt="" />
          <img className="doc doc--side" src="/assets/doctor-3.png" alt="" />
        </div>
      </div>
    </section>
  );
}
