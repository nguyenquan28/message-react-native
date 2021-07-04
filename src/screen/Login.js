import React, { useState, useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigation/AuthProvider';

const Login = ({ navigation }) => {
    const [userName, setUseName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const { login, user, errorFb, googleLogin, fbLogin } = useContext(AuthContext);

    const onLogin = () => {
        if (userName && password) {
            login(userName, password)
            // setError(errorFb)
            // console.log('id: ' + errorFb);
            // console.log(errorFb.indexOf("]"));
            // let start = errorFb.indexOf("]")
            // let end = errorFb.length
            // console.log(errorFb.slice(start, end));

        } else {
            setError('Please check your email or password')
        }
    }

    return (
        <SafeAreaView>

            {/* Login form */}
            <LinearGradient
                colors={['#e9adff', '#ade4ff']}
                // style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <Text style={styles.title}>Login</Text>
                <View>

                    {/* Input feld*/}
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        onChangeText={setUseName}
                        borderColor={!userName ? "red" : '#ade4ff'}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    {/* Input feld */}
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        onChangeText={setPassword}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                        borderColor={!password ? "red" : '#ade4ff'}
                    />

                    {/* SHow error */}
                    <Text style={styles.error} >{error}</Text>

                    {/* Button login */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onLogin()}>
                        <Text style={styles.textBtn}>Login</Text>
                    </TouchableOpacity>

                    {/* Button forgot password */}
                    <TouchableOpacity>
                        <Text style={styles.forgotPass}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>

            {/* Login by facebook */}
            <View style={styles.child}>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 30 }}>
                    <View style={styles.hrStyle} />
                    <Text style={styles.titleConnect}>or connect with</Text>
                    <View style={styles.hrStyle} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 50 }}>
                    <TouchableOpacity>
                        <View style={styles.btnConnect}>
                            <Ionicons name={'logo-facebook'} size={18} color={'#fff'} />
                            <Text style={styles.titleBtn}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[styles.btnConnect, { backgroundColor: '#2851A3' }]}>
                            <Ionicons name={'logo-twitter'} size={18} color={'#fff'} />
                            <Text style={styles.titleBtn}>Twitter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Create account */}
            <View style={styles.createAcc}>
                <Text style={styles.titleConnect}>
                    Don't have account?
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={{ color: '#174799' }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        alignSelf: 'center',
        margin: 50,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },

    input: {
        marginHorizontal: 40,
        borderWidth: 1,
        margin: 10,
        borderRadius: 25,
        paddingHorizontal: 30,
        backgroundColor: 'white'
    },

    error: {
        fontStyle: 'italic',
        color: 'red',
        marginHorizontal: 60
    },

    button: {
        marginHorizontal: 40,
        borderWidth: 1,
        margin: 10,
        borderRadius: 25,
        paddingHorizontal: 30,
        borderColor: '#ae78ff',
        height: 50,
        marginTop: 50,
        backgroundColor: '#ae78ff',
        justifyContent: 'center'
    },

    textBtn: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },

    forgotPass: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        margin: 15,
        marginBottom: 30,
    },

    hrStyle: {
        flex: 1,
        height: 1,
        backgroundColor: '#b5b5b5'
    },
    titleConnect: {
        textAlign: 'center',
        marginHorizontal: 10,
        color: '#b5b5b5',
        marginTop: -2
    },

    btnConnect: {
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#1877F2',
        padding: 10,
        width: 150,
        paddingHorizontal: 30
    },

    titleBtn: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold'
    },

    createAcc: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 40
    }
})

export default Login