import React from 'react'
import Directory from '../../components/directory/dictory.component'
import HomePageContainer from './homepage.styles'
export default function Homepage(props) {
    // console.log(props)
    // throw Error;
    return (
        <HomePageContainer >
           <Directory/>
        </HomePageContainer>
    )
}
