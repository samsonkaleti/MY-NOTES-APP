import React from 'react'
import './index.css' 


const Model = ({isVisible,onClose,inputText,setInputText,saveHandler}) => {
  if (!isVisible) return null  
  const handelClose = (e) => {
    if (e.target.id === 'close') onClose()
    
  } 

  const handelInputData = (e) => {
    
      const name = e.target.name;
      const value = e.target.value;


    setInputText({...inputText,[name] : value})
  }
  return (
    <div onClick={handelClose} id="close" className=" modelContainer">
      <div className="buttonContainer">
        <button
          onClick={() => onClose()}
          className=" closeButton"
        >
          &times;
        </button>
        <div className="formContainer">
          <div className=" inputContainer flex flex-col p-4 justify-around   ">
            <input
              onChange={handelInputData}
              value={inputText.title}
              className="rounded-md p-2 mb-2 outline-none border-2 border-red-200 hover:border-red-300"
              type="text"
              name="title"
              id=""
              placeholder="Add Title"
            />
            <textarea
              onChange={handelInputData}
              value={inputText.description}
              className="resize-none rounded-md p-2 mb-2 border-2 outline-none border-green-200 hover:border-green-300"
              name="description"
              id=""
              placeholder="Add Description"
              cols="20"
              rows="7"
            ></textarea>
            <input
              onChange={handelInputData}
              value={inputText.url}
              className="rounded-md p-2 mb-2 outline-none border-2 border-yellow-200 hover:border-yellow-300"
              type="url"
              name="url"
              placeholder="Add Url "
              id=""
            />
            <div className="mt-2">
              <button
                onClick={saveHandler}
                className="py-2 px-2 rounded-md w-20 font-semiboldbold cursor-pointer bg-green-300 hover:bg-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model
