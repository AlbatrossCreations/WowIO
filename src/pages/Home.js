import React, { Component } from 'react'

import ScratchCardComponent from '../components/ScratchCardComponent';
import SeenCardComponent from '../components/SeenCardComponent';
import firebase from '../utils/firebase';


import Create from './Create';
import "../css/Home.css"

import GameComponent from '../components/GameComponent';
import UnlockComponent from '../components/UnlockComponent';
import { Prompt } from 'react-router';
import FailedToViewComponent from './FailedToViewComponenent';
import DeletedComponent from './DeletedComponent';


class Home extends Component{
   
    constructor(props) {
        super(props);
        this.state = {
           // seen: true, //Set render state to false
           seen: false, 
           fromm:"",
           created:"",
           mail:"",
           msg:"",
           id : this.props.match.params.id,
           gameStarted:false,
           valid:true,
           showMsg:false,
           showFinalTimer:false,
           attempted:false,
           deleted:false,
          
        }
        this.checkIfRead = this.checkIfRead.bind(this);
        this.markRead = this.markRead.bind(this);
        this.startGame = this.startGame.bind(this);
        this.getData = this.getData.bind(this);
        this.makeMsgInvalid = this.makeMsgInvalid.bind(this);
        this.onWinGame = this.onWinGame.bind(this);
        this.deleteAndMakeInvalid = this.deleteAndMakeInvalid.bind(this);
      }

      getData(){
        const todoRef = firebase.database().ref('Messages/'+this.state.id);
        
        todoRef.once('value', (snapshot) => {
         if(snapshot.val()!=null){
          const seen = snapshot.val()["S"]
          const fromm  = snapshot.val()["F"]
          const mail = snapshot.val()["M"]
          const created = snapshot.val()["C"]
          const msg  = snapshot.val()["MSG"]
          console.log("seen",seen)
          console.log("fromm",fromm)
          console.log("mail",mail)
          console.log("created",created)
          console.log("msg",msg)
          console.log("mail",mail)
          console.log("ATTEMPT",snapshot.child("A").val())
          if(snapshot.child("A").val()!=null){
              this.setState({attempted:true})
              firebase.database().ref("Messages/"+this.state.id).remove()
              console.log("DELETED DUE TO TIME UP")
          }
          try{
            this.setState({seen:seen,fromm:fromm,mail:mail,created:created,msg})
          }catch(e){
            console.log("ERROR",e)
          }
          console.log("SNAPSHOT",snapshot.val())
         
          if(Date.now()>Number(created)){
            
             this.deleteAndMakeInvalid()
          }
           
         }else{
          this.makeMsgInvalid()
           console.log("The message has been deleted already")
         }
        });

        
      }
      
      deleteAndMakeInvalid(){
        firebase.database().ref("Messages/"+this.state.id).remove()
        console.log("DELETED DUE TO TIME UP")
        console.log("now "+Date.now()+"  craeted "+Number(this.state.created))
        this.setState({deleted:true,gameStarted:false})

      }

      componentDidMount() {
     //  this.checkIfRead()
       this.getData()
       document.body.style.backgroundColor = "#000000"
       
        // setTimeout(function() { //Start the timer
        //     this.setState({seen: true}) 
        //     this.markRead()
        // }.bind(this), 15000)
      }

     
      
       checkIfRead(){
        const todoRef = firebase.database().ref('Messages/'+this.state.id+'/S');
        todoRef.on('value', (snapshot) => {
          const seen = snapshot.val()
          console.log("SNAPSHOT",snapshot.val())
          this.setState({seen:seen})
        });
       }
       markRead = () => {
        const todoRef = firebase.database().ref('Messages/'+this.state.id)
        const todo = {
          seen: true,
        };
        this.setState({seen:true})
        todoRef.update(todo);
      };
      startGame(){
      
        var r = window.confirm("Once game starts you have 90 seconds to win,\nif you lose the message will be deleted forever, do you wish to play now?");
        if(r){
          console.log("ACCEPT TO PLAY")
          this.setState({gameStarted:true})
          
          const msgsRef = firebase.database().ref('Messages/'+this.state.id)
          const newMsg = {
            A:true 
          //   que:que,
          //   ans:ans
          };
          msgsRef.update(newMsg)
          console.log("ATTEMPTED","A")
          //SET ATTEMPT PROPERTY TO Date.now()
          
        }else{
          console.log("REJECTED TO PLAY")
        }
      }
      onWinGame(){
        console.log("YOU CAN VIEW THE SURPRISE NOW")
        this.setState({showMsg:true,gameStarted:false,created:false,showFinalTimer:true})
      }
      makeMsgInvalid(){
        this.setState({valid:false,deleted:true})
      }
      componentWillMount() {
        onbeforeunload = (e) =>"Dont do this"; 
      }
    
      componentWillUnmount() {
        onbeforeunload = null;
      }
    
    render(){
        return(
            <div>
              
               <Prompt when={this.state.gameStarted} delete={this.deleteAndMakeInvalid} message={"Cancel me"} />
                {this.state.attempted?(<Create isDeleted={this.state.deleted} id={this.state.id} makeInvalid={this.makeMsgInvalid} time={null} showFinalTimer={this.state.showFinalTimer} gameStarted={this.state.gameStarted}/>
                ):(<Create id={this.state.id} isDeleted={this.state.deleted} delete={this.deleteAndMakeInvalid} makeInvalid={this.makeMsgInvalid} time={this.state.created} showFinalTimer={this.state.showFinalTimer} gameStarted={this.state.gameStarted}/>
                )}
                <div className="container">
                <div className="box">
    
                {this.state.deleted?(<DeletedComponent/>):(this.state.attempted?(<FailedToViewComponent/>):(this.state.gameStarted?<GameComponent onWin={this.onWinGame}/>:(this.state.valid?(this.state.showMsg?<ScratchCardComponent message={this.state.msg}/>:<UnlockComponent start={this.startGame}/>):<SeenCardComponent/>)))}
                
    
                </div>

                </div>
               
            </div>
        )
    }


    
}
export default Home