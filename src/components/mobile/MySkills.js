import React from 'react'

import styles from './styles/MySkills.module.scss'

function MySkills() {

  return (
    <div className={styles.wrap}>
        <div className={styles.leftBar__info_skils}>
          <h3 className={styles.leftBar__info_skils_title}>My skills:</h3>
          <ul className={styles.leftBar__info_skils_list}>
              <li className={styles.leftBar__info_skils_list_item}>
                  <img src="/img/reacticon.png" alt='icon' className={styles.leftBar__info_skils_img} />
                  - React
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                  <img src="/img/jsicon.png" alt='icon' className={styles.leftBar__info_skils_img} />
                  - JavaScript
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                  <img src="/img/htmlicon.png" alt='icon' className={styles.leftBar__info_skils_img} />
                  - HTML
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                  <img src="/img/cssicon.png" alt='icon' className={styles.leftBar__info_skils_img} />
                  - CSS
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                  <img src="/img/sassicon.png" alt='icon' className={styles.leftBar__info_skils_img} />
                  - SASS
              </li>
              <li className={styles.leftBar__info_skils_list_item}>
                  <img src="/img/githubicon.png" alt='icon' className={styles.leftBar__info_skils_img} />
                  - Git
              </li>
          </ul>
      </div>
        <div className={styles.leftBar__info_btngroup}>
              <a href="https://t.me/wegele_alex" target="_blank" rel="noopener noreferrer" className={styles.leftBar__info_btngroup_contact}>Message</a>
          </div>
    </div>
        
  );
}

export default MySkills;