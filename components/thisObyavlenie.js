import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, Button, Alert,ScrollView, View, TouchableOpacity, Image} from 'react-native';
import {globalStyle} from '../Styles/styles';
import {useState} from "react";
import { Fontisto } from '@expo/vector-icons';

export default function ThisObyavlenie({ route }) {
    const loadScreen = () => {
        navigation.navigate('News');
    }

    return (
        <ScrollView style={styles.fullscreen}>

            <Image source={{
                uri: route.params.img
            }} style={styles.img}
            />
            <Text style={styles.name}>{route.params.name}</Text>
            <View style={styles.body}>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Цена:</Text>
                <Text style={styles.textinObtwo}>{ route.params.price }</Text>
                <Text style={styles.textInOb}>р</Text>
            </View>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Пробег:</Text>
                <Text style={styles.textinObtwo}>{ route.params.probeg }</Text>
                <Text style={styles.textInOb}>км</Text>
            </View>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Мощность:</Text>
                <Text style={styles.textinObtwo}>{ route.params.power }</Text>
                <Text style={styles.textInOb}>л.с.</Text>
            </View>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Объем двигателя:</Text>
                <Text style={styles.textinObtwo}>{ route.params.obiem }</Text>
                <Text style={styles.textInOb}>л</Text>
            </View>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Цвет:</Text>
                <Text style={styles.textinObtwo}>{ route.params.color }</Text>
            </View>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Год выпуска:</Text>
                <Text style={styles.textinObtwo}>{ route.params.year }</Text>
                <Text style={styles.textInOb}>г.</Text>
            </View>
            <View style={styles.Obstyle}>
                <Text style={styles.textInOb}>Владелец:</Text>
                <Text style={styles.textinObtwo}>{ route.params.hozyain }</Text>
            </View>
            <View style={styles.GlobalOpisanie}>
            <Text style={styles.textInOb}>Описание:</Text>
                <View style={styles.textOpisanie}>
            <Text style={styles.opisanie}>{ route.params.opisanie }</Text>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    fullscreen:{
        backgroundColor:'#17181B',
        width:'100%',
        height:'100%',
    },
    text:{
        color:'#fff',

        marginTop:10,
    },
    head:{
        backgroundColor:'#900',
        width:'100%',
        height:'7%',


    },
    img:{
        width:'95%',
        height:200,
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius: 5,
        marginTop:8,

    },
    textinObtwo:{
        color:'white',
        marginLeft:10,
        fontSize:18,
    },

    item:{
        width: '100%',
        marginBottom: 30,
        marginRight:10,


    },
    name:{
        fontSize:24,
        marginLeft:10,
        color:'#fff',
        marginTop:6,
    },
    Obstyle:{
        flexDirection:'row',
        marginTop:5,
    },
    textInOb:{
        color:'silver',
        marginLeft:10,
        fontSize:18,
    },
    NewFull:{
        width:'95%',

        borderRadius:15,
        backgroundColor:'#22232C',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:0,
    },
    opisanie:{
        color:'white',
        marginLeft:10,
        fontSize:18,
        marginTop:'auto',
        marginBottom:'auto',

    },
    body:{
        width:'95%',
        height:'auto',
        borderRadius:15,
        backgroundColor:'#22232C',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:6,
    },
    GlobalOpisanie:{
        marginTop:5,
    },
    textOpisanie:{
        width:'95%',
        height:'auto',
        borderRadius:15,
        backgroundColor:'#22232C',
        marginLeft:'auto',
        borderColor:'#900',
        borderStyle:'solid',
        marginRight:'auto',
        marginTop:5,
        marginBottom:5,

    },
});
