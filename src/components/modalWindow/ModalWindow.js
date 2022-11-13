import React from "react"
import { Link } from "react-router-dom";

import styles from "../styles/ModalWindow.module.scss"


import AppContext from "../../AppContext"

function ModalWindow() {

const {setProjectOpened, itemsWindow, isLoading} = React.useContext(AppContext);
const onClickClose = () => {
    setProjectOpened(false)
}
    return(
       <div className={styles.overlay_window}> 
            <div className={styles.window}>
                <div className={styles.window_head}>
                    <h2 className={styles.window_head_headding}>Проекты</h2>
                    <img src="img/close.png" alt="close" className={styles.window_head_close} onClick={onClickClose}/>
                </div>
                <div className={styles.window_content}>
                    {isLoading ? (<div>...Loading</div>) : (itemsWindow.map((item, index) => {
                        return( 
                            <div className={styles.window_content_item}>
                                <h3 className={styles.window_content_item_headding}>{item.title}</h3>
                                <img className={styles.window_content_item_img} src={item.poster} alt="project"/>
                                <div  className={styles.window_content_item_gruppLink}>
                                   <Link to={{
                                    pathname: `/MyPortfolio/project/${item.title}`,
                                    state: { 
                                      id: item.id, 
                                      title: item.title, 
                                      poster: item.poster,
                                      technology: item.technology,
                                      description: item.description_full,
                                      stack: item.stack,
                                      task: item.description_task,
                                      realiz: item.description_realiz,
                                      deploy: item.deploy,
                                      repositories: item.repositories,
                                    },
                                   }} className={styles.window_content_item_Link} onClick={onClickClose}>&lt;Подробнее&gt;</Link>
                                    <div className={styles.window_content_item_Link}><a href={item.deploy} className={styles.window_content_item_Link} target="_blank" rel="noopener noreferrer">&lt;Demo&gt;</a></div>
                                </div>
                            </div>
                        )
                    }))}
                    
                </div>
            </div>
        </div>
        
    )
}

export default ModalWindow
