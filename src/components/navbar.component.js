import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {

    logOut( e ) {
        e .preventDefault();
        localStorage .removeItem( 'userToken' );
        this. props .history .push( `/` )
    }

    render() {

        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Ingresar
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Registrarse
                    </Link>
                </li>
            </ul>
        ); 
        
        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Perfil
                    </Link>
                </li>
                <li className="nav-item">
                    <p onClick={ this .logOut .bind( this ) } className="nav-link">
                        Salir
                    </p>
                </li>
            </ul>
        );

        return (
            <nav className="nev navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbar1" className="collapse navbar-collapse justify-content-md-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    { localStorage .userToken ? userLink : loginRegLink }
                </div>
            </nav>
        )
    }
}

export default withRouter( Navbar );