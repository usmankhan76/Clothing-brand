import React, { useState } from "react";
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-action";

const SignUp=({signUp})=>{
    let [userCredentials,setUserCredentials]=useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })

    let {displayName,email,password,confirmPassword}=userCredentials;

    const   handleSubmit=async event=>{ 
            event.preventDefault();
            if(password!==confirmPassword){
                alert("Passsword doesn't match")
                return;
            }
            signUp({displayName,email,password});
        }
            
            
    const    handleChange=event=>{
            const{value,name}=event.target
            setUserCredentials({...userCredentials,[name]:value})
        }
     
        return(
            <div className="sign-up">
                <div className="title">
                <h2 >I do not have account</h2>
                <span>Sign up with youre email and password </span>
                    </div>
                
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    onChange={handleChange}
                    required 
                    />
                       <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    onChange={handleChange}
                    required 
                    />
                       <FormInput 
                    type="Password"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={handleChange}
                    required 
                    />
                       <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    handleChange={handleChange}
                    required 
                    />
                    <div className="button">
                    <CustomButtom type='submit'>Sign Up</CustomButtom>
                        </div>


                </form>
            </div>
        )
    }

const mapDispatchToProps=dispatch=>({
    signUp:(userData)=>dispatch(signUpStart(userData))
})
export default connect(null,mapDispatchToProps)( SignUp)