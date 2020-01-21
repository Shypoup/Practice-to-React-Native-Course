
import React from 'react';
import { View,Text,StyleSheet,FlatList} from 'react-native';

const BoxScreen =() => {
  

    return(

    <View  style={styles.viewStyle}>
    {/* <Text style={styles.textOneStyle}>Child #1</Text>
    <Text style={styles.textTwoStyle}>Child #2</Text>
    <Text style={styles.textThreeStyle}>Child #3</Text> */}


    <View style={styles.viewOneStyle} />
    <View style={styles.viewTwoParent} >
    <View style={styles.viewTwoStyle} />
        </View>
    <View style={styles.viewThreeStyle} />
    </View>
    )
};




const styles =StyleSheet.create({
  
    viewStyle:{
        borderWidth: 3,
        borderColor : 'black',
        height: 200,
        // alignItems : 'flex-start',
        // alignItems : 'flex-end'
        // alignItems : 'center'
        // flexDirection:'column',
        // flexDirection:"row-reverse",
        // flexDirection:"row",
        // justifyContent : 'flex-start',
        // justifyContent :'flex-end',
        // justifyContent :'center',
        // justifyContent: 'space-around',
        // justifyContent : 'space-evenly',
        // justifyContent : 'space-between',
       // alignItems :'center',

       flexDirection : 'row',
       justifyContent : 'space-between',
       
    },
  
//     textOneStyle :{
//    borderWidth : 3,
//    borderColor:'red',
//    flex : 4,
//    //alignSelf: 'flex-start'
//   },
//   textTwoStyle :{
//     borderWidth : 3,
//     borderColor:'red',
//    // flex : 4,
//     // alignSelf: 'flex-end',
//    // position : 'absolute', //that ignore its siblings
//     // top : 10,
//    //bottom :10
//    // left :10,

//    /*****That to fill screen */
//   /* position : 'absolute',
//    top : 0,
//    bottom :0,
//    left :0,
//    right :0,
//    */

//    //OR
//    // ...StyleSheet.absoluteFillObject

// },
//    textThreeStyle :{
//     borderWidth : 3,
//     borderColor:'red',
//     //flex : 4,
// }

viewOneStyle :{
height : 50,
width:50,
backgroundColor : 'red',
},
viewTwoStyle :{
height : 50,
width:50,
backgroundColor : 'green',
},
viewTwoParent :{
height :100,
justifyContent: 'flex-end',
},
viewThreeStyle:{
height :50,
width:50,
backgroundColor : 'purple',
}
});

export default BoxScreen ;