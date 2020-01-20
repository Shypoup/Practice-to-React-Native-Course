
import React from 'react';
import { View,Text,StyleSheet,FlatList, Button,TouchableOpacity} from 'react-native';
//const HomeScreen =(props) => { is equal to
// const HomeScreen =props => {
//     return(
//       <View>
//     <Text style={styles.textStyle}>Hello From  HomeScreen</Text>
//     <Button 
//      onPress={()=> props.navigation.navigate('Components')}
//      title="Go to Components Page"
//     />

// <Button 
//      onPress={()=> props.navigation.navigate('List')}
//      title="Go to Components Page"
//     />
//     </View>
//     )};

// You can replace "props"  with  "({navigation})"    and delte props from buttons


    const HomeScreen = ({navigation}) => {
      return(
        <View>
      <Text style={styles.textStyle}>Hello From  HomeScreen</Text>
      <Button 
       onPress={()=> navigation.navigate('Components')}
       title="Go to Components Page"
      />
  
  <Button 
       onPress={()=> navigation.navigate('List')}
       title="Go to Components Page"
      />

<Button 
       onPress={()=> navigation.navigate('Image')}
       title="Go to Image Page"
      />

<Button 
       onPress={()=> navigation.navigate('Counter')}
       title="Go to Counter Page"
      />

<Button 
       onPress={()=> navigation.navigate('HandledCounter')}
       title="Go to Handled Counter Page"
      />

<Button 
       onPress={()=> navigation.navigate('Color')}
       title="Go to Color Page"
      />

<Button 
       onPress={()=> navigation.navigate('Square')}
       title="Go to Square Color Page"
      />
    

<Button 
       onPress={()=> navigation.navigate('HandledSquare')}
       title="Go to Handled Square Color Page"
      />

<Button 
       onPress={()=> navigation.navigate('Text')}
       title="Go to Text Page"
      />
     
      </View>
      )};



const styles =StyleSheet.create({
  textStyle :{
    marginVertical : 30,
    paddingBottom:20,
    marginLeft: 10,
   fontSize:20,
   
  },
  textStyleButton:
  {
    fontSize:20,
  },
  ButtonStyle:
  {
    
    fontSize :60,
    margin:20,
    padding:10,
    marginLeft: 100,
    color:'#111',
    borderRadius: 10,
    
  }
});

export default HomeScreen;