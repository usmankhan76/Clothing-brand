
import React, { Profiler } from 'react'
import Directory from '../../components/directory/dictory.component'
import HomePageContainer from './homepage.styles'
export default function Homepage(props) {
    // console.log(props)
    // throw Error;
    return (
        <HomePageContainer >
            <Profiler id='directory' onRender={(id,phase,actualDuration)=>{console.log({id,phase,actualDuration})}}>
           <Directory/>
            </Profiler>
        </HomePageContainer>
    )
}
