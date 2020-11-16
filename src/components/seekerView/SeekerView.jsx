import React from 'react';
import { Link } from 'react-router-dom';
import SeekerChooseCategory from '../seekerChooseCategory/SeekerChooseCategory';
import cafeImg from './img/cafe.png'
import cleanImg from './img/clean.png'
import constructionWorkerImg from './img/constructionWork.png'
import eventImg from './img/event.png'
import officeAssistantImg from './img/officeAssistant.png'
import styles from './seekerView.module.css'

const SeekerView = () => {
    const category = {
        카페 : cafeImg,
        청소 : cleanImg,
        건설 : constructionWorkerImg,
        행사 : eventImg,
        사무보조 : officeAssistantImg,
    }
    return(
        <div>
            <div className={styles.category}>
            {Object.entries(category).map(([name,value])=>(
                <Link to={`/seekerView/${name}`}><SeekerChooseCategory name={name} value={value} /></Link>
            ))}
            </div>
        </div>
    )
}

export default SeekerView;