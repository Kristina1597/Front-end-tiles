import img0 from './../../assets/images/0.jpg';
import img1 from './../../assets/images/1.jpg';
import img2 from './../../assets/images/2.jpg';
import img3 from './../../assets/images/3.jpg';
import img4 from './../../assets/images/4.jpg';
import img5 from './../../assets/images/5.jpg';
import img6 from './../../assets/images/6.jpg';
import img7 from './../../assets/images/7.jpg';

let cards;

const images = [img0, img1, img2, img3, img4, img5, img6, img7];

//generate 8 cards
function generateCards() {
    cards = [];
    for (let i = 0; i < 8; i++) {
        cards.push({
            id: i,
            cardName: `card${i}`,
            isFlipped: false,
            isMatched: false,
            img: images[i]
        });
    }
    for (let j = 0; j < 8; j++) {
        cards.push({
            id: j + 8,
            cardName: `card${j}`,
            isFlipped: false,
            isMatched: false,
            img: images[j]
        });
    }
    shuffle(cards);


    return Array.from(Object.values(cards));

}


//add 8 matching cards to 'cards' array and run a shuffle function
function shuffle(card) {
    for (let i = card.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [card[i - 1], card[j]] = [card[j], card[i - 1]];
    }
}


// function changeId(arr) {
//     for (let z = 0; z < arr.length; z++) {
//         console.log(arr[z].id);
//         arr[z].id = z;
//         console.log(arr[z].id);
//     }
//     return arr
// }

// function addId(arr1) {
//
//     for (let i = 0; i < arrCards.length; i++) {
//
//         arr1[i].id = i;
//         console.log(arr1[i].id);
//     }
//     return arr1;
// }

export default generateCards;