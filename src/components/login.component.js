import React, { Component } from 'react';
import { login } from './user.component';

class Login extends Component {
    
    constructor() {
        super();

        this .state = {
            email: '',
            password: ''
        }

        // Establece conexion entre el componente y la vista
        this .onChange = this .onChange .bind( this );
        this .onSubmit = this .onSubmit .bind( this );
    }

    onChange( e ) {
        this .setState({
            [ e .target .name ] : e .target .value
        });
    }

    onSubmit( e ) {
        e .preventDefault();

        const user = {
            email: this .state .email,
            password : this .state .password
        }

        login( user ) 
            .then( res => {
                if( res ) {
                    this .props .history .push( `/profile` );
                }
            });
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit} >
                            <h1 className="h3 mb-3 font-weight-normal">Ingresar!</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="email"
                                    placeholder="Ej: jcarlosj@correo.co"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control"
                                    name="password"
                                    placeholder="Ingrese su contraseña"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn-btn-lg btn-primary btn-block">
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;