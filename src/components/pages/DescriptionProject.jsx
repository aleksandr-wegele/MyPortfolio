import React from "react"
import { Link } from "react-router-dom";
import styles from "../styles/ProjectDescription.module.scss"


function DescriptionProject(props) {
    const stackArr = props.location.state.stack;
    const stackItem = stackArr.map((stackArr) => <div className={styles.project__description_stack_grup_item}>{stackArr}</div>)

    const technologyArr = props.location.state.technology;
    const technologyItem = technologyArr.map((technologyArr) => <li className={styles.project__description_technology_list_item}>{technologyArr}</li>);

    const realizArr = props.location.state.realiz;
    const realizItem = realizArr.map((realizArr) => <li className={styles.project__description_realiz_list_item}>{realizArr}</li>);

    return(
        <div className={styles.project__wrap}>
            <div className={styles.project__description_headdedr}>
                <Link to='/' className={styles.project__description_headdedr_link}>&lt; Back</Link>
                <Link to='/project' className={styles.project__description_headdedr_link_mobile}>&lt; Back</Link>
                <div className={styles.project__description_headdedr_linkgrup}>
                    <a className={styles.project__description_headdedr_linkgrup_link} href={props.location.state.repositories} target="_blank" rel="noopener noreferrer">&lt; Репозиторий &gt;</a> 
                    <a className={styles.project__description_headdedr_linkgrup_link} href={props.location.state.deploy} target="_blank" rel="noopener noreferrer">&lt; Demo &gt;</a>  
                </div>
            </div>
        <div className={styles.project__description}>
                <h2 className={styles.project__description_title}>{props.location.state.title}</h2>
                <div className={styles.project__description_content}>
                    <p className={styles.project__description_text}>{props.location.state.task}</p>
                    <div className={styles.project__description_content_grup}>
                        <img src={props.location.state.poster} alt="poster" className={styles.project__description_img}/>
                        <div className={styles.project__description_stack}>
                            <p className={styles.project__description_stack_headding}>Cтэк:</p>
                            <div className={styles.project__description_stack_grup}>
                                {stackItem}
                            </div>
                        </div>
                        <div className={styles.project__description_technology}>
                            <p className={styles.project__description_technology_headding}>Инструменты:</p>
                            <ul className={styles.project__description_technology_list}>
                            {technologyItem}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.project__description_realiz}>
                        <p className={styles.project__description_realiz_headding}>Реализованные функции:</p>
                        <ul className={styles.project__description_realiz_list}>{realizItem}</ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DescriptionProject