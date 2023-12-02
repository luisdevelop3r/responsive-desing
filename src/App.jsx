import logo from './assets/img/logo.svg'

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logoimg" />
        <div className="header--title-container">
          <h1>La próxima revolución en el intercambio de criptomonedas.</h1>
          <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias.</p>
          <a href="" className="header--button" target="_self">Conoce Nuestros Planes<span></span></a>
        </div>
      </header>
      <main>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
