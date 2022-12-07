import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handlelowclick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
  }
    const handleOnChange=(event)=>{
        // console.log("on change"); 
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-2">
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>convert_to_Uppercase</button>
      <button className="btn btn-primary" onClick={handlelowclick}>convert_to_Lowercase</button>
    </div>
  );
}
 