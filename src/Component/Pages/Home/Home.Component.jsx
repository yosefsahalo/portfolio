import React from 'react'
import './Home.css';

function Home() {
    return (
        <div>
            <img id="topicImg" src="https://i.ytimg.com/vi/DzJydpUTKOw/maxresdefault.jpg" alt="" />

            <div id="divId">
                <p className="pargraphIdChild"> •	מפתח תוכנה Full-Stack בשפות: C#, Dot.Net Java-Script, Html, CSS, Type-Script, React.</p>

                <p className="pargraphIdChild"> •	בעל ניסיון צבאי בתפקידים שדורשים יכולת פיקוד ועבודה בצוות, יכולת לימוד עצמי והשקעה מרובה.</p>

                <p className="pargraphIdChild"> •	בעל מוסר עבודה גבוה, תודעת שירות, ממוקד מטרה ויכולת הגדלת ראש.</p>

            </div>

            <div className="card">
                <p className="cardPargraph">
                    פרזנטציה שמסבירה על המושג-Repaint.
                    בעצם Repaint כפי שהשם מרמז, צביעה מחדש הוא הצגת  אלמנט  מחדש על גבי
                    המסך לאחר שינוי הנראות של האלמנט.
                    דוגמה ל-Repaint אנחנו יכולים לראות בריאקט, בכל פעם שהמצב של האפליקצייה משתנה ריאקט יוצרת את כל הדום הוירטואלי מאפס, נוצרת תמונה של כל הקוד שמחזיק בתוכו את כל האלמנטים בקוד האפליקציה.
                    יצירת עץ אובייקטים בשיטה הזו היא מהירה מאוד ולכן אין השפעה על הביצועים שלנו.
                </p>
                <img className="images" src="images/me1.jpeg" alt="" />
            </div>

            <div className="card">
                <img className="images" src="https://miro.medium.com/max/1400/1*75nN-waKq4dTL_f0o-_DBQ.jpeg" alt="" />
                {/* <img className="images" src="images/me2.jpeg" alt="" /> */}
                <p className="cardPargraph">
                    העברת פרזננטציה על ה-useLayoutEffect וההבדל בינו לבין ה-useEffect.
                    השימוש ב-useEffect ו-useLayoutEffect הוא כמעט זהה,
                    והחתימה שלהם אותו דבר, הכוונה שהם נכתבות אותו דבר ומבצעות את אותה פעולה.
                    השינוי בא לידי ביטוי בקריאה לפונקציה, כאשר אנחנו קוראים ל-useEffect היא תעלה אחרי ה-DOM ואחרי הדפדפן מה שנותן למשתמש את היכולת לגלוש באתר ללא צורך בהמתנה שהקוד שלנו יעלה, לעומת זאת כאשר אנחנו קוראים ל-useLayoutEffect היא תעלה אחרי ה-DOM אבל לפני הדפדפן ותגרום למשתמש להמתין עד שהקוד שלנו יעלה, לכן אנחנו נעדיף להשתמש לרוב ב-useEffect
                </p>
            </div>
        </div>
    )
}

export default Home;