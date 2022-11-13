import React from 'react'
import AppContext from '../AppContext';

import styles from './styles/LeftBar.module.scss'

function LeftBar() {
  
const {onClickProject} = React.useContext(AppContext)

  return (
    <div className={styles.leftBar__wrap}>
        <div className={styles.leftBar__info}>
            <div className={styles.leftBar__info_photo}>
                <img className={styles.leftBar__info_photo_img} src='/img/avatar.jpg' alt='Avatar'/>
            </div>
            <div className={styles.leftBar__info_about_my}>
                <h2 className={styles.leftBar__info_name}>Александр Вегеле</h2>
                <h3 className={styles.leftBar__info_jobTitle}>front-end разработчик</h3>
                <div className={styles.leftBar__info_linkContacts}>
                  <a href="https://t.me/wegele_alex" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_linkContacts_link}>
                    <img src='/img/telegram.png' alt='Telegram' className={styles.leftBar__info_linkContacts_img}/>
                  </a>

                  <a href="https://github.com/aleksandr-wegele" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_linkContacts_link}>
                    <img src='/img/git.png' alt='GitHub' className={styles.leftBar__info_linkContacts_img}/>
                  </a>
                  
                  <a href="https://rostov.hh.ru/resume/03e9457eff0b55bb620039ed1f34436b574444?hhtmFrom=resume_list" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_linkContacts_link}>
                    <img src='/img/hh.png' alt='hh.ru' className={styles.leftBar__info_linkContacts_img}/>
                  </a> 
                </div>
            </div>
        </div>
        <div className={styles.leftBar__info_skils}>
            <h3 className={styles.leftBar__info_skils_title}>My skills:</h3>
            <ul className={styles.leftBar__info_skils_list}>
              <li className={styles.leftBar__info_skils_list_item}>
                <img src="/img/reacticon.png" alt='icon' className={styles.leftBar__info_skils_img}/>
                 - React
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                <img src="/img/jsicon.png" alt='icon' className={styles.leftBar__info_skils_img}/>
                 - JavaScript
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                <img src="/img/htmlicon.png" alt='icon' className={styles.leftBar__info_skils_img}/>
                 - HTML
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                <img src="/img/cssicon.png" alt='icon' className={styles.leftBar__info_skils_img}/>
                 - CSS
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                <img src="/img/sassicon.png" alt='icon' className={styles.leftBar__info_skils_img}/>
                 - SASS
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                <img src="/img/githubicon.png" alt='icon' className={styles.leftBar__info_skils_img}/>
                - Git
              </li>
            </ul>
        </div>
        <div className={styles.leftBar__info_btngroup}>
            <button className={styles.leftBar__info_btngroup_project} onClick={onClickProject}>Проекты</button>
            <a href="https://t.me/wegele_alex" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_btngroup_contact}>Message</a>
        </div>
    </div>
  );
}

export default LeftBar;
