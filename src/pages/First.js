import {React,Component} from 'react'
import Typing from 'react-typing-animation';
import ScratchCard from 'react-scratchcard'
import img from '../images/scratch-card.png'
import imgMob from '../images/scratch-card-mob.png'
import heroImg from '../images/hero-img.svg'
import '../css/First.css'
import ScratchCardComponent from '../components/ScratchCardComponent';
import { SnakeGame } from 'react-game-snake';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch,faHandSparkles,faTheaterMasks,faKissWinkHeart,faGrinTongueWink,faGamepad } from '@fortawesome/free-solid-svg-icons'



class First extends Component{

    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };

    
      }
    
      componentDidMount(){
       document.body.style.backgroundColor = "#000000"

      }

      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
     

   
    render(){
      const { width } = this.state;
      const isMobile = width <= 500;
      return(
      <>
        

 
  <section id="hero" style={isMobile?{}:{marginTop:"200px"}} class="d-flex align-items-center">

    <div class="container">
      <div style={{backgroundColor:"black"}} class="row">
        <div id="c1" class=" col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1 style={{color:"white"}}>Wanna say something special to someone really special. Than why do it in a normal way? Do it in the <i>wowio</i> way</h1>
          <h2>Wowio adds some secrecy, interest, and curiosity to your message.</h2>
          <a style={{textDecoration:"none"}} href="#create" class="btn-get-started scrollto">Create one for me</a>
        </div>
        <div id="c2" class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src={heroImg} class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>

  <main id="main">

  <section id="services" class="services section-bg">
      <div class="container">

        <div style={isMobile?{}:{marginTop:"40px"}} class="section-title" data-aos="fade-up">
          
          <p style={{color:"white"}}>How's wowio different?</p>
        </div>

        <div style={{backgroundColor:"black"}} class="row">
          <div class="col-md-6 col-lg-3" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon">
             
              <FontAwesomeIcon style={{color:"orange"}} size='3x' icon={faTheaterMasks} /></div>
              <h4 style={{color:"black"}} class="title">Eagerness</h4>
              <p class="description">The message turns invalid after 30 minutes from creation</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon">        
                   <FontAwesomeIcon style={{color:"orange"}} size='3x' icon={faGamepad} />
              </div>
              <h4 style={{color:"black"}} class="title">Curiousity</h4>
              <p class="description">Reciever needs to win a simple game to unlock tme message</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon">
              <FontAwesomeIcon style={{color:"orange"}} size='3x' icon={faHandSparkles} />
              </div>
              <h4 style={{color:"black"}} class="title">Magic</h4>
              <p class="description">The message gets deleted in 30 seconds after unlock</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon">
              <FontAwesomeIcon style={{color:"orange"}} size='3x' icon={faGrinTongueWink} />

              </div>
              <h4 style={{color:"black"}} class="title">Uniquesness</h4>
              <p class="description">The message can be tried to unlock only once and can be seen only then. Failing to unlock will delete the message forever</p>
            </div>
          </div>

        </div>

      </div>
    </section>    
  
    {/* <section id="about" class="about">
      <div class="container">

        <div class="row justify-content-between">
          <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
            <img src={img} class="img-fluid" alt="" data-aos="zoom-in"/>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0">
            <h3 data-aos="fade-up">Voluptatem dignissimos provident quasi</h3>
            <p data-aos="fade-up" data-aos-delay="100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <div class="row">
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                <i class="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <i class="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}

    

    

  </main>

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
            <h4>Our Social Networks</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
              <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    
  </footer>
      </>
      )
    }

}
export default First