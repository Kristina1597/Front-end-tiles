import Card from "./CardListItem/Card";
import React from 'react';
import style from './CardList.module.css'
import {connect} from "react-redux";
import {compareCardActionCreator, flipCardActionCreator} from "../../redux/gameReducer";

class Board extends React.Component {

    render() {

        return (<div className={style.board_container}>
                {
                    this.props.isAllCardsMatched ?
                    <div className={style.board_header}>
                        You won!
                    </div>
                    : this.props.cards.map((c) => <Card key={c.id}
                                                        id={c.id}
                                                        cardName={c.cardName}
                                                        isFlipped={c.isFlipped}
                                                        isMatched={c.isMatched}
                                                        isComparing={this.props.isComparing}
                                                        img={c.img}
                                                        flipCard={this.props.flipCard}
                                                        compareCards={this.props.compareCards}/>)}

            </div>
        )


    }
}

let mapStateToProps = (state) => ({
    cards: state.game.cards,
    isAllCardsMatched: state.game.isAllCardsMatched,
    matchedCards: state.game.matchedCards
});

let mapDispatchToProps = (dispatch) => {

    return {
        flipCard: (cardId) => {
            dispatch(flipCardActionCreator(cardId));
        },
        compareCards: () => {
            dispatch(compareCardActionCreator());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
