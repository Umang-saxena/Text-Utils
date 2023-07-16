import React,{useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const[text,setText]=useState("Enter your text here");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);

    }
    const handleOnChange=(event)=>{
        setText(event.target.value); //Always an event object is returned and we write this so that we are able to changed valueof this text area of the text hat we have entered
    }
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="exampleFormControlTextarea1"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to Lowercase</button>
        </div>
        <div className="container my-4">
            <h1>Text Summary</h1>
            <p> Your text has {text.split(" ").length} words and {text.length} characters in it.</p>
            <p> {0.008 * text.split(" ").length} Minutes to read the complete text</p>
            <h2>Preview Text</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
TextForm.propTypes = {
    heading: PropTypes.string,
};
