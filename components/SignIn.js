import React,{Component} from 'react'
import { Header } from 'react-navigation-stack';
import {TouchableOpacity,StyleSheet,View,Text,TextInput,Image,KeyboardAvoidingView,ImageBackground,AsyncStorage,Dimensions,Button} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class SigIn extends Component{
    constructor(props){
        super(props)
        this.state={username:'',password:''}
    }
    onChangeName=(text)=>{
        console.log(text)
        this.setState({username:text})
    }
    onChangePass= (text)=>{
        this.setState({password:text})
    }
    onSubmit=async ()=>{
        if(this.state.username==="admin")
        {
                alert('Login Successful'+this.state.username);
                await AsyncStorage.setItem('userName',this.state.username);
                this.props.navigation.navigate('App');
            }
        else{
            alert('Login Fails');
        
        }
    }
    render()
    {   const height = Dimensions.get('window').height;
        const width = Dimensions.get('window').width;
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignContent:'center',
                
            },
            textStyle:{
               fontSize:20,
               marginLeft:0.1*width,
               marginRight:0.1*width,
               alignItems:'center',
               alignSelf:'center',
               borderColor: '#E91E63',
               textAlign:'center',
               padding:12
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
            inputField:{
                marginTop:0.05*height,
                height:40,
                borderWidth:1,
                backgroundColor:'white',
                marginLeft:0.1*width,
                marginRight:0.1*width,
                padding:12,
                borderRadius:10,
                
            },
            SubmitButtonStyle: {
                flex:1,
                justifyContent:'center',
                alignContent:'center',
                textAlign:'center',
                marginTop:20,
                paddingTop:15,
                paddingBottom:15,
                marginBottom:0.19*height,
                marginLeft:0.1*width,
                marginRight:0.1*width,
                backgroundColor:'#00BCD4',
                borderRadius:25,
                borderWidth: 1,
                borderColor: '#000'
              },
              button:{
                  flex:1,
                  justifyContent:"center",
                  alignContent:'center',
                  textAlign:'center',

              }
    
        });
        return(   
            <KeyboardAvoidingView style = {{ flexGrow: 1 }}
            behavior= {(Platform.OS === 'ios')? "padding" : null} enabled keyboardVerticalOffset={-500}>
           <View style={styles.container}>
               <ImageBackground source={require('../components/images/loginimage.jpg')} style={styles.backgroundImage} >
            <Image source={require('../components/images/logo.png')} style={styles.logo}/>
            
            <TextInput
      style={styles.inputField} placeholder="Username"  onChangeText={this.onChangeName}/>
       <TextInput
      style={styles.inputField} placeholder="Password" secureTextEntry={true} onChangeText={this.onChangePass}
      />
        
         <View style={styles.button}>
         <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={this.onSubmit}
       >
 
            <Text style={styles.textStyle}> Sign In </Text>
            
      </TouchableOpacity>
          </View>
            </ImageBackground>
          
            </View>
        </KeyboardAvoidingView>
        )
    }
}

export default SigIn
