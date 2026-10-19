import './App.css';

const PORTFOLIO_URL = 'https://github.com/Zambrana07/Portafolio';

const App = () => (
  <main className="cv-shell">
    <div className="cv-panel">
      <div className="cv-corners" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <p className="cv-kicker">Curriculum Vitae</p>
      <h1 className="cv-name">Alexander Zambrana Rodriguez</h1>
      <p className="cv-role">Software Engineer</p>

      <div className="cv-rule" aria-hidden="true">
        <span />
        <i />
        <span />
      </div>

      <p className="cv-lead">
        gays, BAHAHAHAHAHA. ok no, pero tengo q trabajar en esto 
      </p>

      <div className="cv-actions">
        <a className="cv-button" href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
          Volver al portafolio
        </a>
      </div>
    </div>
  </main>
);

export default App;
