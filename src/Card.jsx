
function Card() {
    const cards = [
        {
            icon: 'clock',
            title: 'Tiempo real',
            text: 'Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.'
        },
        {
            icon: 'eye',
            title: 'No hay tasas escondidas',
            text: 'Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'
        },
        {
            icon: 'dollar-sign',
            title: 'Compara monedas',
            text: 'No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.'
        },
        {
            icon: 'check-circle',
            title: 'Información confiable',
            text: 'Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'
        },
    ]
    const show = () => {
        return cards.map((card, index) => (
            <article key={index} className="product-detail--card">
                <span className={card.icon}></span>
                <p className="product--card-title">{card.title}</p>
                <p className="product--card-body">{card.text}</p>
            </article>
        ));
    };
    return (
        <section className="product-cards--container">
            {show()}
        </section>
    )
}
export default Card;