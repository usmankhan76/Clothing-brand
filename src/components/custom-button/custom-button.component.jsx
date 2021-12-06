import React from "react";
import './custom-button.styles.scss'
const CustomButtom=({children,isGoogleSignIn,inverted,...otherProps})=>(
    <button
     className={`${inverted?'inverted':''} ${isGoogleSignIn?'googel-sign-in':''} custom-button`}
      {...otherProps}>
        {children}
    </button>
)
export default CustomButtom