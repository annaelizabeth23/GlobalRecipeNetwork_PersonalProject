import React, { Component } from 'react';
import AddARecipe from './AddARecipe';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchUserData} from '../reducer';

class AddARecipeContainer extends Component {
    constructor() {
        super();
        this.state = {
            notLoggedIn: true,
            message: null
        }
    }


    componentDidMount () {
        this.setState({notLoggedIn: true});
        axios.get('/api/user-data').then(response => {
            this.setState({
                notLoggedIn: false
            })
            this.props.fetchUserData(response.data.user);
        }).catch(error => {
            this.setState({
                message: 'Log in to add a recipe.',
                notLoggedIn: true
            });
        })
    }

    
    render(){
        const {notLoggedIn, message} = this.state;

        return (
            <div>
            {notLoggedIn && <div>Log in to add a recipe.</div>}
            {/* //above is short circuiting in jsx because no ifs allowed in jsx */}
            {this.props.user && <AddARecipe/>}
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
const connectedAddARecipeContainer = connector(AddARecipeContainer);
export default connectedAddARecipeContainer;