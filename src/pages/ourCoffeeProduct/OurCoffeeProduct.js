import CardPageHeader from '../../components/CardPageHeader/CardPageHeader';
import Decor from '../../components/Decor/Decor';

import './OurCoffeeProduct.scss';

const OurCoffeeProduct = ({ pageTitle, currentItem, cards }) => {
    const item = cards[currentItem - 1];
    const { descriptions, image, name, origin, price } = item;
    console.log(image)
    return (
        <>
            <CardPageHeader
                pageTitle={pageTitle} />
            <div className='ourCoffeeProduct'>
                <div className='ourCoffeeProduct__con'>
            <img src={require("../../components/Cards/img/" + image)}
                     alt='#'
                        className='ourCoffeeProduct__img' />
                </div>
                <div className='ourCoffeeProduct__content'>
                <h2 className='ourCoffeeProduct__title'>{name}
                    <Decor
                        colorLogo ='black'
                        colorDivider='black' />
                </h2>
                <section className="ourCoffeeProduct__text">
                    <p><b>Country:</b> {origin}</p>
                    <p><b>Descriptions:</b> {descriptions}</p>
                    <p><b>Price:</b> <b  class='ourCoffeeProduct__price'>{ price}</b></p>
                    </section>
                    </div>
            </div>
        </>
    );
}

export default OurCoffeeProduct;