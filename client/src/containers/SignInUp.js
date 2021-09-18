import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const SignInUp = () => {
    return (
        <>
            <Header />
            <div className='container-fluid'>
                <div className="card mx-auto mt-5" style={{ width: "20%" }}>
                    <div className="card-body">
                        <p className="card-text">For placing an order please Sigin with your account or if you haven't signed in before please signup</p>
                        <Link to='/signin' style={{ color: 'white', textDecoration: 'none' }}><a href="#" className="card-link btn btn-primary">SignIn</a></Link>
                        <Link to='/signup' style={{ color: 'white', textDecoration: 'none' }}><a href="#" className="card-link btn btn-primary ms-2">SignUp</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInUp;