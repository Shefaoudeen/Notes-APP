import React, { useState } from "react";
import Backbutton from "../components/Backbutton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNotes = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = () => {
    const data = {
      title,
      category,
      description,
    };
    axios
      .post("http://localhost:5500/notes", data)
      .then(() => {
        console.log("success");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-slate-200 w-screen h-screen pt-[75px]">
      <div className="pl-5 pt-5">
        <Backbutton />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">ADD NOTES</h1>
        <div className="flex flex-col w-[50%] bg-white min-h-[50vh] mt-10 rounded-3xl px-10 py-12 gap-10 shadow-2xl">
          <div className="w-[100%] flex">
            <label className="min-w-[20%]">Title : </label>
            <input
              type="text"
              className="bg-slate-300 min-w-[80%]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full flex">
            <label className="min-w-[20%]">Category : </label>
            <input
              type="text"
              className="bg-slate-300 min-w-[80%]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full flex">
            <label className="min-w-[20%]">Description : </label>
            <input
              type="text"
              className="bg-slate-300 min-w-[80%]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-sky-300 px-4 py-2 rounded-xl"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotes;
