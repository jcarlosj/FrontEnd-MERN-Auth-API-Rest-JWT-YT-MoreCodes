import React, { Component } from 'react';
import { register } from './user.component';

class Register extends Component {
    
    constructor() {
        super();

        this .state = {
            user_name: '',
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }

        // Establece conexion entre el componente y la vista
        this .onChange = this .onChange .bind( this );
        this .onSubmit = this .onSubmit .bind( this );
    }

    onChange( e ) {
        console .log( 'onChange', e );

        this .setState({
            [ e .target .name ]: e .target .value
        });
    }

    onSubmit( e ) {
        e .preventDefault();

        const user = {
            user_name: this .state .user_name,
            first_name: this .state .first_name,
            last_name: this .state .last_name,
            email: this .state .email,
            password : this .state .password
        };

        register( user ) 
            .then( res => {
                this .props .history .push( `/login` );
            });
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit} >
                            <h1 className="h3 mb-3 font-weight-normal">Por favor, Registrese!</h1>
                            <div className="form-group">
                                <label htmlFor="user_name">Nombre de usuario</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="user_name"
                                    placeholder="Ej: jcarlosj"
                                    value={this.state.user_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="first_name">Nombres</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Ej: Juan Carlos"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Apellidos</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Ej: Jiménez Gutiérrez"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
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
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Register;