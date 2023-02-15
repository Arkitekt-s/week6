import {Button, ImageBackground, StatusBar, StyleSheet, Text, View} from "react-native";

const FirstPage= ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image}
                             source={{uri:"https://www.nordea.dk/Images/144-415478/NemId.jpg"}}/>
            <Text style={styles.text}> New note  </Text>
            <StatusBar style="auto" />
            <View style={styles.btnLogin}>
                <Button title="New note" color="#00015E" onPress={() => navigation.navigate('secondPage')}  />
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
    btnLogin: {

        color: "#fff",
        padding: 10,
        borderRadius: 50,
        marginTop: 30,
        width: 250,




    }

});
export default FirstPage;