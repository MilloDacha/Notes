import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    let [noteList, setNoteList] = React.useState([]);
    function addToList(titleValue,contentValue) {
        let listObject = {
            title: titleValue,
            content: contentValue,
        };
        setNoteList((preValue)=>{
            return [...preValue,listObject];
        });
    }
    function deleteNote(id) {
        setNoteList((preValue)=>{
            return preValue.filter((element,index)=>{
                return index!==id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea 
                onAdd = {addToList}
            />
            {noteList.map((element, index)=>{
                return <Note key={index} id={index} heading={element.title} content={element.content} delete={deleteNote}/>
            })}
            <Footer />
        </div>
    );
}

export default App;