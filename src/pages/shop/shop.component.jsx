import React from 'react'
import { connect } from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import {firestore, takingFirestoreObjectData} from '../../components/firebase/firebase.utils'
import { createSelector } from 'reselect';
import { updateCollecton } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
 

const UpdateCollectionOverview=WithSpinner(CollectionOverview)
const UpdateCollectionPage=WithSpinner(CollectionPage);
class ShopPage extends React.Component{
  state={  
    isloading:true,
  }  // instead of calling the constructor and super we can also write the state in class using state like this
   unsubcribeFromSnapShootObject=null;
   
   
   componentDidMount(){
        const {updateCollection}=this.props 
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(async snapShotObj=>{
          //  console.log("collection data from snapshot:",snapShotObj)
           const recievedData=takingFirestoreObjectData(snapShotObj)
            updateCollection(recievedData)
            this.setState({isloading:false})
      })
      }
   render(){
     const {match}=this.props;
     const{isloading}=this.state;
     //  console.log("route props:",props);
    return (
            <div className="shop-page">
             <Route exact path={`${match.path}`} render={(props)=>
             <UpdateCollectionOverview isloading={isloading} {...props}/>}/>
             <Route exact path={`${match.path}/:collectionId`} render={(props)=>
             <UpdateCollectionPage isloading={isloading} {...props}/>}/>
            </div>
        )
  }
    
}
const mapDispatchToProps=(dispatch)=>({
  updateCollection:(recieveDataFromFirestore)=>
  dispatch(updateCollecton(recieveDataFromFirestore))
})
export default connect(null,mapDispatchToProps)(ShopPage)