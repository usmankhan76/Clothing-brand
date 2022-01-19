import React from "react";
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from "../custom-button/custom-button.component";
import { auth,createUserProfileDocument } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user-action";
class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }}
        handleSubmit=async event=>{ 
            event.preventDefault();
        const{displayName,email,password,confirmPassword}=this.state;
        const {signUp}=this.props;
            if(password!==confirmPassword){
                alert("Passsword doesn't match")
                return;
            }
            signUp({displayName,email,password});
            
            
        }
        handleChange=event=>{
            const{value,name}=event.target
            this.setState({[name]:value})
        }
    

    render(){
        const{displayName,email,password,confirmPassword}=this.state;
        // console.log("this is the state:",this.state);
        // console.log("this is the displayName:",displayName);
        return(
            <div className="sign-up">
                <h2 className="title">I do not have account</h2>
                <span>Sign up with youre email and password </span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    onChange={this.handleChange}
                    required 
                    />
                       <FormInput 
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    onChange={this.handleChange}
                    required 
                    />
                       <FormInput 
                    type="Password"
                    name="password"
                    value={password}
                    label="Password"
                    onChange={this.handleChange}
                    required 
                    />
                       <FormInput 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm Password"
                    handleChange={this.handleChange}
                    required 
                    />
                    <CustomButtom type='submit'>Sign Up</CustomButtom>


                </form>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    signUp:(userData)=>dispatch(signUpStart(userData))
})
export default connect(null,mapDispatchToProps)( SignUp)