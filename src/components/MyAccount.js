import React, { Component } from 'react';
import axios from 'axios';
import sample_user_image from '../img/sample-user-image.jpeg';

class MyAccount extends Component {

  render() {
    return (
          <div className="my-account-top-level top-level col-lg-4">
            <h4>My Account</h4>
            <div className="media">
            <img className="mr-3 account-img" src={sample_user_image} alt="Generic placeholder image" />
                <div className="media-body">
                    <h6 className="mt-0">About Me</h6>
                    <p>All about this user and what they like to do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Diam quis enim lobortis scelerisque fermentum dui faucibus. Porttitor eget dolor morbi non arcu risus. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sed tempus urna et pharetra. Pretium lectus quam id leo. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Quis lectus nulla at volutpat diam ut venenatis. Aliquet enim tortor at auctor urna nunc id cursus. Enim ut sem viverra aliquet eget sit amet tellus cras. Id aliquet lectus proin nibh nisl condimentum id venenatis. Tellus at urna condimentum mattis. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Leo duis ut diam quam.</p>
                    <h6>My Current Location</h6>
                    <p>Hong Kong, China</p>
                    <h6>Connect With Me</h6>
                    <p>My blog is www.myawesometravelblog.com</p>
                </div>
            </div>
            <br />
            <div className="my-contributions">
                <h5>My Contributions</h5>
                <ul className="list-group list-group-flush">
                    <a href="#"><li className="list-group-item contribution-list">Mexican Street Tacos</li></a>
                    <a href="#"><li className="list-group-item contribution-list">Bolivian Pizza</li></a>
                    <a href="#"><li className="list-group-item contribution-list">Hong Kong Spicy Tofu</li></a>
                    <a href="#"><li className="list-group-item contribution-list">Alaskan Salmon Dip</li></a>
                    <a href="#"><li className="list-group-item contribution-list">Curried Lentils</li></a>
                </ul>
            </div>
          </div>
    );
  }
}

export default MyAccount;
