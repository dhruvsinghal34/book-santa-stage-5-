import * as React from 'react'
import {View,TouchableOpacity,StyleSheet,Text}  from 'react'
import firebase from 'firebase'
import {DrawerItems} from 'react-navigation-drawer'
export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
          <View>
              <View>
            <DrawerItems
            {...this.props}
            ></DrawerItems>
            </View>
            <View>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate("WelcomeScreen")
                    firebase.auth().signOut();
                }}
                ><Text>LOGOUT</Text>
                </TouchableOpacity>
            </View>
          </View>
        )
    }
}