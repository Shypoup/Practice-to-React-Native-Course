import React, { useReducer } from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';

/***That not perfect to use Reducer but just an exercice  it is good for complicated app */
/****some notes */
/*
action =   howTochangeState
dispatch = callMyReducer
*/

const reducer =(state,action)=>{
    //state === {count: number}
    // action === { type :''increment'  || 'decrement' , payload : 1}

    switch (action.type){
        case 'increment':
            return {...state, count :state.count + action.payload}
        case 'decrement':
            return {...state, count :state.count - action.payload}
        default:
            return state;
    }
}

const HandledCounterScreen = () => {

const [state,dispatch] = useReducer(reducer, {count: 0})

return(

<View>
    <Button title='Increase' onPress ={()=>{
     dispatch({type : 'increment' , payload :1 })
    }} />

<Button title='Decrease' onPress ={()=>{
        dispatch({type : 'decrement' , payload :1 })
    }} />
    
<Text>Current Count : {state.count}</Text>

</View>
);

}


const styles =StyleSheet.create({});

export default HandledCounterScreen;