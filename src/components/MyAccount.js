import React, { Component } from 'react';
import axios from 'axios';
import sample_user_image from '../img/sample-user-image.jpeg';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer';

class MyAccount extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       user: {}
    //     };
    //   }
// componentDidMount() {
//     //
//     axios.get('/api/user-data').then(response => {
//         console.log(response.data);
//         this.setState({
//         user: response.data.user
//         });
//     });
//     }
  render() {
    // const {user} = this.state;
    const {name, picture, email} = this.props.user;
    return (
          <div className="my-account-top-level top-level container">
            <img className="account-img" src={picture} alt="User's Image" />
            <div className="my-contributions">
                <h5>{name}'s Contribution's</h5>
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

const mapStateToProps = store => {
    return {
        user: store.user
    };
};

const mapDispatchToProps = {
    fetchUserData: fetchUserData
    //the fetchUserData is the action creator and we are setting it to the key
    //we are sending this to connect. redux wraps all of our action creators with a dispatch which will run the function on the reducer
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedMyAccount = connector(MyAccount);
export default connectedMyAccount;
