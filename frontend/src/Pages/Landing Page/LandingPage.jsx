// IMPORTS ---------------------------------------------------------------------------------------------------------------------------
import LandingStyle from './LandingPage.module.css'
import InfoSectionBird from '../../Images/LandingPage/landing-page-birds.jpg'
import BinocularsImg from '../../Images/LandingPage/landing-page-binoculars.jpg'
import ActionSectionBird from '../../Images/LandingPage/landing-page-birds3.jpg'
import BirdWatcher from '../../Images/LandingPage/bird-watching.jpg'
import BirdIcon from '../../Images/LandingPage/bird-icon.svg'
import EarthIcon from '../../Images/LandingPage/earth-icon.svg'
import MagnifierIcon from '../../Images/LandingPage/magnifier-icon.svg'
import MountainIcon from '../../Images/LandingPage/mountain-icon.svg'
import MusicIcon from '../../Images/LandingPage/music-icon.svg'
import TreeLine from '../../Images/LandingPage/treeline-img.svg'

// MAIN LANDING PAGE FUNCTION ---------------------------------------------------------------------------------------------------------------------------
function LandingPage () {
  return (
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
          <img src={InfoSectionBird} className={LandingStyle['landing-info-img']} alt='Pictures of Birds huddled together' />
          <img src={BinocularsImg} className={LandingStyle['landing-info-binoculars']} alt='Binoculars' />
        </div>
      </div>

      <div className={LandingStyle['landing-features-section']}>
        <h2>Explore The Features Chirp Offers</h2>
        <p>
          Explore the wonders of bird watching! Collaborate with fellow explorers! Embark on new adventures and
          share your stories with other bird enthusiasts, grab your binoculars and use Chirp to identify all of
          your feathered friends by taking a picture or posting the sounds, and snap your best pictures to document
          all your blissful adventures in your own bird watching journal!
        </p>
        <div className={LandingStyle['landing-features-section-icons']}>
          <div>
            <img src={MountainIcon} alt='Mountain Icon' />
            <p>EXPLORE</p>
          </div>
          <div>
            <img src={MagnifierIcon} alt='Magnifier Icon' />
            <p>DISCOVER</p>
          </div>
          <div>
            <img src={MusicIcon} alt='Music Icon' />
            <p>LISTEN</p>
          </div>
          <div>
            <img src={EarthIcon} alt='Earth Icon' />
            <p>COLLABORATE</p>
          </div>
          <div>
            <img src={BirdIcon} alt='Bird Icon' />
            <p>BIRDWATCH</p>
          </div>
        </div>
      </div>

      <div className={LandingStyle['landing-action-section']}>
        <img src={TreeLine} alt='tree line' className={LandingStyle['landing-action-tree-line']} />
        <div className={LandingStyle['landing-info-section-action']}>
          <div className={LandingStyle['landing-action-images']}>
            <img src={ActionSectionBird} alt='Bird Sitting On Branch' className={LandingStyle['landing-action-img']} />
            <img src={BirdWatcher} alt='Bird Watcher' className={LandingStyle['bird-watcher-img']} />
          </div>
          <div className={LandingStyle['landing-info-section-content']}>
            <h2>Embark On A Journey Of Discovery</h2>
            <hr />
            <p>
              From city parks to mountain trails, there's a whole new world of avian adventures waiting for you and we
              want you to be part of that excitement! The Chirp platform seeks to help you document all your favorite
              bird sightings and share your discoveries on the platform whether that be apost, a picture, or a journal
              of all your birds!
            </p>
            <button>Discover More</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default LandingPage
