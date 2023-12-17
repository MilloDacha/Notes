import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    function onClickHandler() {
        props.delete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.heading}</h1>
            <p>{props.content}</p>
            <button onClick={onClickHandler}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;