import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <section className="registration-container">
            <h2 className="registration-title">Registration</h2>
            <form className="registration-form">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type='text' id="firstName" className="firstname" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type='text' id="email" className="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type='text' id="password" className="password" />
                </div>
                <div className="btn-wrapper">
                    <button type="reset" className="btn btn-cancel">Cancel</button>
                    <button type="submit" className="btn btn-submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Registration;
