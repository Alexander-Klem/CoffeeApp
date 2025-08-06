import './CardPageHeader.scss';

const CardPageHeader = ({pageTitle}) => { 
    return (
        <div className = "CardPage">
            <h1>{pageTitle}</h1>
        </div>
    );
}

export default CardPageHeader;