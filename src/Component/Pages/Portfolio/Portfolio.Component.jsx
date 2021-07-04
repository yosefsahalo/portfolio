import React, { useState } from 'react'
import './Portfolio.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';



function Portfolio() {

const [infro, setInfro] = useState();

    return (
        <div>
            <div className="cardPortfolioId">
                <div className="portParhId">
                    פרויקט סיום של  Css ו-Html,
                    שבו הצגנו לכיתה את היכולות שלנו בשימוש עיקרי של
                    Grid, Flex ו-Media Queries. <br />
                    CSS Grid הוא מערכת דו מימדית המאפשרת יצירת עימוד מבוסס Grid. המטרה לשמה נוצר היא להקל עלינו ליצור Layouts וממשקי משתמש מורכבים, עם כמה שפחות סרבול בקוד.
                    שימוש עיקרי נוסף בפרויקט הוא -Flex, <br />
                    Flexbox מספקת מענה מצויין ליצירת מתווה, לבטח כשמדובר על מתווה חד מימדי, כלומר או שורה או עמודה.<br />
                    השתמשנו ב-Media Queries בכדי לעשות את האתר שלנו רספונסיבי כדי שיכול להתאים לגדלים שונים של מסכים.

                    <div className="iconsLinls">
                        <div className="textHover"><a href="https://yosefsahalo.github.io/projectHS/" target="blanc"><LanguageIcon /> :Link To</a><span className="spanHover">Web-Page</span></div>
                        <div className="textHover"><a href="https://github.com/yosefsahalo/projectHS" target="blanc"><GitHubIcon /> :Link To</a><span className="spanHover">GitHub</span></div>
                    </div>
                </div>
                <img className="portfolioImg" src="images/weeb1.png" alt="" />
            </div>

            <div className="cardPortfolioId">
                <img className="portfolioImg" src="images/weeb2.png" alt="" />
                <div className="portParhId">
                    פרויקט דף דמות שנעשה על ידי שימוש ב-Html ו-Css פשוט מאוד, בשביל לתרגל שימוש ב-Semantic Tags. <br />
                    <p className="pPortfolioId"> •	שימוש בתגית של-Header על מנת ליצור כותרת ראשית לדף דמות</p>
                    <p className="pPortfolioId"> •	שימוש בתגית של-Footer על מנת ליצור סוף לדף דמות</p>
                    <p className="pPortfolioId"> •	שימוש בתגית של-Section ו-Article על מנת ליצור תוכן לדף דמות</p>
                    <div className="iconsLinls">
                        <div className="textHover"><a href="https://yosefsahalo.github.io/luffy/" target="blanc"><LanguageIcon /> :Link To</a><span className="spanHover">Web-Page</span></div>
                        <div className="textHover"><a href="https://github.com/yosefsahalo/luffy" target="blanc" ><GitHubIcon /> :Link To</a><span className="spanHover">GitHub</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;