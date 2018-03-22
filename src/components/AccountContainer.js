import React, { Component } from 'react';
import MyAccount from './MyAccount';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer'

class AccountContainer extends Component {
    constructor() {
        super();
        this.state = {
            loading: false
        }
    }

    componentDidMount () {
        this.setState({loading: true});
        axios.get('/api/user-data').then(response => {
            this.setState({
                loading: false
            })
            this.props.fetchUserData(response.data.user);
            //login is from our reducer and map dispatch to props
        }).catch(error => {
            this.setState({
                loading: false
            });
        })
        
    }
    
    render(){
        const {loading} = this.state;

        return (
            <div>
            {loading && <div>Loading...</div>}
            {this.props.user ? <MyAccount/> : <h5>Please log in to view your account</h5>}
            </div>
        )
    }
}

//Connecting this component to Redux to access globalstate:
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
const connectedAccountContainer = connector(AccountContainer);
export default connectedAccountContainer;