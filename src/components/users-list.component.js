import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {myConfig} from '../config.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Pagination } from 'react-bootstrap';

const User = props => (
    <tr>
        <td>{`${props.user.firstName} ${props.user.lastName} `}</td>
        <td>
            <Link to={"/friend/"+props.user.id}> <FontAwesomeIcon icon="users" title="Friends"/>
            </Link> &nbsp;
            <Link to={"/mutual-friend/"+props.user.id}> <FontAwesomeIcon icon="user-plus" title="Mutual Friends"/>
            </Link>
        </td>
    </tr>
)

export default class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], total: null, limit:null, current_page:null, active:1};
    }

    componentDidMount() {
        this.getUsers(1);
    }

    getUsers (page_no){
        this.state.active = page_no;
        axios.get(`${myConfig.API_URL}users/${page_no}`)
        .then(response => {
            this.setState({
                users: response.data.rows,
                total: response.data.count,
                limit: response.data.limit,
                current_page: response.data.page
            });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    usersList() {
        return this.state.users.map(function(currentUser, i) {
            return <User user={currentUser} key={i} />;
        });
    }

    render() {
        
        let items = [];
        for (let number = 1; number <= Math.ceil(this.state.total / this.state.limit); number++) {
          items.push(
            <Pagination.Item key={number} active={number === this.state.active} onClick={() => this.getUsers(number)}>
              {number}
            </Pagination.Item>,
          );
        }
        const paginationBasic = (
            <div>
              <Pagination>{items}</Pagination>
              <br />
            </div>
          );
        return (
            <div>
                <h3>Users List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.usersList() }
                    </tbody>
                </table>
                <div>
          
          {paginationBasic}
          
        </div>
            </div>
        )
    }
}