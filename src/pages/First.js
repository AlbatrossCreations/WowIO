import {React,Component} from 'react'
import Typing from 'react-typing-animation';
import ScratchCard from 'react-scratchcard'
import img from '../images/scratch-card.png'
import imgMob from '../images/scratch-card-mob.png'
import '../css/First.css'
import ScratchCardComponent from '../components/ScratchCardComponent';
import { SnakeGame } from 'react-game-snake';


import upImg from '../images/upBtn.png'
import downImg from '../images/downBtn.png'
import leftImg from '../images/leftBtn.png'
import rightImg from '../images/rightbtn.png'


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
      settingsMob = {
        
        image: imgMob,
        width:400,
        height:200,
        finishPercent: 50,
        onComplete: () => {
          console.log('The card is now clear!')
          
        }
      };
      settingsWeb = {
        
        image: img,
        width:962,
        height:495,
        finishPercent: 50,
        onComplete: () => {
          console.log('The card is now clear!')
        }
      };

   
    render(){
      const { width } = this.state;
      const isMobile = width <= 500;
      return(
        <h2>Landing page</h2>
      )
    }

}
export default First