import React from 'react'
import { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../navigation/AuthProvider'
import database from '../firebase/config'

const Profile = ({ route, navigation }) => {
    // Image avatar
    const image = 'https://cdn.dribbble.com/users/2364329/screenshots/4809566/dribbble-21.jpg?compress=1&resize=400x300'
    const { logOut } = useContext(AuthContext)

    // get Uid
    useEffect(() => {
        const userRef = database().ref('/users')
        console.log(userRef);
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={{ overflow: 'hidden', paddingBottom: 5 }} >

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name={'arrow-back'} size={25} color={'#3b3b3b'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={logOut}>
                        <Ionicons name={'log-out-outline'} size={25} color={'#3b3b3b'} />
                    </TouchableOpacity>
                </View>

                {/* Title */}
                <Text style={styles.title}>My Profile</Text>

                {/* Content */}
                <View style={styles.content}>
                    <Image style={styles.avt} source={{ uri: image }} />
                    <Text style={styles.name}>Nguyen Van Quan</Text>
                    <Text style={styles.intro}>Professional React native Developer</Text>
                </View>

                {/* Alynatics */}
                <View style={styles.alynatics} >
                    <View style={styles.count}>
                        <Text style={styles.titleCount}>Photos</Text>
                        <Text style={styles.number}>966</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.titleCount}>Followers</Text>
                        <Text style={styles.number}>696</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.titleCount}>Follows</Text>
                        <Text style={styles.number}>96</Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30
    },

    title: {
        marginHorizontal: 20,
        marginTop: 10,
        color: '#3b3b3b',
        fontSize: 23,
        fontWeight: 'bold'
    },

    content: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
    },

    avt: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: '#FF89C0',
        borderWidth: 2
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3b3b3b',
        margin: 10
    },

    intro: {
        color: '#96aab5',
        marginHorizontal: 50,
        textAlign: 'center'
    },

    alynatics: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },

    count: {
        alignItems: 'center'
    },

    titleCount: {
        color: '#96aab5',
    },

    number: {
        fontWeight: 'bold',
        color: '#3b3b3b',
        fontSize: 16
    },
})

export default Profile