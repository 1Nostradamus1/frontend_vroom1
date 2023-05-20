import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    Button,
    Alert,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    Modal
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {globalStyle} from '../Styles/styles';
import {useState} from "react";
import {Fontisto} from '@expo/vector-icons';
import addCar from "./addCar";
import AddCar from "./addCar";
import { Entypo } from '@expo/vector-icons';


export default function Main({navigation}) {
    const loadScreen = () => {
        navigation.navigate('News');

    }
    const loadOb= () => {
        navigation.navigate('thisObyavlenie');

    }
    const [dataOB, setDataOB ] = useState([
        { name: 'Mercedes-Benz E63 AMG',price:'10 000 000',probeg:'35 419', power:'600',obiem:'5.5',year:'2019',color:'черный',img:'https://a.d-cd.net/2KAAAgGQF-A-1920.jpg',opisanie:'Не бит не крашен, лучшая машина в мире',key:'1',hozyain:'Рощев Константин' },
        { name: 'Ford Mustang 2015',price:' 3 500 000',probeg:'95 469', power:'350',obiem:'3.2',year:'2016',color:'красный',img:'https://s1.auto.drom.ru/photo/Xkv9OJDoV3Ncy8XwvlxBh9qgWf7twSGRO4Vt1icaNotfQYBk2zom3uT59ePHRx3cG8rGe0hxd_HD0odut4jDjT3YB-Du.jpg',opisanie:'Битый но не сломленный, просто показываю',key:'2',hozyain:'Голуб Сёма' },
        { name: 'ВАЗ 2107',price:'70 543',probeg:'425 610', power:'70',obiem:'0.8',year:'1985',color:'белый',img:'https://s1.auto.drom.ru/photo/8IrAzmamtp1Vekr674ePGeIFxTBu0OJVvmGVPrdfqWYYw1Q83jzNsuvEBubxkPC5fnvFI-f-Q95CzS43ICuyR17RGKBT.jpg',opisanie:'Боевая классика, цена за стоимость',key:'3',hozyain:'Боевой классик' },
        { name: 'Toyota Camry',price:'4 000 000',probeg:'64 316', power:'249',obiem:'3.5',year:'2020',color:'белый',img:'https://www.allcarz.ru/wp-content/uploads/2021/07/foto-camry-v70-cveta_10.jpg',opisanie:'Любви достойна только мать и камри 3.5',key:'4',hozyain:'Какой-то чел' },
    ]);
    const [openAddcars, setAddcars]=useState(false);
    const addCars = (newCar) => {
        setDataOB((massiv) => {
            newCar.key = Math.random().toString();
            return [
                newCar,
                ...massiv
            ]
        })
        setAddcars(false);
    }

    return (
        <View style={styles.fullscreen}>
            <View style={styles.head}>

                <View style={styles.icon}>
                <Entypo name="news" size={40} color="white" onPress={loadScreen} />

                </View>
                <View style={styles.icon}>
                <MaterialIcons name="post-add" size={50} color="white"  onPress={() => setAddcars(true)}/>
                </View>
            </View>

            <Modal visible={openAddcars}>

                <View style={styles.forma}>
                    <SafeAreaView style={styles.pictureSlide}>
                        <View >
                            <Fontisto name="close-a" size={25} color="white" onPress={() => setAddcars(false)}/>
                        </View>
                        <Text style={styles.textModul}>Создайте своё объявление!</Text>
                    </SafeAreaView>

                    <AddCar addCars={addCars}/>
                </View>
            </Modal>
            <FlatList data={dataOB} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('thisObyavlenie',item)}>
                    <View style={styles.NewFull}>
                        <Image source={{
                            uri: item.img
                        }} style={styles.img}
                        />
                        <Text style={styles.name}>{ item.name }</Text>
                        <View style={styles.Obstyle}>
                            <Text style={styles.textInOb}>{ item.price }</Text>
                            <Text style={styles.textSuport}>р</Text>
                        <Text style={styles.textInOb}>{ item.power }</Text>
                            <Text style={styles.textSuport}>л.с.</Text>
                        <Text style={styles.textInOb}>{ item.obiem }</Text>
                            <Text style={styles.textSuport}>л.</Text>
                        <Text style={styles.textInOb}>{ item.color }</Text>
                        <Text style={styles.textInOb}>{ item.year }</Text>
                            <Text style={styles.textSuport}>г.</Text>
                    </View>
                    </View>
                </TouchableOpacity>
            )}/>
        </View>

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
            backgroundColor:'#22232C',
            width:'100%',
            height:'8%',
            flexDirection:'row',


        },
        img:{
            width:'95%',
            height:200,
            marginLeft:'auto',
            marginRight:'auto',
            borderRadius: 5,
            marginTop:8,

        },

        item:{
            width: '100%',
            marginBottom: 30,
            marginRight:10,


        },
        name:{
            fontSize:20,
            marginLeft:10,

            color:'#fff',
            marginTop:3,
        },
        Obstyle:{
            flexDirection:'row',
            marginTop:5,
        },
        textInOb:{
            color:'white',
            marginLeft:10,
            fontSize:13,
        },
        textSuport:{
            color:'white',
            fontSize:13,
        },
        NewFull:{
            width:'95%',

            borderRadius:15,
            backgroundColor:'#22232C',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:5,
        },
        textModul:{
            fontSize:18,
            marginLeft:'auto',
            marginRight:'auto',

            color:'#fff',
        },
        sizeModul:{
            borderStyle:'solid',
            borderWidth:1,
            borderRadius:10,
        },
        forma: {
            backgroundColor: '#17181B',
            width: '100%',
            height: '100%',
        },
        pictureSlide:{
            marginTop:20,
            flexDirection:'row',
            },
        icon:{
            marginTop:'auto',
            marginBottom:'auto',
            marginRight:20,

        },
        huita:{
            color:'white',
        }


});



