import './Footer.scss'
import Navigation from '../Navigation/Navigation';
import Decor from '../Decor/Decor';
const Footer = (props) => { 
    return (
        <div className='Footer'>
            <div className="Footer__navigation">
                <Navigation
                    colorLogo='black'
                    colorText='black'
                    colorHref='black'
                    nav={props.nav}
                    change={props.change} />
            </div>
            <div className="Footer__decor">
                <Decor
                    colorDivider = 'black'
                    colorLogo='black'/>
            </div>
        </div>
    );
}

export default Footer;