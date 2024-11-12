import { useState } from "react";
import cardsStyles from '../../styles/cards.module.css';

export default function CardReadMore({ defaultExpanded, readMoreButton, moreText }) {
    let [ expanded, setExpanded ] = useState(defaultExpanded);

    function handelReadMoreClick(e) {
        setExpanded(expanded == true ? false : true);
        console.log(expanded);
    }

    return (
        <div>
            <button onClick={handelReadMoreClick}>{ readMoreButton }</button>
            <div className={ expanded ? '' : cardsStyles.hide }>
                <p>{ moreText}</p>
            </div>
        </div>
    )
}