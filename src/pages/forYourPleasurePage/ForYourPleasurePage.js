
import About from '../../components/About/About';
import Cards from '../../components/Cards/Cards';
import photo from './img/CupOfCooffee.jpg';

import './ForYourPleasurePage.scss';

const ForYourPleasurePage = ({data, cards, changePage, setCurrentItem}) => {
    const { pageTitle, sectionAbout } = data;
    const {sectionTitle, text } = sectionAbout;
    return (
        <>
            <div className='ForYourPleasurePage'>
                <h1>{pageTitle}</h1>
            </div>
            <About
                sectionTitle={sectionTitle}
                text={text}
                photo={photo} />
            <div className='cards'>
                <Cards
                cards={cards}
                changePage={changePage}
                setCurrentItem={setCurrentItem} />
            </div>
        </>
    );
}

export default ForYourPleasurePage;