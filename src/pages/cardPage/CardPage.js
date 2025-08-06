import About from '../../components/About/About';
import Cards from '../../components/Cards/Cards';
import Search from '../../components/Search/Search';
import SearchButtons from '../../components/SearchButtons/SearchButtons';
import CardPageHeader from '../../components/CardPageHeader/CardPageHeader';
import photo from './img/photo.png';


import './CardPage.scss';

const CardPage = ({ data, cards, onUpdateSearch, onFilterSelect, changePage, setCurrentItem }) => { 
    const { pageTitle, sectionTitle, text } = data;
    return (
        <>
            <CardPageHeader
                pageTitle={pageTitle}/>
            <About
                photo={photo}
                sectionTitle={sectionTitle}
                text={text[0].p} />
                <div className='filter'>
                <span className="filter__label">Looking For</span>
                <Search
                    onUpdateSearch={onUpdateSearch}/>
                <span>Or filter</span>
                <SearchButtons
                    onFilterSelect={onFilterSelect}/>
            </div>
            <div className='cards'>
            <Cards
                    cards={cards}
                    changePage={changePage}
                    setCurrentItem={setCurrentItem} />
            </div>
        </>
    );
}

export default CardPage;