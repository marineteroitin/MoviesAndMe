import React from 'react';
import {StyleSheet, View, Button, Text, TextInput, FlatList, ActivityIndicator} from "react-native";
import films from '../helpers/FilmData';
import FilmItem from './FilmItem';
import {getFilmsFromApiWithSearchedText} from "../API/TMDBAPI";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
        }
        this.searchedText = "" // pas dans state sinon appel API à chaque caractère saisie
    }


    _loadFilms(){
        this.setState({isLoading: true}) // Lancement du chargement
        if(this.searchedText.length > 0) {
            getFilmsFromApiWithSearchedText(this.searchedText)
                .then(data => this.setState({
                    films: data.results,
                    isLoading: false // Arrêt du chargement
                }));
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                    {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()}
                />
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Search;
