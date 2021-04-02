import style from './CardListItem.module.css'
import backImage from './../../../assets/images/back.png'
import cn from "classnames";


const Card = (props) => {

    let onFlipCard = () => {
        props.flipCard(props.id);

        setTimeout(props.compareCards, 1000);
    };

    return <div className={style.card_container}>
        <div className={cn(style.card, {[style.card_flipped]: props.isFlipped, [style.card_closed]: !props.isFlipped})}
             onClick={!props.isMatched ? onFlipCard : null}>
            <img className={style.card_img}
                 src={props.isFlipped || (props.isMatched && props.isFlipped) ? props.img : backImage}/>
        </div>
    </div>
};

export default Card;