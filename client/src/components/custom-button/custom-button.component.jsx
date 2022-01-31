import React from "react";
// import {CustomButtonContainer}  from "./custom-button.styles";
import './custom-button.styles.scss'
const CustomButtom=({children,inverted,isGoogleSignIn ,...otherProps})=>{
    // console.log(isGoogleSignIn);
    return(

    <button
     className={`${inverted?'inverted':''} ${isGoogleSignIn?('googleSignIn'):''} custom-button`}
      {...otherProps}>
        {children}
    </button>
    //   <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)}
export default CustomButtom
