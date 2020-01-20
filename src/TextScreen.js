import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';



const TextScreen =()=>{
    const [name,setName] =useState('');
    const [password,setPassword] =useState('');
    return(
        <View>
            <Text> Enter name :</Text>
            <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={newvalue => setName(newvalue)}
            />

    <Text> My name is : {name}</Text>

    <Text> Enter password : </Text>
    <TextInput style={styles.input}
            autoCapitalize="none"           
            autoCorrect={false}
            value={password}
            onChangeText={newvalue => setPassword(newvalue)}
            />

                    {password.length < 4 ? <Text> password must be 4 charachters at least</Text>: null }
        </View>
    )
}

const styles =StyleSheet.create({
    input:{
        margin: 15,
        borderColor : '#000',
        borderWidth: 1,
    }


});


export default TextScreen;