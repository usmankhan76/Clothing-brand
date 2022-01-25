import React,{useState} from "react";
import { connect } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user-action";
import CustomButtom from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'

const SignIn=({emailSignIn,googleSignIn})=>{
    let [credentials, setUserCredentials] = useState( { 
        email:'',
        password:'',}
        );

        const {email,password}=credentials;
   const  handleSubmit= async event=>{
       event.preventDefault();
       emailSignIn(email,password);
    
    }
    const handleChange=event=>{
        const{name,value}=event.target;
        setUserCredentials({...credentials,[name]:value})
    }
    
        
        return <div className="sign-in">
            <h2>I already have account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                name="email"
                type="email"
                required
                value={email} 
                handleChange={handleChange}
                label="Email"
                />
                <FormInput
                 name="password"
                 type="password"
                 label='Password'
                 required
                 value={password}
                 handleChange={handleChange}/>
                 <div className="buttons">
                <CustomButtom type="submit">Sigin In</CustomButtom>
                <CustomButtom type="button" onClick={googleSignIn} isGoogleSignIn >Sigin In With Google</CustomButtom>
                 </div>
            </form>
        </div>
    }

const mapDispatchToProps=(dispatch)=>({
    googleSignIn:()=>dispatch(googleSignInStart()),
    emailSignIn:(email,password)=>dispatch(emailSignInStart({email,password})),
})
export default connect (null,mapDispatchToProps)(SignIn)