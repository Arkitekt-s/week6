import React from 'react';
import {View, Text, ImageBackground, StatusBar, Button, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SecondPage = ({navigation}) => {
    const [value, valueText] = React.useState('');
    async function saveDataToStorage(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
            console.log('Data saved successfully');
        } catch (error) {
            console.log('Error saving data: ', error);
        }
    }
    async function getDataFromStorage(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                console.log('Data retrieved successfully: ', value);
            } else {
                console.log('Data not found');
            }
        } catch (error) {
            console.log('Error retrieving data: ', error);
        }
    }



    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image}
                             source={{uri:"https://www.nordea.dk/Images/144-415478/NemId.jpg"}}/>
            <Text style={styles.text}> Welcome to week 6</Text>
            {/*Present the headlines in a clickable list. When a headline is pressed, the entire text is shown.*/}
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 250, marginTop: 30, borderRadius: 50, padding: 10, }}
                onChangeText={text => valueText(text)}
                value={value}
            />
            {/*get data from storage*/}


            <StatusBar style="auto" />
            <View style={styles.btnLoginout}>
                <Button title="Logout" color="#DC143C" onPress={() => navigation.navigate('firstPage')}  />
            </View>
                {/*//save to local memory*/}
                <View style={styles.btnsave}>
                    <Button title="Save" color="#0F6467" onPress={() => saveDataToStorage('myKey', value)}  />
                    {/*//get all data from local memory*/}
                    <Button title={"Get all"} color="#0F6467" onPress={() => AsyncStorage.getAllKeys().then(AsyncStorage.multiGet).then((value) => console.log(value))}  />
                    <Button title="Get" color="#0F6467" onPress={() => getDataFromStorage('myKey')}  />
                    <Button title="Clear" color="#0F6467" onPress={() => AsyncStorage.clear()}  />


                </View>





        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //defult of web is column should be change to row
        flexDirection: 'column',
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

    },
    text: {
        color: "#0F6467",
        fontSize: 30,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        padding: 10,
        marginTop: 20,


    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',

    },
    btnLoginout: {
        color: "#fff",
        padding: 10,
        borderRadius: 50,
        marginTop: 30,
        width: 250,
    },
    btnsave: {
        color: "#fff",
        padding: 10,
        borderRadius: 50,
        marginTop: 30,
        width: 250,
    }

});

export default SecondPage;
