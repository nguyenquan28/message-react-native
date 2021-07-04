import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const Home = ({ navigation }) => {

    // State
    const [uid, setUid] = useState()

    // Data item
    const MESSAGE = [
        {
            'id': 1,
            'image': require('../../assets/image/minion1.jpg'),
            'name': 'Kenvin',
            'message': 'How are you?'
        },
        {
            'id': 2,
            'image': require('../../assets/image/minion2.jpg'),
            'name': 'Bob',
            'message': 'How are you?'
        },
        {
            'id': 3,
            'image': require('../../assets/image/minion3.jpg'),
            'name': 'Gru',
            'message': 'How are you?'
        },
        {
            'id': 4,
            'image': require('../../assets/image/minion4.jpg'),
            'name': 'Scarlett',
            'message': 'How are you?'
        },
        {
            'id': 5,
            'image': require('../../assets/image/minion5.jpg'),
            'name': 'Stuart',
            'message': 'How are you?'
        },
        {
            'id': 6,
            'image': require('../../assets/image/minion6.jpg'),
            'name': 'Helb',
            'message': 'How are you?'
        },
        {
            'id': 7,
            'image': require('../../assets/image/minion7.jpg'),
            'name': 'Madge',
            'message': 'How are you?'
        },
        {
            'id': 8,
            'image': require('../../assets/image/minion8.jpg'),
            'name': 'Walter',
            'message': 'How are you?'
        },
        {
            'id': 9,
            'image': require('../../assets/image/minion9.jpg'),
            'name': 'Tina',
            'message': 'How are you?'
        },
        {
            'id': 10,
            'image': require('../../assets/image/minion10.jpg'),
            'name': 'Lou',
            'message': 'How are you?'
        }
    ]

    //Select width screen
    const SCREEN_WIDTH = Dimensions.get('window').width
    const SCREEN_HEIGHT = Dimensions.get('window').height

    // Image avatar
    const image = 'https://cdn.dribbble.com/users/2364329/screenshots/4809566/dribbble-21.jpg?compress=1&resize=400x300'

    const getUid = async () => {
        const uid = await AsyncStorage.getItem('uid')
        setUid(uid)
    }

    useEffect(() => {
        let unmounted = false
        if (!unmounted) {
            getUid()
        }
        return () => { unmounted = true };
    }, [])

    // Render item flatlist
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.chats} >
                    <Image style={styles.avatar} source={item.image} />
                    <View>
                        <Text style={styles.titleChat} > {item.name}</Text>
                        <Text style={styles.lastMess}>{item.message}</Text>
                    </View>
                </View >
            </TouchableOpacity>
        )
    }

    const searchHeader = () => {
        return (
            <View style={styles.search} >
                <View style={styles.iconSearch}>
                    <Ionicons name={'search'} size={20} color={'#7d7d7d'} />
                </View>
                <TextInput
                    placeholder='Search'
                    style={styles.textInput}
                />
            </View>
        )
    };

    // Render view
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>

                {/* Avatar */}
                <View style={styles.leftHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', { uid: uid })}>
                        <Image style={styles.avatar} source={{ uri: image }} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Chat</Text>
                </View>

                {/* Option */}
                <View style={styles.rightHeader}>

                    {/* Picture */}
                    <TouchableOpacity>
                        <View style={styles.icons}>
                            <Ionicons name={'camera'} size={25} color={'#000'} />
                        </View>
                    </TouchableOpacity>

                    {/* Create message */}
                    <TouchableOpacity>
                        <View style={styles.icons}>
                            <Ionicons name={'pencil-sharp'} size={22} color={'#000'} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Content */}
            <View>
                <FlatList
                    data={MESSAGE}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={item => item.id}
                    style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 5 }}
                    ListHeaderComponent={searchHeader}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 1,
    },

    leftHeader: {
        flexDirection: 'row'
    },

    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    avatar: {
        borderRadius: 50,
        width: 55,
        height: 55
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 13,
        marginLeft: 20,
    },

    icons: {
        width: 40,
        height: 40,
        backgroundColor: '#e5e5e5',
        marginLeft: 20,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInput: {
        backgroundColor: '#e5e5e5',
        borderRadius: 30,
        marginHorizontal: 20,
        margin: 20,
        position: 'relative',
        paddingLeft: 55,
        fontSize: 18
    },

    iconSearch: {
        position: 'absolute',
        top: 33,
        left: 40,
        zIndex: 1
    },

    chats: {
        flexDirection: 'row',
        padding: 10,
        margin: 2,
        marginHorizontal: 5,
        borderColor: '#f0d0f0',
        borderWidth: 1,
        borderRadius: 5
    },

    titleChat: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    },

    lastMess: {
        padding: 5,
        marginLeft: 10
    },
})

export default Home