
import React from 'react';
import { View,Text,StyleSheet,FlatList} from 'react-native';

const ComponentsScreen =() => {
  

    return(
    <Text style={styles.textStyle}s>Hello From  ComponentsScreen</Text>);
};




const styles =StyleSheet.create({
  textStyle :{
    marginVertical : 30,
    paddingBottom:20,
    marginLeft: 10,
   fontSize:20,
  
  }
});

export default ComponentsScreen ;