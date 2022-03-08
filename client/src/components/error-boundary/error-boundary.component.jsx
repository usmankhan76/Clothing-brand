import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

export default class ErrorBoundry  extends Component {
    constructor(params) {
        super();
        this.state={hasError:false};

    }
    static getDerivedStateFromError(){
        //it will update the ui after the error accured 
        return {hasError:true};
    }

    componentDidCatch(error,errorInfo){
        // in this method we get the error that we may be sent to somewhere or console log it 
        console.log(error,errorInfo)
    }
  render() {
      if(this.state.hasError) {
            return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png'/>
                    <ErrorImageText>Sorry your page is broken </ErrorImageText>    
            </ErrorImageOverlay>)

        } 
        
        return  this.props.children

        

    
  }
}
