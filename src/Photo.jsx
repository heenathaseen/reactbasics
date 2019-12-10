import React from 'react';

class Photo extends React.Component {
    state = { 
        photoDisplay: false
    };
    showPhoto = () => this.setState(({ photoDisplay })=>({photoDisplay: !photoDisplay }));
  render() {
    const { photoDisplay } = this.state;
    return (
      <div>
        <button type="button" onClick={this.showPhoto}>
   {photoDisplay ? "Hide Photo":"Show Photo"}
</button>   
{photoDisplay && ( <img src="https://placeimg.com/1200/500/girl" alt="" /> )}
   </div>

    );
  }
}
export default Photo;
