import React from 'react'
import {useTheme} from '../hooks/useTheme'
import styles from './styles/AboutMobile.module.scss'


function AboutMobile() {

  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
   if (theme === 'light') {
     setTheme('dark');
   } else {
     setTheme('light');
   }
 };

  return (
    <div className={styles.leftBar__wrap}>
      <div className={styles.toggle_theme_btn} onClick={toggleTheme}></div>
        <div className={styles.leftBar__info}>
            <div className={styles.leftBar__info_photo}>
                <img className={styles.leftBar__info_photo_img} src='img/avatar.jpg' alt='Avatar'/>
            </div>
            <div className={styles.leftBar__info_about_my}>
                <h2 className={styles.leftBar__info_name}>Александр Вегеле</h2>
                <h3 className={styles.leftBar__info_jobTitle}>front-end разработчик</h3>
                <div className={styles.leftBar__info_linkContacts}>
                  <a href="https://t.me/wegele_alex" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_linkContacts_link}>
                    <img src='img/telegram.png' alt='Telegram' className={styles.leftBar__info_linkContacts_img}/>
                  </a>

                  <a href="https://github.com/aleksandr-wegele" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_linkContacts_link}>
                    <img src='img/git.png' alt='GitHub' className={styles.leftBar__info_linkContacts_img}/>
                  </a>
                  
                  <a href="https://rostov.hh.ru/resume/03e9457eff0b55bb620039ed1f34436b574444?hhtmFrom=resume_list" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_linkContacts_link}>
                    <img src='img/hh.png' alt='hh.ru' className={styles.leftBar__info_linkContacts_img}/>
                  </a> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default AboutMobile;