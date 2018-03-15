import React, { Component } from 'react';
import axios from 'axios';
import sample_user_image from '../img/sample-user-image.jpeg';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer';

class MyAccount extends Component {
    constructor() {
        super();
        this.state = {
            myRecipes: []
          }
          //bind here
    }

componentDidMount(){
    let idObj = {auth0_sub: this.props.user.id};
    console.log('testing user id', this.props.user.id);
    axios.post('/api/myAccountRecipes', idObj).then(response => {
        console.log('triggered', response.data);
        this.setState({myRecipes: response.data});
    });
    console.log(this.props);
    }

  render() {

    let displayRecipes = this.state.myRecipes.map((item, i) => {
        return (
        <div key = {i}><li>{item.title}</li></div>
    )
    })

    // const {user} = this.state;
    const {name, picture} = this.props.user;
    return (
          <div className="my-account-top-level top-level container">
            <img className="account-img" src={picture} alt="User's Image" />
            <div className="my-contributions">
                <h5>{name}'s Contribution's</h5>
                <ul className="list-group list-group-flush">
                    {displayRecipes}
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
