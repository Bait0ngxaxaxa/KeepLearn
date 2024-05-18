import React , {useState} from "react";

function BodyTodo (){

    const [name , setName] = useState([""]);
    const [show , setShow] = useState(["homework","Exercise"]);

    function actionInput (event){
        const inputname = event.target.value
        setName(inputname);
    }

    function actionClick(){
        setShow((prev)=>{
            return [...prev,name]
        })
        setName("")
    }
    return(
        <div>
            {show.map((item)=>{
                return <div className="block-show">{item}</div>
            })}
            <input onChange={actionInput} type="text" value={name} name="input" />
            <button className="btn" onClick={actionClick}>Click to Add</button>
        </div>
    )
}

export default BodyTodo;