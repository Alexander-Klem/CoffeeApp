import Decor from '../../components/Decor/Decor';
import Cards from '../../components/Cards/Cards';

import './PromoPage.scss';

const PromoPage = ({promoPage, cards, changePage, setCurrentItem}) => { 
    const { pageTitle, pageSubtitle, aboutUs } = promoPage;

    const bestGoods = cards.filter(item => {
        if (item.best === true) {
          return item
        }
        return null
      })

    return (
        <>
        <div className='promoPage'>
            <div className='promoPage__title'>        
                <h1>{pageTitle}</h1>
                <Decor
                    colorDivider = 'white'
                    colorLogo='white' />
                </div>
                <h3 className='promoPage__subtitle'>{pageSubtitle[0].name}</h3>
                <h3 className='promoPage__subtitle'>{pageSubtitle[1].name}</h3>
                <button
                    className='promoPage__button'
                    onClick={() => changePage(4)}>More</button>
        </div>
            <div className='aboutUs'>
                <h1 className='aboutUs__title'>{aboutUs.pageTitle}</h1>
                <Decor
                    colorDivider = 'black'
                    colorLogo='black' />   
                <p className='aboutUs__text'>{aboutUs.text[0].p}</p>
                <p className='aboutUs__text'>{aboutUs.text[1].p}</p>
            </div>  
                <div className='ourBest'>
                <h1 style={{ fontWeight: '200' }}>Our best</h1>
                    <div className='ourBest__cards'>
                    <Cards
                        cards={bestGoods}
                        changePage={changePage}
                        setCurrentItem={setCurrentItem} />
                    </div>
                </div>    
        </>
    );
}

export default PromoPage;