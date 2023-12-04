import Card from './Card'
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
        <section className='main-exchange-container'>
          <div className='backgroundImg'></div>
          <div className='main-exchange-container--title'>
            <h2>Visibilizamos todas las tazas de cambio.</h2>
            <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
          </div>
          <section className='main-tables-container'>
            <div className='main-currency-table'>
              <p className='currency-table--title'>Monedas</p>
              <div className='currency-table--container'>
                <p>Bitcoin</p>
                <p>$ 1.96 <u></u></p>
                <p>Ethereum</p>
                <p>$ 0.07 <i></i></p>
                <p>Ripple</p>
                <p>$ 2.15 <u></u></p>
                <p>Stellar</p>
                <p>$ 4.96 <u></u></p>
              </div>
              <div className='currency-table--date'>
                <p><b>Actualizado:</b> 19 de julio 23:45</p>
              </div>
            </div>
            <div className='main-currency-table'>
              <p className='currency-table--title blueTitle'>Comisiones</p>
              <div className='currency-table--container'>
                <p>Bitrade</p>
                <p>$ 12.96</p>
                <p>Bitpreco</p>
                <p>$ 13.07</p>
                <p>Novadax</p>
                <p>$ 13.15</p>
                <p>Coinext</p>
                <p>$ 14.96</p>
              </div>
              <div className='currency-table--date blueDate'>
                <p><b>Actualizado:</b> 19 de julio 23:48</p>
              </div>
            </div>
          </section>
        </section>
        <section className='main-product-detail'>
          <span className="product-detail--batata-logo"></span>
          <div className="product-detail--title">
            <h2>Creamos un producto sin comparación.</h2>
            <p>Confiable y diseñado para su uso diario.</p>
          </div>
          <Card></Card>
        </section>
        <section className="bitcoin-img-container">
          <h2>Conócelo hoy</h2>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
