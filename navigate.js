import React from "react";
import Main from "./components/main";
import News from "./components/news";
import ThisNews from "./components/thisNews";
import ThisObyavlenie from "./components/thisObyavlenie";
import {StyleSheet} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                {
                    title:'Vroom.ru',
                    headerStyle:{
                        backgroundColor:'#22232C',
                        height:75,
                        borderColor:'#22232C',
                    },
                    headerTitleStyle:{
                        color:'#fff',




                    }

                }

            }
            />
            <Stack.Screen
                name="News"
                component={News}
                options={
                {
                    title:'Новости',
                    headerStyle:{
                        backgroundColor:'#22232C',
                        height:75,
                    },
                    headerTitleStyle:{
                        color:'#fff',

                    },

                }
            }
            />
            <Stack.Screen
                name="thisNews"
                component={ThisNews}
                options={
                {
                    title:'Статья',

                    headerStyle:{
                        backgroundColor:'#22232C',
                        height:75,
                    },
                    headerTitleStyle:{
                        color:'#fff',

                    },
                }

            }
                />
            <Stack.Screen
                name="thisObyavlenie"
                component={ThisObyavlenie}
                options={
                    {
                        title:'Объявление',

                        headerStyle:{
                            backgroundColor:'#22232C',
                            height:75,
                        },
                        headerTitleStyle:{
                            color:'#fff',

                        },
                    }

                }
            />

        </Stack.Navigator>
    </NavigationContainer>;
}
