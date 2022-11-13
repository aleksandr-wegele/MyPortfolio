import React from "react";
import styles from "../styles/ItemProject.module.scss";
import { Link } from 'react-router-dom';

function ItemProject({
    id,
    title,
    posterFull,
    poster,
    technology,
    stack,
    task,
    realiz,
    deploy,
    repositories
}) {

    const stackArr = stack;
    const stackItem = stackArr.map((stackArr) => <div className={styles.item__container_content_stack_item}>{stackArr}</div>); 

    const technologyArr = technology;
    const technologyItem = technologyArr.map((technologyArr) => <li className={styles.item__container_content_technology_list_item}>{technologyArr}</li>);
    
    return(
        <div className={styles.wrap_item}>
            <div className={styles.item__container_content_header}>
                <h2 className={styles.item__container_content_headding}>{title}</h2>
                <div className={styles.item__container_content_linkgrup}>
                    <Link to={{
                        pathname: `/MyPortfolio/project/${title}`,
                        state: { 
                        id,
                        title,
                        posterFull,
                        poster,
                        technology,
                        stack,
                        task,
                        realiz,
                        deploy,
                        repositories
                    },
                    }} className={styles.item__container_content_linkgrup_link}>&lt; Подробнее &gt;</Link>
                    <a className={styles.item__container_content_linkgrup_link} href={deploy} target="_blank" rel="noopener noreferrer">&lt; Demo &gt;</a>
                </div>
            </div>
            
                <div className={styles.item__container_content}>
                    <p className={styles.item__container_content_description}>{task}</p>
                    <div className={styles.item__container_content_grup}>
                        <img src={poster} alt="" className={styles.item__container_img}/>
                        <div className={styles.item__container_content_stack}>
                            <p className={styles.item__container_content_stack_headding}>Cтэк:</p>
                            <div className={styles.item__container_content_stack_grup}>
                            {stackItem}
                            </div>
                        </div>
                        <div className={styles.item__container_content_technology}>
                            <p className={styles.item__container_content_technology_headding}>Инструменты:</p>
                            <ul className={styles.item__container_content_technology_list}>
                            {technologyItem}
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ItemProject