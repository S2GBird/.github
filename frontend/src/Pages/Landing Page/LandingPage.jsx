import LandingStyle from './LandingPage.module.css';
import InfoSectionBird from '../../Images/landing-page-birds.jpg';
import BinocularsImg from '../../Images/landing-page-binoculars.jpg';
import BirdIcon from '../../Images/bird-icon.svg';
import EarthIcon from '../../Images/earth-icon.svg';
import MagnifierIcon from '../../Images/magnifier-icon.svg';
import MountainIcon from '../../Images/mountain-icon.svg';
import MusicIcon from '../../Images/music-icon.svg';
import TreeLine from '../../Images/treeline-img.svg';

function LandingPage(){
    return(
        <div className={LandingStyle['landing-page']}>
            <div className={LandingStyle['landing-hero']}>
                <div className={LandingStyle['landing-hero-content']}>
                    <h3>UNCOVER THE WONDERS OF THE GREAT OUTDOORS WITH</h3>
                    <h1>CHIRP</h1>
                    <p>
                        Experience the untamed beauty of the wilderness with this bird watching app and Discover the joy 
                        of reconnecting with nature by sharing your journey with a community of people just like you!
                    </p>
                    <button className={LandingStyle['landing-hero-button']}>Get Started Now!</button>
                </div>
            </div>

            <div className={LandingStyle['landing-info-section']}>
                <div className={LandingStyle['landing-info-section-content']}>
                    <h2>Discover The Joy Of Birding</h2>
                    <hr />
                    <p>
                        The Bird Watching Community is buzzing with excitement and we want you to be a part of it! The Chirp Platform
                        seeks to connect with you with other bird enthusiasts, post about your favorite sightings, and discover new adventures
                        as you share your journey on Chirp!
                    </p>
                    <button>Learn More</button>
                </div>
                <div className={LandingStyle['landing-info-section-img']}>
                    <img src={InfoSectionBird} className={LandingStyle['landing-info-img']} alt='Pictures of Birds huddled together'/>
                    <img src={BinocularsImg} className={LandingStyle['landing-info-binoculars']} alt='Binoculars'/>
                </div>
            </div>

            <div className={LandingStyle['landing-features-section']}>
                <h2>Explore The Features Chirp Offers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consecutetur adipscing elit, sed do elusmod tempor incidicunt ut labore et
                    Lorem ipsum dolor sit amet, consecutetur adipscing elit, sed do elusmod tempor incidicunt ut labore et
                    Lorem ipsum dolor sit amet, consecutetur adipscing elit, sed do elusmod tempor incidicunt ut labore et
                </p>
                <div className={LandingStyle['landing-features-section-icons']}>
                    <div>
                        <img src={MountainIcon} alt='Mountain Icon'/>
                        <p>EXPLORE</p>
                    </div>
                    <div>
                        <img src={MagnifierIcon} alt='Magnifier Icon'/>
                        <p>DISCOVER</p>
                    </div>
                    <div>
                        <img src={MusicIcon} alt='Music Icon'/>
                        <p>LISTEN</p>
                    </div>
                    <div>
                        <img src={EarthIcon} alt='Earth Icon'/>
                        <p>COLLABORATE</p>
                    </div>
                    <div>
                        <img src={BirdIcon} alt='Bird Icon'/>
                        <p>BIRDWATCH</p>
                    </div>
                </div>
            </div>
            {/* <img src={TreeLine} alt='tree line'/> */}
        </div>
    )
};

export default LandingPage;