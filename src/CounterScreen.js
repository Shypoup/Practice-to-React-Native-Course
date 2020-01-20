import React, { useState } from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';


const CounterScreen = () => {

//to do : fix this it's not correct
//let counter =0; //that doesnt work at screen but work at coslole

const [counter,setCounter] =useState(0);

return(

<View>
    <Button title='Increase' onPress ={()=>{
       //Don't Do this !
       // counter ++;
       setCounter(counter + 1);
    }} />

<Button title='Decrease' onPress ={()=>{
       //Don't Do this !
       //counter --;
       setCounter(counter - 1);
    }} />
<Text>Current Count : {counter}</Text>

</View>
);

}


const styles =StyleSheet.create({});

export default CounterScreen;