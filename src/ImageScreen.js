import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from './Components/ImageDetail'

const ImageScreen =()=> {
     // not only title you can use anything
    return <View>
        
        <ImageDetail 
        title="Forest" 
        ImageSource={require('./Components/beach.jpg')}
        score={9}
        />   
        <ImageDetail 
        title="Beach"
         ImageSource={require('./Components/forest.jpg')}
         score={7}
         />
        <ImageDetail
         title="Mountain" 
         ImageSource={require('./Components/mountain.jpg')}
         score={10}
         />
       


    </View>
};


const style =StyleSheet.create({});

export default ImageScreen;