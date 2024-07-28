import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/notes")
      .then((res) => {
        setNotes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-screen h-screen pt-[75px] flex  flex-col items-center">
      <div className="w-[45%] max-md:w-[90%] max-md:scale-90 bg-white h-min mt-10 py-4 px-5 rounded-full flex justify-between shadow-xl">
        <button className="bg-sky-300 px-2 py-1 rounded-full">All Notes</button>
        <Link to="/addNotes">
          <button className="bg-slate-300 px-2 py-1 rounded-full">
            + Add Notes
          </button>
        </Link>
      </div>
      <div className="flex w-screen p-10 justify-center">
        <div className="grid gap-5 grid-flow-row grid-cols-4 max-md:grid-cols-1 w-full">
          {notes.map((note) => {
            return (
              <div className="bg-white rounded-xl w-[100%]">
                <div className="bg-sky-300 px-2 py-2 rounded-t-xl flex justify-between">
                  <h1 className="font-bold text-xl">{note.title}</h1>
                  <h1>{note.category}</h1>
                </div>
                <div className="px-2 py-2 min-h-[100px] relative">
                  <h1 className="text-xl">{note.description}</h1>
                  <h1 className="text-sm">
                    {new Date(note.createdAt).toString().slice(0, 15)}
                  </h1>
                  <Link to={`/deleteNote/${note._id}`}>
                    <button className="bg-slate-400 text-white absolute bottom-2 left-2 px-2 rounded-xl">
                      Delete
                    </button>
                  </Link>
                  <Link to={`/ViewNote/${note._id}`}>
                    <button className="bg-slate-500 text-white absolute bottom-2 left-[45%] px-2 rounded-xl">
                      View
                    </button>
                  </Link>
                  <Link to={`/editNotes/${note._id}`}>
                    <button className="bg-sky-300 absolute bottom-2 right-2 px-2 rounded-xl">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
