import React, { Component } from "react";
import "./Gallery.scss";
import Mountain from "./Images/mountain.jpg";
import Nature from "./Images/nature.jpg";
import King from "./Images/king.jpg";
import Chess from "./Images/chess.jpg";
import Rocket from "./Images/rocket.jpg";
import Beach from "./Images/beach.jpg";

class MainGallery extends Component {
  imageSwitch(title) {
    switch (title) {
      case "mountain":
        return <img src={Mountain} alt="" />;
      case "nature":
        return <img src={Nature} alt="" />;
      case "king":
        return <img src={King} alt="" />;
      case "chess":
        return <img src={Chess} alt="" />;
      case "rocket":
        return <img src={Rocket} alt="" />;
      case "beach":
        return <img src={Beach} alt="" />;
      default:
        return <img src="https://placeimg.com/1000/400/random" alt="" />;
    }
  }

  render() {
    const { content } = this.props;
    return (
      <div className="main-gallery">
        <h2>{content}</h2>
        {this.imageSwitch(content)}
      </div>
    );
  }
}

class OptionsGallery extends Component {
  imageSwitch(title, chaal) {
    switch (title) {
      case "mountain":
        return <img src={Mountain} onClick={() => chaal(title)} alt="" />;
      case "nature":
        return <img src={Nature} onClick={() => chaal(title)} alt="" />;
      case "king":
        return <img src={King} onClick={() => chaal(title)} alt="" />;
      case "chess":
        return <img src={Chess} onClick={() => chaal(title)} alt="" />;
      case "rocket":
        return <img src={Rocket} onClick={() => chaal(title)} alt="" />;
      case "beach":
        return <img src={Beach} onClick={() => chaal(title)} alt="" />;
      default:
        return <img src="https://placeimg.com/1000/400/random" alt="" />;
    }
  }

  render() {
    const { title, chaal } = this.props;
    return this.imageSwitch(title, chaal);
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
        <MainGallery content={gallerySelected} />
        <div className="options-gallery">
          <OptionsGallery title="mountain" chaal={this.changeTitle} />
          <OptionsGallery title="nature" chaal={this.changeTitle} />
          <OptionsGallery title="king" chaal={this.changeTitle} />
          <OptionsGallery title="chess" chaal={this.changeTitle} />
          <OptionsGallery title="rocket" chaal={this.changeTitle} />
          <OptionsGallery title="beach" chaal={this.changeTitle} />
        </div>
      </div>
    );
  }
}

export default Gallery;