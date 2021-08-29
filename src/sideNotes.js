import React from "react";
import "./App.css";
const SideNotes = ({ notes }) => {
  console.log(notes, "notes");

  return (
    <div className="sideBar">
      <div className="side-bar-notes">
        <ul>
          {notes.map((note) => (
            <li className="side" key={Number(note.id)}>
              <h4>{note.title} </h4>
              <p>{note.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideNotes;
