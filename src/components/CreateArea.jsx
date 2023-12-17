import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    let [noteDetails, setNoteDetails] = React.useState({
        title: "",
        content: "",
    });
    let [expansion, setExpansion] = React.useState({
        isClicked: false,
        contentAreaHeightRows: 1,
    });

    function onChangeHandler(event) {
        let {name, value} = event.target;
        setNoteDetails((preValue)=>{
            return ({
                ...preValue,
                [name]: value,
            });
        });
    }
    function onSubmitHandler(event){
        props.onAdd(noteDetails.title, noteDetails.content);
        setNoteDetails({
            title: "",
            content: "",
        });
        event.preventDefault();
    }
    function onClickHandler() {
        setExpansion({
            isClicked: true,
            contentAreaHeightRows: 3,
        });
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="create-note">
                <Zoom in={expansion.isClicked}>
                    <input 
                        name="title" placeholder="Title" onChange={onChangeHandler} 
                        value={noteDetails.title} style={!expansion.isClicked && {display: "none"}}     
                    />
                </Zoom>
                <textarea 
                    name="content" placeholder="Take a note..." 
                    rows={expansion.contentAreaHeightRows} onChange={onChangeHandler} 
                    value={noteDetails.content} onClick={onClickHandler}
                />
                <Zoom in={expansion.isClicked}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
  );
}

export default CreateArea;