import React from 'react';
import CompInput from '../components/CompInput';
import {Button, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {controlUsername, controlPassword} from '../../redux/slices/LoginSlice';
import InputControlHandler from '../../handlers/InputControlHandler'

const SetLogin = () =>{
    return(
        <View>
            <CompInput
            MyText={'Email'}
            MyPlaceholder={'test@mail.com'}
            handler={InputControlHandler.username}
            secureText={false}
            keyboard={'email-address'}
            
            />
            <CompInput
            MyText={'Password'}
            MyPlaceholder={'8 char min'}
            handler={InputControlHandler.password}
            secureText={true}
            keyboard={'default'}
            />
            <Button
            style={styles.buttonStyle}
            title='Login'
            color='crimson'
            />  
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        borderRadius:30
    }
})

const mapStateToProps = (state) =>({
    usernameState: state.input.username,
    passwordState: state.input.password
})

const mapDispatchToProps = {
    controlUsername: controlUsername,
    controlPassword: controlPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(SetLogin);