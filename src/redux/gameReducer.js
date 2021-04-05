import generateCards from '../components/common/generateCards';

const FLIP_CARD = "FLIP_CARD";
const COMPARE_CARDS = "COMPARE_CARDS";

let initialState = {
    isComparing: false,
    isMatching: false,
    isAllCardsMatched: false,
    matchingCards: [],
    matchedCards: [],
    cards: generateCards(),
};

const gameReducer = (state = initialState, action) => {

    let getIndex = (id) => {
        return state.cards
            .findIndex((value) => value.id === id);
    };

    switch (action.type) {

        case FLIP_CARD: {

            let index = getIndex(action.cardId);

            state.matchingCards.push(state.cards[index]);
            state.cards[index].isFlipped = true;

            (state.matchingCards.length === 1) && (state.isMatching = true);

            (state.matchingCards.length === 2) && (state.isComparing = true);

            return {
                ...state,
                matchingCards: [...state.matchingCards],
                cards: [...state.cards]
            }

        }

        case COMPARE_CARDS: {

            let [card1, card2] = [state.matchingCards[0], state.matchingCards[1]];
            let [index1, index2] = [getIndex(card1.id), getIndex(card2.id)];

            if (card1.cardName === card2.cardName) {
                state.cards[index1].isMatched = true;
                state.cards[index2].isMatched = true;
                state.matchingCards = [];
                state.matchedCards.push(card1, card2);
                (state.matchedCards.length === 16) && (state.isAllCardsMatched = true);
            } else {
                state.matchingCards = [];
                state.cards[index1].isFlipped = false;
                state.cards[index2].isFlipped = false;
            }

            state.isComparing = false;
            state.isMatching = false;

            return {
                ...state,
                matchingCards: [...state.matchingCards],
                cards: [...state.cards]
            }

        }

        default:
            return state;
    }
};

export const compareCards = (cardId) => ({type: COMPARE_CARDS, cardId});

export const initComparing = (cardId) => {
    return async (dispatch) => {
        dispatch(flipCardActionCreator(cardId));

        let startComparing = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        };

        await startComparing(500);
        await dispatch(compareCards(cardId));
    }
};

export const flipCardActionCreator = (cardId) => ({type: FLIP_CARD, cardId});

export default gameReducer;