import React from "react";
import Spinner from "../spinner/spinner.component";

 const  WithSpinner = WrappedComponent=>({isloading,...otherprops})=>{
    return isloading ? (
        <Spinner/>
    ):(<WrappedComponent {...otherprops}/>)
}

export default WithSpinner

