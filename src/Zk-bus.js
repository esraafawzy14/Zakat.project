import React, { useState} from "react";
import "./Main.css";

export default function Zkbus() {
    const [money1, setMoney1] = useState(0); //البضائع الموجودة
    const [money2, setMoney2] = useState(0); //النقد المتوفر
    const [money3, setMoney3] = useState(0); //الديون المرجوة
    const [money4, setMoney4] = useState(0); //الديون المستحقة
    const [gold, setGold] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    const [total, setTotal] = useState("0 جنيه مصري");

    const money1Change = (event) => {
        setMoney1(event.target.value);
    };
    
    const money2Change = (event) => {
        setMoney2(event.target.value);
    };
    
    const money3Change = (event) => {
        setMoney3(event.target.value);
    };
    
    const money4Change = (event) => {
        setMoney4(event.target.value);
    };

    const goldChange = (event) => {
        setGold(event.target.value);
    };
    
    function calculateTotal() {
        const totalMoney = (money1) + (money2) + (money3) - (money4);
    }

    function calculateTotal2() {
        let nisab = 85 * gold;
        if (totalMoney >= nisab) {
            setTotal(totalMoney * 0.025);
        } else {
            setTotal("لا زكاة عليك");
        }
    }

    return (
        <div className="zk-container">
            <div className="zk-money">
                <h2 className="zk-fitr1">زكاة التجارة</h2>
                <p className="zk2">
                زكاة التجارة تُفرض على السلع المعدّة للبيع إذا بلغت قيمتها 85 جرامًا من الذهب أو ما يعادلها، ومر عليها عام هجري كامل. تُحسب الزكاة بجمع قيمة البضائع بسعر السوق الحالي، مع النقدية والديون المرجوة، ثم خصم الديون المستحقة، ويُخرج 2.5% من الناتج كزكاة سنوية.
                </p>
                <div className="zk-inputs"> 
                    <input type="number" value={money1 || ""} onChange={money1Change} placeholder="البضائع الموجودة"/>
                    <input type="number" value={money2 || ""} onChange={money2Change} placeholder="النقد المتوفر"/>
                    </div>
                <div className="zk-inputs">
                    <input type="number" value={money3 || ""} onChange={money3Change} placeholder="الديون المرجوة"/>
                    <input type="number" value={money4 || ""} onChange={money4Change} placeholder="الديون المستحقة"/>
                </div>
                <div className="zk-inputs">
                    <input type="number" value={gold || ""} onChange={goldChange} placeholder="سعر جرام الذهب اليوم" />
                    </div>
                    <div className="zk-button">
                        <button className="zk-btn1" onClick={calculateTotal2}>حساب الزكاة</button>
                        <h3>الزكاة: {total}</h3>
                </div>
            </div>
        </div>
    );
}
