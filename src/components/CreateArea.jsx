import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [titleNote, setTitleNote] = useState({
    Title: "",
    Content: ""
  });

  function handleChange(event) {
      const { name, value } = event.target;
      // console.log(name,value);

    setTitleNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event){
      // console.log(titleNote);
      props.addButton(titleNote);
      event.preventDefault();

      setTitleNote({Title:"",Content:""});
  }

  function handlExpand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded &&
          <input
          name="Title"
          placeholder="Title"
          onChange={handleChange}
          value={titleNote.Title}
        />
        }
        <textarea
          name="Content"
          placeholder="Take a note..."
          onClick={handlExpand}
          rows={isExpanded? "3":"1"}
          onChange={handleChange}
          value={titleNote.Content}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={handleSubmit}><AddIcon /></Fab>

        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
