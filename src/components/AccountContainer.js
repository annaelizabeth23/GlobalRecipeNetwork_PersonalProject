import React, { Component } from 'react';
import MyAccount from './MyAccount';
import axios from 'axios';
import {connect} from 'react-redux';
import { fetchUserData } from '../reducer'

class AccountContainer extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            message: null
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
                message: 'No account to view, please log in or register.',
                loading: false
            });
        })
    }

    
    render(){
        const {loading, message} = this.state;

        return (
            <div>
            {loading && <div>Loading...</div>}
            {/* //above is short circuiting in jsx because no ifs allowed in jsx */}
            {this.props.user && <MyAccount/>
            }
            {message && <div>{this.state.message}</div>}
            </div>
        )
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
const connectedAccountContainer = connector(AccountContainer);
export default connectedAccountContainer;