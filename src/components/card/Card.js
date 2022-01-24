import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'

import styles from "./card.module.css"
function Card({title,date,category}){
    return(
        <>
            <div className={styles.card}>
                <h4>
                    {title || "Lorem Ipsum"}
                </h4>
                <div className={styles.infoContainer}>
                    <div className={styles.infos}>
                        Published: {date || "-"}
                    </div>
                    <div className={styles.infos}>
                        Category: {category || "-"}
                    </div>
                    <div className={styles.button}>
                        View more
                        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
                    </div>
                    <div className="vl"></div>

                </div>


            </div>

        </>
    );
}
export default Card;