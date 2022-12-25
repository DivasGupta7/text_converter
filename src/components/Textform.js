import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
  };
  const handlecopy = () => {
    var copyText = document.getElementById("mybox");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
  };
  const handleremove = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          convert_to_Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowclick}>
          convert_to_Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleremove}>
          Remove extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h3>Text-Summary</h3>
        <p>
          {text.split(" ").length} Words & {text.length} characters
        </p>
        <h4>Preveiw</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
