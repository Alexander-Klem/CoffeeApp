import './Decor.scss';
import BlackLogo from './img/BlackLogo.svg';
import WhiteLogo from './img/WhiteLogo.svg';

const Decor = (props) => { 

    const { colorDivider, colorLogo } = props;

const styleLogo = colorLogo === 'black' ? BlackLogo : WhiteLogo;
const styleDivider = colorDivider === 'black' ? 'Divider__blackLine' : 'Divider__whiteLine';


    return (
        <div className='Divider'>
            <div className={styleDivider}></div>
            <img src={styleLogo} alt="logo" />
            <div className={styleDivider}></div>
        </div>
    );
}

export default Decor;