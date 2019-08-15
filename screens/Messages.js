import * as Font from 'expo-font';
import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        };
        this.createMessage = this.createMessage.bind(this);
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Muli-Regular': require('../assets/fonts/Muli-Regular.ttf'),
            'Muli-Bold': require('../assets/fonts/Muli-Bold.ttf'),
        });
        this.setState({ fontLoaded: true })
    }
    static navigationOptions = {
        title: 'Messages',
        headerStyle: {
            backgroundColor: '#007aff',
            shadowOpacity: 0,
            elevation: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'Muli-Bold',
            fontWeight: "normal",
            fontSize: 24,
        }
    }

    createMessage(userName) {
        this.props.navigation.navigate('CreateMessages', userName);
    }

    render() {
        return (
            this.state.fontLoaded ? (
                <View style={styles.mainContainer}>
                    <View style={styles.listContainer}>
                        <ScrollView style={{ width: '100%', marginTop: 20, }}>
                            <TouchableOpacity style={styles.contactList} onPress={() => this.createMessage('Mary Wilson')}>
                                <View style={styles.profileImgContainer}>
                                    <Image
                                        source={require('../assets/images/profile-1.jpg')}
                                        style={{
                                            height: 50,
                                            width: 50,
                                            borderRadius: 25,
                                        }}
                                    />
                                </View>
                                <View style={styles.profileNameContainer}>
                                    <View>
                                        <Text style={styles.profileName}>Mary Wilson</Text>
                                        <Text style={styles.profileMessage}>I sent you an email about the...</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactList} onPress={() => this.createMessage('David Austin')}>
                                <View style={styles.profileImgContainer}>
                                    <Image
                                        source={require('../assets/images/profile-2.jpg')}
                                        style={{
                                            height: 50,
                                            width: 50,
                                            borderRadius: 25,
                                        }}
                                    />
                                </View>
                                <View style={styles.profileNameContainer}>
                                    <View>
                                        <Text style={styles.profileName}>David Austin</Text>
                                        <Text style={styles.profileMessage}>Let me know your choice</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.contactList} onPress={() => this.createMessage('Matthew Fox')}>
                                <View style={styles.profileImgContainer}>
                                    <Image
                                        source={require('../assets/images/profile-3.jpg')}
                                        style={{
                                            height: 50,
                                            width: 50,
                                            borderRadius: 25,
                                        }}
                                    />
                                </View>
                                <View style={styles.profileNameContainer}>
                                    <View>
                                        <Text style={styles.profileName}>Matthew Fox</Text>
                                        <Text style={styles.profileMessage}>Ok! sure</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            ) : (<View style={styles.container}><ActivityIndicator color="#007aff" size="large" /></View>)
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#007aff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    // heading: {
    //     marginHorizontal: 10,
    //     marginBottom: 10,
    //     fontSize: 24,
    //     color: '#39325c',
    //     textAlign: 'center',
    //     fontFamily: 'Muli-Bold',
    // },
    contactList: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    profileImgContainer: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#eee',
    },
    profileNameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    profileName: {
        fontFamily: 'Muli-Bold',
        fontSize: 16,
        color: '#39325c',
    },
    profileMessage: {
        fontFamily: 'Muli-Regular',
        color: '#bdc6d0',
    }
});
