import React, { useEffect, useState } from "react";
import "./home.css";
import Model from "../model/Model";
import { v4 as uuidV4 } from "uuid";
import NoteDetails from "../noteDetails/NoteDetails"; 
import { IoAdd } from "react-icons/io5"; 
import Msg from '../msg/Msg'

const Home = () => {
  const [modelShow, setModelShow] = useState(false);
  const [notes, setNotes] = useState([])
  const [edit, setEdit] = useState(null)
  const [searchQuery, setSearchQuery] = useState("");
  const [inputText, setInputText] = useState([
    {
      title: "",
      description: "",
      url: "",
    },
  ]);


 


  const saveHandler = () => {
    const { title, description, url } = inputText
    const date = new Date()
    const NewList = {
      id: uuidV4(),
      title: title,
      description: description,
      url: url,
      date: date.toLocaleDateString(),
    };


    const NewNotes = [...notes, NewList]
    setNotes(NewNotes)
    setInputText({
      title: '',
      description: '',
      url: ""
    })

    setModelShow(false)

  }




  useEffect(() => {



    const storedData = localStorage.getItem("Notes");
    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setNotes(data);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }

  }, [])

  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes))

  }, [notes]) 

  const EditHandler = (id, title, url, description) => {
    setEdit(id)
    setInputText({ title, url, description })
    setModelShow(true)
  } 

  const DeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    window.localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  }; 


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  }; 

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );




  return (
    <div className="HomeContainer">
      <input
        type="text"
        name="search"
        id=""
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-bar"
      />


      {filteredNotes.length === 0 ? (
        <Msg/>
      )
        :
        (
          filteredNotes.map(each => (
            edit === each.id ? (<Model
              isVisible={modelShow}
              inputText={inputText}
              setInputText={setInputText}
              saveHandler={saveHandler}
              onClose={() => setModelShow(false)}
            />) : (
            
              <NoteDetails key={each.id} data={each} EditHandler={EditHandler} DeleteHandler={DeleteHandler} />
            )


          ))
        )
      }




      <div className="footingContainer">
        <button className="addButton" onClick={() => setModelShow(true)}>
          Add Notes <IoAdd />
        </button>
      </div>
      <Model
        isVisible={modelShow}
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
        onClose={() => setModelShow(false)}
      />
    </div>
  );
};

export default Home;
