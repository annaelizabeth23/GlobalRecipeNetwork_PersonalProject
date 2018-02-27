import React, { Component } from 'react';
import axios from 'axios';
import chocolate_bread_img from '../img/chocolate-bread.jpeg';

class HomeContent extends Component {

  render() {
    return (
            <div className="media container">
                <img className="align-self-start mr-3 media-obj-img" src={chocolate_bread_img} alt="Generic placeholder image" />
                <div className="media-body">
                    <h5 className="mt-0 media-obj-header">An Example Recipe</h5>
                    <p className="media-obj-text">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
            </div>
    );
  }
}

export default HomeContent;
