import './App.css';
import React, {Component} from 'react';
import {connect} from "react-redux";
import Board from "./components/CardList/Board";


class App extends Component {

    render() {

        return (

            <div className={'app-wrapper'}>
                <div className={'app-wrapper-content'}>
                    {/*<Header/>*/}
                    <Board state={this.props.store}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state.game
    }),
    dispatch => ({})
)(App);