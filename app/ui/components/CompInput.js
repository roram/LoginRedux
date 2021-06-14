import React, { useState } from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {connect} from 'redux';

const CompInput = ({MyText, MyPlaceholder, handler, secureText, keyboard }) =>{

    const [text, setText] = useState('')
    const [dataState, setDataState] = useState(null)

    return(
        <>
            <Text
            style={styles.textStyle}
            >{MyText}</Text>
            <TextInput
            style={dataState == null ? styles.inputStyle : (dataState ? styles.inputStylePass : styles.inputStyleError)}
            placeholder={MyPlaceholder}
            value={text}
            onChangeText={setText}
            onSubmitEditing={()=>setDataState(handler(text))}
            secureTextEntry={secureText}
            keyboardType={keyboard}
            />
        </>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        color:'orange',
        textAlign:'center'
    },
    inputStyle:{
        borderWidth:2,
        borderRadius:30,
        borderColor: 'black',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        width:250
    },
    inputStyleError:{
        borderWidth:2,
        borderRadius:30,
        borderColor: 'red',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        width:250
    },
    inputStylePass:{
        borderWidth:2,
        borderRadius:30,
        borderColor: 'green',
        textAlign:'center',
        fontSize:20,
        marginBottom:20,
        width:250
    }
})



export default CompInput;