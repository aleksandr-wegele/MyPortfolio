import React from "react";
import styles from "../styles/Summary.module.scss"

function Summary () {
    return (
        <div className={styles.wrap_summary}> 
                    <div className={styles.summary}>
                        <div className={styles.summaty_gruplink}>
                            <a href='file/Александр_Вегеле_Junior_Frontend-разработчик.pdf' download className={styles.summaty_gruplink_link}>&lt; Cкачать &gt;</a>
                            <a href='http://d.zaix.ru/wkwn.pdf' target='_blanc' className={styles.summaty_gruplink_link}>&lt; Печать &gt;</a>
                        </div>
                        <div className={styles.summary_content}>
                            <div className={styles.about}>
                                <h2 className={styles.summary_content_title}>Обо мне:</h2>
                                <p className={styles.summary_content_description}>Ищу работу Junior Frontend разработчиком (React). Ранее увлекался разработкой и администрированием 
                                сайтов для игровых сообществ в качестве хобби. Начал дополнительно обучаться самостоятельно в марте 2022 года, сейчас хочу продолжить развитие в IT-сфере.
                                </p><br />
                                <p className={styles.summary_content_description}>Проекты, реализованные в процессе обучения, можно посмотреть на сайте, а также по ссылке 
                                на GitHub. Можно посмотреть код и финальный результат - к проектам добавлены ссылки на репозитории и деплой. 
                                </p><br />
                                <p className={styles.summary_content_description}>Мой предыдущий профессиональный опыт - работа в продажах, у меня хорошо развиты 
                                soft-skills. Я умею находить подход к разным людям и выстраивать с ними коммуникацию, не допуская конфликтных ситуаций, комфортно 
                                чувствую себя в команде. Я умею быстро обучаться и погружаться в большой объем информации - у меня был опыт успешной быстрой адаптации 
                                к новой сфере деятельности (лизинговые проекты).
                                </p>
                            </div>

                            <div className={styles.skills}>
                            <h2 className={styles.summary_content_title}>Профессиональные навыки:</h2>
                            <div className={styles.summary_content_skills}>
                                <p className={styles.summary_content_skills_item}><strong className={styles.bold}>React: </strong> компоненты, Props и State, жизненные циклы компонентов, условная отрисовка, работа с Document Object Model, React Hook, работа с local/session storage, работа со сторонними библиотеками, fetch-запросы. Axios. React Router. UseContext. ChakraUI. MUI. Bootstrap.</p>
                                <p className={styles.summary_content_skills_item}><strong className={styles.bold}>JavaScript: </strong> синтаксис и базовые конструкции, работа с Document Object Model, работа с библиотекой jQuery.</p>
                                <p className={styles.summary_content_skills_item}><strong className={styles.bold}>HTML5: </strong> семантические элементы, адаптивная верстка, формы и валидация, доступность.</p>
                                <p className={styles.summary_content_skills_item}><strong className={styles.bold}>CSS3 / SCSS: </strong> float, grid, flexbox, блочная модель, отображение, позиционирование, отзывчивый дизайн, media запросы, методология БЭМ.</p>
                                <p className={styles.summary_content_skills_item}><strong className={styles.bold}>Базовые технические знания: </strong> HTTP, HTTPS, принципы работы браузера, DNS.</p>
                                <p className={styles.summary_content_skills_item}><strong className={styles.bold}>Английский язык: </strong> базовое знание языка (на уровне чтения и понимания технической документации), сейчас активно изучаю</p>
                            </div>
                            </div>
                            <div className={styles.education}>
                            <h2 className={styles.summary_content_title}>Образование:</h2>
                            <p className={styles.summary_content_description}>Инженер технологических средств, СГТУ им. Гагарина, 2016.</p>
                            <p className={styles.summary_content_description}>Релевантное обучение:</p>
                            <ul className={styles.summary_content_description_list}>
                                <li className={styles.summary_content_description_list_item}>Cамостоятельное изучение технической документации языков (HTML, CSS, JS, React)</li>
                                <li className={styles.summary_content_description_list_item}>Изучение общедоступных материалов и курсов на YouTube по выбранным технологиям</li>
                                <li className={styles.summary_content_description_list_item}>Материалы базовых курсов HTML Academy (Профессиональная верстка сайтов, Адаптивная верстка и автоматизация)</li>
                                <li className={styles.summary_content_description_list_item}>Материалы курса Skillbox (Профессия Frontend разработчик с 0 до PRO)</li>
                                <li className={styles.summary_content_description_list_item}>Материалы курса Нетология (Frontend-разработчик. Полный курс. 2021)</li>
                            </ul>
                            <p className={styles.summary_content_description}>Продолжаю активное самостоятельное обучение в направлении Frontend.</p>
                            </div>

                            <div className={styles.work}>
                            <h2 className={styles.summary_content_title}>Профессиональный опыт:</h2>
                            <p className={styles.summary_content_description}>2022 - настоящее время Самостоятельное обучение и практика по направлению Frontend.</p>
                            <p className={styles.summary_content_description}>Реализованные проекты:</p>
                            <ul className={styles.summary_content_description_list}>
                                <li className={styles.summary_content_description_list_item}>Верстка макета. <a href='https://github.com/aleksandr-wegele/skillbox-course-project-Evklid' target="_blank" rel="noopener noreferrer">Репозиторий</a></li>
                                <li className={styles.summary_content_description_list_item}>Онлайн-магазин. <a href='https://aleksandr-wegele.github.io/react-shop/' target="_blank" rel="noopener noreferrer">Demo</a> <a href='https://github.com/aleksandr-wegele/react-shop' target="_blank" rel="noopener noreferrer">репозиторий</a></li>
                                <li className={styles.summary_content_description_list_item}>Кино-портал. <a href='https://aleksandr-wegele.github.io/react-app/' target="_blank" rel="noopener noreferrer">Demo</a> <a href='https://github.com/aleksandr-wegele/react-app' target="_blank" rel="noopener noreferrer">репозиторий</a></li>
                                <li className={styles.summary_content_description_list_item}>Сайт-портфолио. <a href='https://aleksandr-wegele.github.io/MyPortfolio/' target="_blank" rel="noopener noreferrer">Demo</a> <a href='https://github.com/aleksandr-wegele/MyPortfolio' target="_blank" rel="noopener noreferrer">репозиторий</a></li>
                            </ul>
                            <p className={styles.summary_content_description}>2021-2022 – Менеджер по лизингу (ГК Интерлизинг)</p>
                            <p className={styles.summary_content_description}>2016-2021 – Менеджер по продажам легковых автомобилей</p>   
                            <p className={styles.summary_content_description}>2014-2016 – Менеджер по продажам</p>
                            </div>
                        </div>
                    
                </div>
            </div>
    )
}

export default Summary