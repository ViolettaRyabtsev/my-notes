import React from "react";
import "./App.css";
const SideNotes = ({ notes }) => {
  return (
    <div className="sideBar">
      <div>
        <h2>notes</h2>
      </div>
      <div className="side-bar-notes">
        {notes.map((note) => (
          <div className="side-bar-note">
            <div className="side-bar-title">
              <strong> {note.title}</strong>
              {/* <button onClick={deleteNote}>delete</button> */}
            </div>
            <p> {note.body && note.body.substring(0, 100) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideNotes;
