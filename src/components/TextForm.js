import React,{useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const[text,setText]=useState("Enter your text here");
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);

    }
    const handleOnChange=(event)=>{
        console.log("Text area changed");
        setText(event.target.value); //Always an event object is returned and we write this so that we are able to changed valueof this text area of the text hat we have entered
    }
    return (
        <div>
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
        </div>
    );
}
TextForm.propTypes = {
    heading: PropTypes.string,
};
