import React from 'react';
import { StyleSheet, Image } from 'react-native';

import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Search from "../components/Search";
import FilmDetail from "../components/FilmDetail";
import Favorites from '../components/Favorites';
import Test from '../components/Test';
import TestAnimated from "../components/TestAnimated";


const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const FavoriteStackNavigator = createStackNavigator({
    Favorites:{
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris'
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const MoviesTabNavigator = createBottomTabNavigator({
  /*  Test: {
        screen: Test
    },
    TestAnimated: {
        screen: TestAnimated
    },
    */
    Search:{
        screen: SearchStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                source={require('../images/ic_search.png')}
                style={styles.icon}
                />
            }
        }
    },
    Favorites: {
        screen: FavoriteStackNavigator,
        navigationOptions: {
            tabBarIcon: () => {
                return <Image
                    source={require('../images/ic_favorite.png')}
                    style={styles.icon}
                />
            }
        }
    }
}, {
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF'
    }
})

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)
