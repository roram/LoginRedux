const InputControlHandler = {

    username: function controlUsername(username){
        const re = /\S+@\S+\.\S+/
        return re.test(username)
    },
    password: function controlPassword(password){
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/
        return re.test(password);
    }
}

export default InputControlHandler;