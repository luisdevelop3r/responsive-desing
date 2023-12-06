
function PlanCard() {
    const cards = [
        {
            fondo: 'soft-blue',
            tag: 'Basic',
            period: 'Pago Mensual',
            price: '19',
            text: '*Cuentas con todas las funcionalidades basicas.'
        },
        {
            fondo: 'orange',
            tag: 'Recomendado',
            period: 'Pago Anual.',
            price: '99',
            text: '*Ahorras $129 comparado al plan mensual.'
        },
        {
            fondo: 'warm-black',
            tag: 'Premium',
            period: 'Pago Anual.',
            price: '130',
            text: 'plan con todos lo beneficios exclusivos.'
        }
    ]
    const show = () => {
        return cards.map((card, index) => (
            <article key={index} className="plans-container--card">
                <p className={`recomended-tag ${card.fondo}`}>{card.tag}</p>
                <div className="plan-info-container">
                    <h3 className="plan-card--title">{card.period}</h3>
                    <p className="plan-card--price"><sup>$</sup> {card.price}</p>
                    <p className="plan-card--saving">{card.text}</p>
                    <button className="plan-card--ca">Escoge este <span></span></button>
                </div>
            </article>
        ));
    };
    return (
        <>
            {show()}
        </>
    )
}
export default PlanCard;