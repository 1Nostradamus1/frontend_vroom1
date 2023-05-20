import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, Button, Alert, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {globalStyle} from '../Styles/styles';
import {Formik} from "formik";
import {getActionFromState} from "@react-navigation/native";
import {useState} from "react";

export default function AddCar({addCars}) {
    const [openAddcars, setAddcars] = useState(false);


    return (
        <ScrollView style={styles.fullscren} >
        <View >
            <Formik initialValues={{name:'', power:'', obiem:'',img:'',price:'',probeg:'',year:'',color:'',opisanie:'',hozyain:''}}  onSubmit={(values) => {addCars(values);}}>
                {(props)=> (
                    <View style={styles.forms}>

                        <TextInput value={props.values.name}
                                   placeholder='Полное название авто'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('name')}
                                   style={styles.input}
                        />
                        <TextInput value={props.values.price}
                                   placeholder='Цена'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('price')}
                                   style={styles.input}/>

                        <TextInput value={props.values.power}
                                   placeholder='Мощность(л.с.)'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('power')}
                                   style={styles.input}/>
                        <TextInput value={props.values.img}
                                   placeholder='Введите ссылку на фото'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('img')}
                                   style={styles.input}/>
                        <TextInput value={props.values.year}
                                   placeholder='Год выпуска'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('year')}
                                   style={styles.input}/>
                        <TextInput value={props.values.obiem}
                                   placeholder='Объём двигателя'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('obiem')}
                                   style={styles.input}/>
                        <TextInput value={props.values.probeg}
                                   placeholder='Пробег'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('probeg')}
                                   style={styles.input}/>
                        <TextInput value={props.values.color}
                                   placeholder='Цвет'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('color')}
                                   style={styles.input}/>
                        <TextInput value={props.values.hozyain}
                                   placeholder='Владелец'
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('hozyain')}
                                   style={styles.input}/>
                        <TextInput value={props.values.opisanie}
                                   placeholder='Описание'
                                   multiline
                                   placeholderTextColor={'silver'}
                                   onChangeText={props.handleChange('opisanie')}
                                   style={styles.bigInput}/>
                        <TouchableOpacity onPress={props.handleSubmit}
                                          style={styles.adding}>
                            <Text style={styles.textInbut}>Опубликовать объявление</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>

            </View>
            <View style={styles.fake}></View>
        </ScrollView>

    );
}
const styles = StyleSheet.create({
    forms:{
        borderStyle:'solid',
        borderWidth:1,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:'5%',
        borderRadius:15,
        width:'95%',
        height:'auto',
        backgroundColor:'#C1B5A8',

    },
    fullscren:{

            backgroundColor:'#17181B',
            width:'100%',
            height:'100%',
    },
    fake:{
        height:200,
    },
    bigInput:{
        height: '8%',
        width:'80%',
        backgroundColor:'#fff',
        borderColor:'#C1B5A8',
        margin: 12,
        marginRight:'auto',
        marginLeft:'auto',
        marginBottom:10,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
    },
    input:{
        backgroundColor:'#fff',
        borderColor:'#C1B5A8',
        height: '6%',
        width:'80%',
        margin: 12,
        marginRight:'auto',
        marginLeft:'auto',
        marginBottom:10,
        borderWidth: 1,
        padding: 10,
        borderRadius:15,
    },
    adding:{
        width: '63%',
        height:'6%',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:15,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:5,
        backgroundColor:'#17181B',
    },
    textInbut:{
        marginRight:'auto',
        marginLeft:'auto',
        fontSize:18,
        marginBottom:'auto',
        marginTop:'auto',
        color:'#fff',
    },

});