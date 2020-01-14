import React, { Component } from 'react';
import './Gallery.scss';
import Mountain from './Images/mountain.jpg';
import Nature from './Images/nature.jpg';
import King from './Images/king.jpg';
import Chess from './Images/chess.jpg';
import Rocket from './Images/rocket.jpg';
import Beach from './Images/beach.jpg';

class Maingallery extends Component {
  imageSwitch(title) {
    switch (title) {
      case 'king':
        return <img src={King} alt="" />;
      case 'nature':
        return <img src={Nature} alt="" />;

      case 'chess':
        return <img src={Chess} alt="" />;

      case 'beach':
        return <img src={Beach} alt="" />;
      case 'mountain':
        return <img src={Mountain} alt="" />;
      case 'rocket':
        return <img src={Rocket} alt="" />;
      default:
        return <img src="https://placeimg.com/1000/400/bird" alt="" />;
    }
  }

  render() {
    const { content } = this.props;
    return (
      <div className="name"> 
        <h1>{content}</h1>
        {this.imageSwitch(content)}
      </div>
    );
  }
}
class Optiongallery extends Component {
  imageSwitch(title,temp) {
    switch (title,temp) {
      case 'king':
        return <img src={King} onClick={() => temp(title)} alt="" />;
      case 'nature':
        return <img src={Nature} onClick={() => temp(title)} alt="" />;

      case 'chess':
        return <img src={Chess} onClick={() => temp(title)} alt="" />;

      case 'beach':
        return <img src={Beach} onClick={() => temp(title)} alt="" />;
      case 'mountain':
        return <img src={Mountain} onClick={() => temp(title)} alt="" />;
      case 'rocket':
        return <img src={Rocket} onClick={() => temp(title)} alt="" />;
      default:
        return <img src="https://placeimg.com/1000/400/dog" alt="" />;
    }
  }

  render() {
    const { title,temp} = this.props;
    return (

      this.imageSwitch(title,temp)

    );
  }
}
class Gallery extends Component {
  state = {
    gallerySelected: "Hey"
  };

  changeTitle = d => this.setState(() => ({ gallerySelected: d }));

  render() {
    const { gallerySelected } = this.state;
    return (
      <div className="gallery">
        <Maingallery content={gallerySelected} />
        <div className="options-gallery">
          <Optiongallery title="mountain" temp={this.changeTitle}/>
          <Optiongallery title="nature" temp={this.changeTitle} />
          <Optiongallery title="king" temp={this.changeTitle} />
          <Optiongallery title="chess" temp={this.changeTitle} />
          <Optiongallery title="rocket" temp={this.changeTitle} />
          <Optiongallery title="beach" temp={this.changeTitle} />
        </div>
      </div>
    );
  }
}


export default Gallery;
