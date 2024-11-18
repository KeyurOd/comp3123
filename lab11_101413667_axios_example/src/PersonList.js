import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'; // Add a custom CSS file for styling
import { alignPropType } from 'react-bootstrap/esm/types';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            
    }

    render() {
        return (
            <div className="list">
                <h1 className="text-center text-white bg-success">User List</h1>
                {this.state.persons.map((person, index) => (
                    <div key={index} className="card my-3 p-3 bg-info text-white">
                        <div className="row align-items-center">
                        <div className="heading">
                                    <h3>
                                        {person.name.title} {person.name.first} {person.name.last}
                                    </h3>
                                </div>  
                            <div className="col-md-3 text-center">
                                <img
                                    src={person.picture.large}
                                    alt={`${person.name.first} ${person.name.last}`}
                                    className="rounded-circle img-fluid"
                                    style={{ width: '150px', height: '150px' }}
                                />
                                <div className='button'>
                                    <button className="btn btn-primary mt-3">Details</button>
                                </div>    
                            </div>
                            <div className="col" >
                                  
                                <p><strong>User Name:</strong> {person.login.username}</p>
                                <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                                <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</p>
                                <p><strong>Email:</strong> {person.email}</p>
                                <p><strong>Birth Date and Age:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age} years)</p>
                                <p><strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</p>
                                <p><strong>Phone:</strong> {person.phone}</p>
                                <p><strong>Cell:</strong> {person.cell}</p>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
