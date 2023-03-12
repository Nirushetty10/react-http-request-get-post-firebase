import React, { useState } from "react";
import "./form.css";

function Form(props) {
  let [movieName, setMovieName] = useState("");
  let [collection, setCollection] = useState(0);
  let [actor, setActor] = useState("");
  let [warning , setWarning] = useState(false)
  let [warningMsg , setWarningMsg] = useState("")

  let movieNameHandler = (e) => {
    setMovieName(e.target.value);
  };
  let collectionHandler = (e) => {
    setCollection(e.target.value);
  };
  let actorHandler = (e) => {
    setActor(e.target.value);
  };
  let submitHandler =(e)=> {
    e.preventDefault()
    if(movieName.length < 1) {
        setWarningMsg("Movie name cannot be empty")
        setWarning(true)
        return;
    }
    if(collection < 1) {
        setWarningMsg("Invalid collection")
        setWarning(true)
        return;
    }
    if(collection <0) {
        setWarningMsg("Invalid collection")
        setWarning(true)
        return;
    }
    if(actor.length < 1) {
        setWarningMsg("Provide proper actor name")
        setWarning(true)
        return;
    }
  props.onSubmitForm({
    moviename : movieName,
    collection : collection,
    actor : actor
  })

    
  }

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="MovieName">Movie Name</label>
        <input type="text" id="MovieName" onChange={movieNameHandler} />
        <label htmlFor="collection">Movie Collection</label>
        <input type="text" id="collection" onChange={collectionHandler}/>
        <label htmlFor="Actor">Actor</label> 
        <input type="text" id="Actor" onChange={actorHandler}/>
        {warning && <p>{warningMsg}</p>}
        <button>Submit</button>
      </form>
    </div>
  ); 
}

export default Form;
