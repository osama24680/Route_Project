import axios from 'axios';
import Joi from 'joi';
import React from 'react'
import { useState } from 'react';

export default function Register() {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password: ''
    });

    function getUser(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        /* console.log(user) */
    }

    async function submitRegister(e) {
        e.preventDefault()
        /* setIsLoading(true);
        let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);


        if (data.message === 'success') {
            // Registered Successfully
            // Navigate To Login
            setIsLoading(false);
        } else {
            setError(data.message)
            setIsLoading(false);
        } */
        let validationResult = validateRegisterForm(user)
        
    }

    function validateRegisterForm(user){
        let scheme = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(15).required(),
            last_name: Joi.string().alphanum().min(3).max(15).required(),
            age: Joi.number().min(16).max(80),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        });
        return scheme.validate(user, {abortEarly: false});
    }


    return (<>
        <div>
            <h2 className='my-3'>Register Now</h2>
            {error ? <div className='alert alert-danger text-black'>{error}</div> : ''}

            <form className='py-4' onSubmit={submitRegister}>
                <label htmlFor='first_name'>First Name : </label>
                <input onChange={getUser} type='text' className='form-control my-3' name='first_name' id='first_name'></input>
                <label htmlFor='last_name'>Last Name : </label>
                <input onChange={getUser} type='text' className='form-control my-3' name='last_name' id='last_name'></input>
                <label htmlFor='age'>Age : </label>
                <input onChange={getUser} type='number' className='form-control my-3' name='age' id='age'></input>
                <label htmlFor='email'>Email : </label>
                <input onChange={getUser} type='text' className='form-control my-3' name='email' id='email'></input>
                <label htmlFor='password'>Password : </label>
                <input onChange={getUser} type='password' className='form-control my-3' name='password' id='password'></input>
                <button type='submit' className='btn btn-outline-info'>
                    {isLoading ? <i className='fas fa-spinner fa-spin'></i> : 'Register'}
                </button>
            </form>
        </div>
    </>
    )
}
