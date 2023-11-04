import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was Clicked")
        let newText = text.toUpperCase();

        setText(newText)
    }


    const handleOnChange = (event) => {
        console.log("Value is Changed")
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter text here");
    //setText("New Text")

    
    return (

        <div className="container my-4 col-md-9">
            <h1 className='fst-cursive'>{props.heading}</h1>
            <div className="form-floating">
                <textarea className="form-control height" onChange={handleOnChange} value={text} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div>
    )
}
