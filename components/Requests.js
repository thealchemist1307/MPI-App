import React,{Component} from 'react'
import {Card} from 'react-native-elements'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
class Requests extends Component{
    constructor(props){
        super(props)
        this.state={username:'',password:''}
    }
    static navigationOptions = {
        title: 'Requests',
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
                justifyContent: 'center',
                backgroundColor:'white',
            
                
            },
            bbg:{
                height:height*0.15,
                width:width*0.85,
                backgroundColor:'white',
            },
            textStyle:{
                flex:1,

                fontSize:10,
                textAlign:'center'
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
                backgroundColor:'#00BCD4',
                color:'white',
                borderRadius:25,
                borderWidth: 1,
                borderColor: '#000',
                alignContent:'center',
                alignItems:'center'

              },
              TextStyle:{
                color:'#fff',
                textAlign:'center',
            }
        });
            return(   
                <View style={styles.container}>
                <ImageBackground source={require('../components/images/background.png')} style={styles.backgroundImage} >
               
                <Card title={"New Request"} image={require('../components/images/test.jpg')}>
                <View style={styles.bbg}>
                <View style={styles.bcontainer}>
                <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={this.onSubmit}
       >
 
            <Text style={styles.textStyle}> Accept </Text>
            
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={this.onSubmit}
       >
 
            <Text style={styles.textStyle}> Reject </Text>
            
      </TouchableOpacity>
      </View>
      </View>
                </Card>
             </ImageBackground>
                
             </View>
            )
        }
}

export default Requests