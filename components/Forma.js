import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, Button, Alert, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {globalStyle} from '../Styles/styles';
import {Formik} from "formik";
import {getActionFromState} from "@react-navigation/native";
import {useState} from "react";

export default function Forma({addNews}) {
    const [modalOpen, setModalOpen]=useState(false);


    return (
        <View style={styles.forms}>
          <Formik initialValues={{name:'', anons:'', full:'',img:''}}  onSubmit={(values) => {addNews(values);}}>
              {(props)=> (
                  <View>

                     <TextInput value={props.values.name}
                                placeholder='Ваше название'
                                placeholderTextColor={'silver'}
                                onChangeText={props.handleChange('name')}
                                style={styles.input}
                                />
                      <TextInput value={props.values.img}
                                 placeholder='Ваша ссылка на фото'
                                 placeholderTextColor={'silver'}
                                 onChangeText={props.handleChange('img')}
                                 style={styles.input}/>

                      <TextInput value={props.values.anons}
                                 placeholder='Ваш анонс...'
                                 placeholderTextColor={'silver'}
                                 multiline
                                 onChangeText={props.handleChange('anons')}
                                 style={styles.bigInput}/>
                      <TextInput value={props.values.full}
                                 multiline
                                 placeholder='Ваша статья...'
                                 placeholderTextColor={'silver'}
                                 onChangeText={props.handleChange('full')}
                                 style={styles.bigInput}/>

                      <TouchableOpacity onPress={props.handleSubmit}
                      style={styles.adding}>
                          <Text style={styles.textInbut}>Опубликовать новость</Text>
                      </TouchableOpacity>
                  </View>
              )}
          </Formik>
        </View>

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
    height:'70%',
    backgroundColor:'#C1B5A8',

},
    bigInput:{
        height: '20%',
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
        height: '12%',
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
        height:'12%',
        borderWidth:1,
        borderStyle:'solid',
        borderRadius:15,
        marginRight:'auto',
        marginLeft:'auto',
        marginTop:'auto',
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