import style from './Tile.module.css'
import backImage from '../../../assets/images/back-side-tile.png'
import cn from "classnames";
import React from "react";

const Tile = (props) => {

    let onFlipCard = () => {
        props.isMatching
            ? props.onOpeningCard(props.id)
            : props.flipCard(props.id);
    };

    return <div className={style.card_container}>
        <div className={cn(style.card, {[style.card_flipped]: props.isFlipped, [style.card_closed]: !props.isFlipped})}
             onClick={props.isComparing || props.isMatched || props.isFlipped
                 ? null
                 : onFlipCard}>
            <img className={cn(style.card_img, {[style.card_img_dissapeared]: props.isMatched})}
                 src={props.isFlipped || (props.isMatched && props.isFlipped)
                     ? props.img
                     : backImage}
                 alt={'tile'}/>
        </div>
    </div>
};

export default Tile;