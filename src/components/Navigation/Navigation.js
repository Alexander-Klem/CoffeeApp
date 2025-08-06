import './Navigation.scss';
import blackLogo from './img/blackLogo.svg';
import whiteLogo from './img/whiteLogo.svg'


const Navigation = ({ colorLogo, colorText, change, nav, colorHref }) => { 

        const imgSrc = colorLogo === 'black' ? blackLogo : whiteLogo;
        const styleText = colorText === 'black' ? 'Navigation__blackColorText' : 'Navigation__whiteColorText';
        const styleHref = colorHref  === 'black' ? 'blackColorText' : 'whiteColorText';

        let navMenuLinks = nav && nav.map((element) => { 
        const { name, path, id } = element;
        return (
        <li className={styleText} key={id}>
        <a href={path}
        onClick={(e) => { 
                change(id, e);
        }}
        className={styleHref}>{name}</a>        
        </li>
        );
        });
                           
        return (
        <div className='Navigation'>
            <ul>
                <img src={imgSrc} 
                alt="logo"/>
                {navMenuLinks}
            </ul>
        </div>
        );
    
}

export default Navigation;