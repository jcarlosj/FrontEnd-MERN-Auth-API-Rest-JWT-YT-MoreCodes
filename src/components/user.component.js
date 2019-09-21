import axios from 'axios';

export const register = newUser => {

    return axios .post( 'http://localhost:8083/api/users/register', {
        user_name   : newUser .user_name,
        first_name  : newUser .first_name,
        last_name   : newUser .last_name,
        email       : newUser .email,
        password    : newUser .password
    })
    .then( res => {
        console .log( 'Registrado' );
    });

}

export const login = user => {

    return axios .post( 'http://localhost:8083/api/users/login', {
        email: user .email,
        password: user .password
    })
    .then( res => {
        console.log( res );
        localStorage .setItem( 'userToken', res .data );
        
        return res .data;
    })
    .catch( err => {
        console .log( err );
    });

}