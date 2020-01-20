import React from 'react';
import './Instagram.scss';
import ananya from './Images/ananya.png';
import profile from './Images/profile.jpg';


class Instagram extends React.Component {
    state = {
        like:0,
         heart:false

    }
    increment = ()=>this.setState(({like})=>({like: like + 1}));
    show = () => this.setState(({ heart })=>({heart: !heart}));
    
  render() {
    const {like,heart} = this.state;
    return (
       
      <div className="instagram">
        <div className="name">
          <div>

            <img src={profile} alt="" />
          </div>
          <div><h4>Ananya Pande</h4></div>
          <div><i className="fa fa-bars" aria-hidden="true" /></div>


        </div>
        <div className="image">
          <img src={ananya} alt="" />
        </div>
        <div className="icons">
          <div>
    <button type="button"  onClick={()=>{this.increment();this.show();}}> {heart ? <i className="fa fa-heart" aria-hidden="true" />:<i class="fa fa-heart-o" aria-hidden="true"></i>} <p>{like}likes</p></button>
           
            <button type="button"> <i className="fa fa-comment-o" aria-hidden="true" /></button>
            <button type="button"> <i className="fa fa-share" aria-hidden="true" /></button>
           
           

          </div>
          <div>
          <button type="button"> <i className="fa fa-bookmark-o" aria-hidden="true" /></button>
           
          </div>
          <h4>
Ananya pande
            {' '}
            <span>be a reason for smile....</span>
            {' '}
          </h4>

        </div>


      </div>

    );
  }
}

export default Instagram;
