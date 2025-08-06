import Decor from '../../components/Decor/Decor';

import './About.scss';

const About = ({ sectionTitle, text, photo}) => { 
    return (
        <>
            <div className='aboutOurGoods'>
                <div className='aboutOurGoods__con'>
                    <img src={photo}
                        alt="#"
                        className='aboutOurGoods__img'/>
                </div>
                <div className='aboutOurGoods__text'>
                    <h2>{sectionTitle}</h2>
                    <Decor
                        colorDivider='black' 
                        colorLogo='black'/>
                    <p>{text}</p>
                </div>
            </div>
            <div className='divider'></div>
        </>
    );
}

export default About;