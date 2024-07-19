import React, { useEffect } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";
const Form = () => {
    const [country, setCountry] = useStase('');
    const [street, setStreet] = useStase('');
    const [subject, setSubject] = useStase('phusical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, [])

    useEffect(() => {
        if(!street || !country){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show()
        }
    }, [country, street])
    const onChangeCounty = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
  return (
    <div className={'form'}>
      <h3>Введите ваши данные</h3>
      <input className={"input"} type="text" placeholder={"Страна"} value={country} onChange={onChangeCounty} />
      <input className={"input"} type="text" placeholder={"Улица"} value={street} onChange={onChangeStreet}/>
      <select className={'select'} value={subject} onChange={onChangeSubject}>
        <option value={'phusical'}>Физ. Лицо</option>
        <option value={'legal'}>Юр. Лицо</option>
      </select>
    </div>
  );
};

export default Form;
