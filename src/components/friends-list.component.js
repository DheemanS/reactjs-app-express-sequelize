import React, {Component} from 'react';
import axios from 'axios';
import {myConfig} from '../config.js';
const User = props => (
    <tr>
        <td>{`${props.user.firstName} ${props.user.lastName} `}</td>
        
    </tr>
)
export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: []};
    }
    componentDidMount() {
        axios.get(`${myConfig.API_URL}users/${this.props.match.params.id}/friends`)
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    usersList() {
        return this.state.users.map(function(currentUser, i) {
            return <User user={currentUser} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Friends List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
            </div>
        )
    }

}