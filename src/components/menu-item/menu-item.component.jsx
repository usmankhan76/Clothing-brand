import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem=(props)=> {
    const {title,imageUrl,size,linkUrl,history,match}=props
    // console.log("This is the props:",match.url);
    return (
         <div
          className={`${size} menu-item`}
              onClick={()=>history.push(`${match.url}${linkUrl}`)} //we can also do this by removing the match.rul but we have need to pass / in the linkUrl property 
          >
              <div className='background-image'  
              style={{backgroundImage:`url(${imageUrl})`}}
               />
                    <div className="content">
                       {/* <Link to='/hats' style={{textDecoration:'none'}} > <h1 className="title">{title.toUpperCase()}</h1></Link> */}
                       <h1 className="title">{title.toUpperCase()}</h1>
                        <span className="subtitle">Shop Now</span>
                    </div>
                </div>
    )
}
export default withRouter(MenuItem) 
// withrouter is the higher order component, higher order component is the fucntion that take component as the parameter and return us the modified component , so now in this case it simple return us the location and history in the props of passed component like Menuitem  