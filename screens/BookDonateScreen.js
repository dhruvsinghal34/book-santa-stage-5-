import * as React from 'react'
import {View,Text,TouchableOpacity,FlatList,StyleSheet} from 'react-native'
import firebase from 'firebase'
import {ListItem} from 'react-native-elements';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class BookDonateScreen extends React.Component{
    constructor (){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
           requestedBookList:[]
        }
        this.requestRef=null;
    }
  getRequestBookList=async() =>{
   this.requestRef=db.collection('requested_books').onSnapShat((snapshot)=>{
        var requestedBookList=snapshot.docs.map((doc)=>{ doc.data();
        })
        this.setState({requestedBookList:requestedBookList})
   })
  }
  componentDidMount(){
      this.getRequestBookList();

  }
  componentWillUnmount(){
    this.requestRef();
  }
    render(){
        return(
            <View style={{flex:1}}>
        <AppHeader title="Donate Books"/>
        <View style={{flex:1}}>
          {
            this.state.requestedBookList.length === 0?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={(item, index) => index.toString()}
               data={this.state.requestedBookList}
                renderItem={(item,index)=>{
                    return(<ListItem 
                    key={index}
                    title={item.Book_Name}
                    subtitle={item.Reason_To_Request}
                    titleStyle={{ color: 'black', fontWeight: 'bold' }}
                    rightElement={
                        <TouchableOpacity style={styles.button}>
                          <Text style={{color:'#ffff'}}>View</Text>
                        </TouchableOpacity>
                      }
                      bottomDivider
                    ></ListItem>)
                  
                }}
              />
            )
          }
        </View>
      </View>
        )
    } 
}
const styles = StyleSheet.create({
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })