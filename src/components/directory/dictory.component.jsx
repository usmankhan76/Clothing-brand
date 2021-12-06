import React from 'react'
import { connect } from 'react-redux';
import sectionsSelector from '../../redux/directory/direactory.selector';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import {createStructuredSelector} from 'reselect'
const  Directory=({sections})=>{
    return(
             <div className='directory-menu'>
              {
                  sections.map(({id,...otherproperties})=><MenuItem key={id} {...otherproperties}/>)
              }
            </div>
        )

}
const mapStateToProps=createStructuredSelector({
  sections:sectionsSelector
})
export default connect(mapStateToProps) (Directory)