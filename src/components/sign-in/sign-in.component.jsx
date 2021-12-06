import React from "react";
import CustomButtom from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
    }
    handleSubmit=async event=>{
       event.preventDefault();
       const {email,password}=this.state;
       try {
         await  auth.signInWithEmailAndPassword(email,password)
           this.setState({email:"",password:""})
       } catch (error) {
           console.log(error.message);
       }
    }
    handleChange=event=>{
        const{name,value}=event.target;
        this.setState({[name]:value})
    }
    render(){
        // console.log(this.state.email);
        // console.log(this.state.password);
        return <div className="sign-in">
            <h2>I already have account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput 
                name="email"
                type="email"
                required
                value={this.state.email} 
                handleChange={this.handleChange}
                label="Email"
                />
                <FormInput
                 name="password"
                 type="password"
                 label='Password'
                 required
                 value={this.state.password}
                 handleChange={this.handleChange}/>
                 <div className="buttons">
                <CustomButtom type="submit">Sigin In</CustomButtom>
                <CustomButtom type="button" onClick={signInWithGoogle} isGoogleSignIn >Sigin In With Google</CustomButtom>
                 </div>
            </form>
        </div>
    }
}
export default SignIn