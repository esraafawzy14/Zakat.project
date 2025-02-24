import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";


export default function Zkfitr() {
    const [price, setPrice] = useState(0);
    const [person, setPerson] = useState(0);
    const [total, setTotal] = useState(0);
    const [total1, setTotal1] = useState(0);
    const priceChange = (event) => {
        setPrice(event.target.value);
    };
        const personChange = (event) => {
            setPerson(event.target.value);
        };
        const calculateTotal = () => {
            setTotal(price * person);
        };
        const calculateTotal1 = () => {
            setTotal1( person * 3);
        };
        
        return (
            <div className="zk-container">
            <div className="zk-fitr">
            <h2 className="zk-fitr1">زكاة الفطر</h2>
            <p className="zk2">يجب إخراج زكاة الفطر من لحظة غروب الشمس في آخر يوم من رمضان وحتى خروج الناس إلى صلاة عيد الفطر صباح اليوم التالي،
                 فإن تأخرت عن ذلك فهي صدقة من الصدقات العادية. ويجوز تقديم إخراجها قبل حلول العيد بيوم أو يومين.</p>
           <p>الصاع يقدر بحوالي ثلاثة كيلو من قوت البلد مثل القمح أوالأرز أو الشعير...</p>      
    <div className="zk-inputs">
            <input type="number" min="1"  value={person || ""} onChange={personChange} placeholder="عدد أفراد الاسرة" />
            <input type="number" min="1" value={price || ""} onChange={priceChange} placeholder="قيمة صاع من قوت البلد" />
           </div>
    <div className="zk-button">
            <button className="zk-btn1" onClick={calculateTotal}>حساب الزكاة نقدًا</button>
            <h3>الزكاة: {total + " جنيه مصري"}</h3>
            <button className="zk-btn1" onClick={calculateTotal1}>حساب الكمية المطلوبة من الطعام</button>
            <h3>الزكاة: {total1 + " كيلو من القوت المراد إخراجه"  }</h3>
            <p>مع استحباب الزيادة عن هذا المبلغ  أو القدر لمن أراد</p>

            </div>
            </div>
            </div>
        );
    }
