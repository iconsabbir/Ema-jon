import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';




const SignUp = () => {
    const {createUser, googleSignIn } = useContext(AuthContext)
   

    const handleSingup = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user); 
            alert('Your SignUp Successfull')
            form.react('')
        })
        .catch(error=> console.log(error));



    }

    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user); 
            alert(' SigIn With Google Successfull ')
            form.react('')
        })
        .catch(error=> console.log(error));

    }



    return (
        
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content my-10 flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Place SignUP</h1>
                       
                    </div>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">

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
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleLogin} className="btn btn-primary">SINGIN WITH GOOGLE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default SignUp;