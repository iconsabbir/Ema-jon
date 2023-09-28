import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const handleSingup = (e) =>{
        e.preventDefault()
        console.log('handleSingup clicke');



    }
    return (
        
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Place SignUP</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSingup}  className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already Have An Account ? plase login</Link>
                                </label>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary" value="Sing Up"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default SignUp;