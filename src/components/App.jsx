import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setNotes]=useState([]);
        // {
        //     title:"Note title",
        //     content:"Note content"
        // }
    

    function handleAdd(note){
        console.log(note);
        setNotes(prevValue => {
            return [...notes,note];
        });
    }

    function handleDelete(id){
        console.log("called");
        setNotes(prevValue => {
            return prevValue.filter((item,index) =>{
                return id!==index;
            })
        })
    }
  return (
    <div>
      <Header />
      <CreateArea 
        addButton={handleAdd}
      />
      {notes.map((note,index) => {
        return (<Note 
            key={index}
            id={index}
            title={note.Title}
            content={note.Content}
            addDel={handleDelete}
        />);
      })}
      <Note 
        title="Note title"
        content="Note content"
      />
      <Footer />
    </div>
  );
}

export default App;
