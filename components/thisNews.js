import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView,ScrollView, Button, Alert, View, Image} from 'react-native';
import {globalStyle} from '../Styles/styles';

export default function ThisNews({ route }) {


    return (
        <ScrollView style={styles.fullscreen}>
            <Image source={{
                uri: route.params.img
            }} style={styles.img}
            />
            <Text style={styles.name}>{route.params.name}</Text>
            <View style={styles.fon}>
            <Text style={styles.full}>{route.params.full}</Text>
            </View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    fullscreen:{
      width:'100%',
      height:'100%',
        backgroundColor:'#17181B',
    },
    img:{
        width:'95%',
        height:200,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius: 5,
    },
    name:{
        marginRight:'auto',
        fontSize:27,
        marginLeft:'auto',
        color:'#fff',

    },
    full:{

        fontSize:18,
        marginLeft:10,
        color:'#fff',
    },
    fon:{
      width:'95%',
      height:'auto',
        marginRight:'auto',
        marginLeft:'auto',
      backgroundColor:'#22232C',
      borderRadius:15,
    },

});