import Tile from "./Tile/Tile";
import React from 'react';
import style from './Board.module.css'
import {connect} from "react-redux";
import {flipCardActionCreator, initComparing} from "../../redux/gameReducer";

class Board extends React.Component {

    onOpeningCard = (cardId) => {
        this.props.initComparing(cardId);
    };

    render() {

        return (<div className={style.board_container}>
                {
                    this.props.isAllCardsMatched ?
                        <div className={style.board_header}>
                            You won!
                        </div>
                        : this.props.cards.map((c) => <Tile key={c.id}
                                                            id={c.id}
                                                            cardName={c.cardName}
                                                            isFlipped={c.isFlipped}
                                                            isMatched={c.isMatched}
                                                            isMatching={this.props.isMatching}
                                                            isComparing={this.props.isComparing}
                                                            img={c.img}
                                                            flipCard={this.props.flipCard}
                                                            onOpeningCard={this.onOpeningCard}/>)}

            </div>
        )


    }
}

let mapStateToProps = (state) => ({
    isComparing: state.game.isComparing,
    isMatching: state.game.isMatching,
    cards: state.game.cards,
    isAllCardsMatched: state.game.isAllCardsMatched,
    matchedCards: state.game.matchedCards
});

let mapDispatchToProps = (dispatch) => {
    return {
        flipCard: (cardId) => {
            dispatch(flipCardActionCreator(cardId));
        },
        initComparing: (cardId) => {
            dispatch(initComparing(cardId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
