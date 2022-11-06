import React from 'react'

import styles from './styles/LeftBar.module.scss'

function LeftBar() {
  

  return (
    <div className={styles.leftBar__wrap}>
        <section className={styles.leftBar__info}>
            <div className={styles.leftBar__info_photo}>
                <img className={styles.leftBar__info_photo_img} src='/img/avatar.png' alt='Avatar'/>
            </div>
            <div className={styles.leftBar__info_about_my}>
                <h2 className={styles.leftBar__info_name}>Александр Вегеле</h2>
                <h3 className={styles.leftBar__info_jobTitle}>front-end разработчик</h3>
                <div className={styles.leftBar__info_linkContacts}>
                  <a href="https://t.me/wegele_alex" target="_blank" className={styles.leftBar__info_linkContacts_link}>
                    <img src='/img/telegram.png' alt='Telegram' className={styles.leftBar__info_linkContacts_img}/>
                  </a>

                  <a href="https://github.com/aleksandr-wegele" target="_blank" className={styles.leftBar__info_linkContacts_link}>
                    <img src='/img/git.png' alt='GitHub' className={styles.leftBar__info_linkContacts_img}/>
                  </a>
                  
                  <a href="https://ru.linkedin.com/" target="_blank" className={styles.leftBar__info_linkContacts_link}>
                    <img src='/img/linkedin.png' alt='Linkedin' className={styles.leftBar__info_linkContacts_img}/>
                  </a> 
                </div>
            </div>
        </section>
        <section className={styles.leftBar__info_about}>
            <p className={styles.leftBar__info_about_description}>Сайт рыбатекст поможет дизайнеру, верстальщику, 
            вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке</p>
        </section>
        <div className={styles.leftBar__info_btngroup}>
            <button className={styles.leftBar__info_btngroup_project}>Проекты</button>
            <button className={styles.leftBar__info_btngroup_contact}>Резюме</button>
        </div>
    </div>
  );
}

export default LeftBar;
