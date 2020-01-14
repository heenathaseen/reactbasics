import React, { Component } from 'react';
import './Gallery.scss';
import Mountain from './Images/mountain.jpg';
import Nature from './Images/nature.jpg';
import King from './Images/king.jpg';
import Chess from './Images/chess.jpg';
import Rocket from './Images/rocket.jpg';
import Beach from './Images/beach.jpg';

class Maingallery extends Component{
    imageSwitch(title){
        switch(title){
            case "mountain":
            return <img src={Mountain} alt=""/>;
            case "nature":
            return <img src={Nature} alt=""/>;
            case "king":
            return <img src={King} alt=""/>;
            case "chess":
            return <img src={Chess} alt=""/>;
            case "rocket":
            return <img src={Rocket} alt=""/>;
            case "beach":
            return <img src={Beach} alt=""/>;
            default:
                return <img src='https://placeimg.com/1000/400/bird' alt=""/>;
        }
    }
    render(){
        const {content}=this.props;
        return  (
        <div className="main-gallery"> 
        <h1>{content}</h1>
        {this.imageSwitch(content)}
      </div>
    );
    }
}
class Optionsgallery extends Component{
    imageSwitch(title,temp){
        switch(title){
            case "mountain":
            return <img src={Mountain} onClick={()=>temp(title)} alt=""/>;
            case "nature":
            return <img src={Nature} onClick={()=>temp(title)} alt=""/>;
            case "king":
            return <img src={King} onClick={()=>temp(title)} alt=""/>;
            case "chess":
            return <img src={Chess} onClick={()=>temp(title)} alt=""/>;
            case "rocket":
            return <img src={Rocket} onClick={()=>temp(title)}alt=""/>;
            case "beach":
            return <img src={Beach} onClick={()=>temp(title)} alt=""/>;
            default:
                return <img src='https://placeimg.com/1000/400/bird' alt=""/>;
        }
    }

    render(){
        const { title,temp }=this.props;
        return (
            this.imageSwitch(title,temp)
            );
    }
}

class Gallerysec extends Component{
    state = {
        gallerychosen:'welcome'
    };
    changetitle= c => this.setState(() => ({gallerychosen:c }));
    render(){
        const {gallerychosen} = this.state;
        return(
            <div className="gallery">
                <Maingallery content={gallerychosen}/>
                <div className="options-gallery">
                <Optionsgallery title="mountain" temp={this.changetitle}/>
                <Optionsgallery title="nature" temp={this.changetitle}/>

                <Optionsgallery title="king" temp={this.changetitle}/>

                <Optionsgallery title="chess" temp={this.changetitle}/>

                <Optionsgallery title="rocket" temp={this.changetitle}/>

                <Optionsgallery title="beach" temp={this.changetitle}/>
                </div>
                


            </div>
        );
    }
}

export default Gallerysec;