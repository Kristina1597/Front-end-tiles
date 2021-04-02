import generateCards from '../components/common/generateCards';

const FLIP_CARD = "FLIP_CARD";
const COMPARE_CARDS = "COMPARE_CARDS";

let initialState = {
    isComparing: false,
    isAllCardsMatched: false,
    matchingCards: [],
    matchedCards: [],
    cards: generateCards(),
};

const gameReducer = (state = initialState, action) => {

    let getIndex = (id) => {
        for (let i = 0; i < state.cards.length; i++) {
            if (id === state.cards[i].id) {
                return i;
            }
        }
    };

    switch (action.type) {
        case FLIP_CARD: {
            let index = getIndex(action.cardId);
            if (state.matchingCards.length < 2) {
                state.matchingCards.push(state.cards[index]);
                state.cards[index].isFlipped = true;
                if (state.matchingCards.length === 2) {
                    state.isComparing = true;
                }
            }
            return {
                ...state,
                ...state.isComparing,
                ...state.matchingCards,
                ...state.cards
            }
        }
        case COMPARE_CARDS: {

            if (state.isComparing) {
                let card1 = state.matchingCards[0];
                let card2 = state.matchingCards[1];
                let index1 = getIndex(card1.id);
                let index2 = getIndex(card2.id);

                if (card1.cardName === card2.cardName) {
                    state.cards[index1].isMatched = true;
                    state.cards[index2].isMatched = true;
                    state.matchedCards.push(card1, card2);
                    state.matchingCards = [];
                    if (state.matchedCards.length === 16) {
                        state.isAllCardsMatched = true;
                    }
                } else {
                    state.cards[index1].isFlipped = false;
                    state.cards[index2].isFlipped = false;
                    state.matchingCards = [];
                }
                state.isComparing = false;
                setTimeout(()=>{},5000)
                console.log('compare ' + state.isComparing);
                // return {
                //     ...state,
                //     ...state.isComparing,
                //     ...state.matchingCards,
                //     ...state.cards.values
                // }
            }

                return {
                        ...state,
                        ...state.isComparing,
                        ...state.matchingCards,
                        ...state.cards
                }



        }
        default:
            return state;

    }
};


export const flipCardActionCreator = (cardId) => ({type: FLIP_CARD, cardId});
export const compareCardActionCreator = () => ({type: COMPARE_CARDS});

export default gameReducer;