import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
class LiveFeed extends Component{
    constructor(props){
        super(props)
        this.state={username:'',password:''}
    }
    static navigationOptions = {
        title: 'Live Feed',
        headerStyle: {
            backgroundColor: '#2F95D6',
          },
    };
    render()
    {   
        const height = Dimensions.get('window').height;
        const width = Dimensions.get('window').width;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignContent:'center',
                
            },
            bcontainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent:'center',
            
                
            },
            textStyle:{
                flex:1,
                justifyContent:'center',
               fontSize:10,
               alignItems:'center',
               alignSelf:'center',
               color:'white', 
               borderRadius:20,
               borderColor: 'black',
               textAlign:'center',
               padding:12,
                alignItems:'center',
                alignSelf:'center'
            },
            backgroundImage: {
                flex:1,
                width: null,
                height: null, // or 'stretch'
                resizeMode:'cover'
    
            },
            logo:{
                marginTop:height*0.07,
                marginLeft:width*0.125,
                marginRight:width*0.125,            
                width: 200,
                height: 200,
                resizeMode: 'contain',
                alignContent:'center',
                justifyContent: 'center',
                alignSelf:'center'
    
            },
            SubmitButtonStyle: {
                flex:1,
                flexDirection:'row',
                marginTop:height*0.1,
                paddingTop:15,
                paddingBottom:15,
                marginLeft:0.1*width,
                marginRight:0.1*width,
                marginRight:30,
                backgroundColor:'#00BCD4',
                color:'white',
                borderRadius:25,
                borderWidth: 1,
                borderColor: '#000'
              },
              TextStyle:{
                color:'#fff',
                textAlign:'center',
                
            }
        });
        return(   
           <View style={styles.container}>
              <ImageBackground source={require('../components/images/background.png')} style={styles.backgroundImage} >
              <View style={{flex:1,justifyContent:'center',alignSelf:'center',textAlign:'center'}}>
              <Text style={styles.textStyle}>Live Feed</Text>
             </View>
             </ImageBackground>
            </View>
        )
    }
}

export default LiveFeed