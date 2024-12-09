import React,{useState} from 'react'
export default function TextForm1(props) {
    console.log(props)
   const [text, setText] = useState('');

   const handleUpClick = ()=>{
        //console.log ("Uppercase was clicked" + text);//
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "success")
   }
   const handleLoClick = ()=>{
    //console.log ("Uppercase was clicked" + text);//
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!", "success")
}
const handleClearClick = ()=>{
   // console.log ("Uppercase was clicked" + text);//
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared !", "success")
}
    const handleOnChange = (event)=>{
        //console.log ("On change");//
        setText(event.target.value);
        
    }
    const handaleCopy =()=>{
        // var text = document.getElementById("myBox");
        // text.select('');
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard !", "success")
    }
    const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText (newText.join(" "))
   props.showAlert("Extra Spaces removed!", "success")
   
    }

    return (
        <>
        <div className="container" style ={{color: props.mode === "dark" ? "white" : "light pink"}}>
        
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange = {handleOnChange} style ={{backgroundColor: props.mode === "dark" ? "grey" : "white",color:props.mode === "dark" ? "white" : "#3f426a"}}id="myBox" rows="8"></textarea>
            </div>
            
            <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handaleCopy}>Copy text</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            
            
            
        </div>
        <div className="container my-3" style ={{color: props.mode === "dark" ? "white" : "#3f426a"}}>
         <h2>Your text summary</h2>
         <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
         <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
         <h2>preview </h2>
         <p>{text.length>0?text:"Nothing to preview!"}</p>
         

        </div>
        </>
    )
}
