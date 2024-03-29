import React,{useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const[text,setText]=useState("");
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
    const handleTextClear=()=>{
        let newText="";
        setText(newText);
    }
    const handleCopyText=()=>{
        var copyText = document.getElementById("exampleFormControlTextarea1");
        copyText.select();
        // copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
    }

    return (
        <>
        <div className="container">
            <h1 className={`text-${props.mode==='light'?'dark':'light'} mb-3`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="exampleFormControlTextarea1"
                    rows="8"
                ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick} >Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick} >Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleTextClear} >Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopyText} >Copy Text</button>
        </div>
        <div className="container my-4 ">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Text Summary</h1>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}> Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split("").length} characters in it.</p>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}> {0.008 * text.split(" ").filter((element)=>{return element===" "}).length} Minutes to read the complete text</p>
            <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview Text</h2>
            <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").filter((element)=>{return element===" "}).length>0 ? text : "Nothing to Preview"}</p>
        </div>
        </>
    );
}
TextForm.propTypes = {
    heading: PropTypes.string,
    mode:PropTypes.string
};
