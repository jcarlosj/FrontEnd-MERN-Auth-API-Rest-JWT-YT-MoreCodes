import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component {

    constructor () {
        super();

        this .state = {
            user_name: '',
            first_name: '',
            last_name: '',
            email: ''
        };
    }

    componentDidMount() {
        console .log( 'LocalStorage (Token)', localStorage .userToken );

        const token = localStorage .userToken,
              decoded = jwt_decode( token );

        console .log( 'decoded', decoded );      
              
        this .setState({
            user_name   : decoded .userName,
            first_name  : decoded .firstName,
            last_name   : decoded .lastName,
            email       : decoded .email
        });
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Perfil</h1>
                        <table className="table col-md-6 mx-auto">
                            <tbody>
                                <tr>
                                    <td>Nombre usuario</td>
                                    <td>{this.state.user_name}</td>
                                </tr>
                                <tr>
                                    <td>Nombres</td>
                                    <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Apellidos</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Correo</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;