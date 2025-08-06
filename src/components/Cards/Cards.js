import './Cards.scss';

const Cards = ({ cards, changePage, setCurrentItem }) => { 
    let items = cards.map(item => { 
        const { image, name, price, origin, key} = item;
        
        const onCardOpen = (key) => {
            if (changePage) {
                setCurrentItem(key)
                changePage(4);
            }
          }

            return (
                <button className="card" key={key} onClick={()=> {onCardOpen(key)}}>
                    <img src={require("./img/" + image)} alt={origin} />
                    <div className="card__body">
                        <p className="card__text">{name}</p>
                        <p className="card__text">{origin}</p>
                        <p className="card__text card__price">{price}</p>
                    </div>
                </button>
            );
    })
    return items;
}

export default Cards;
