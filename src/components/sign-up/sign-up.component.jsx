import React from "react";
import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButtom from "../custom-button/custom-button.component";
import { auth,createUserProfileDocument } from "../firebase/firebase.utils";
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

            if(password!==confirmPassword){
                alert("Passsword doesn't match")
                return;
            }
            try {
                const {user}=await auth.createUserWithEmailAndPassword(email,password); //it will return us the userAuth object
                await createUserProfileDocument(user,{displayName});
                this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })
            } catch (error) {
              console.log(error.message);  
            }
        }
        handleChange=event=>{
            const{value,name}=event.target
            this.setState({[name]:value})
        }
    

    render(){
        const{displayName,email,password,confirmPassword}=this.state;
        console.log("this is the state:",this.state);
        console.log("this is the displayName:",displayName);
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
export default SignUp