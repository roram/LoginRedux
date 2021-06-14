import React from 'react';
import {View, StyleSheet} from 'react-native';
import SetLogin from '../../sets/SetLogin';

const ScreenLoginUI = () =>{
    return (
        <View
        style={styles.viewContainer}
        >
            <SetLogin/>
        </View>
        
    );
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ScreenLoginUI;