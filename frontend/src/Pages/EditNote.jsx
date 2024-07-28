import React, { useEffect, useState } from "react";
import Backbutton from "../components/Backbutton";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5500/notes/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setCategory(res.data.category);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    const data = {
      title,
      category,
      description,
    };
    axios
      .put(`http://localhost:5500/notes/${id}`, data)
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
        <h1 className="font-bold text-2xl">EDIT NOTES</h1>
        <div className="flex flex-col w-[50%] max-md:w-[90%] bg-white min-h-[50vh] mt-10 rounded-3xl px-10 py-12 gap-10 shadow-2xl">
          <div className="w-[100%] flex">
            <label className="min-w-[20%] max-md:min-w-[25%] flex items-center">
              Title :{" "}
            </label>
            <input
              type="text"
              className="bg-slate-300 min-w-[80%] px-2 py-1 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="w-full flex">
            <label className="min-w-[20%] max-md:min-w-[25%] flex items-center">
              Category :{" "}
            </label>
            <input
              type="text"
              className="bg-slate-300 min-w-[80%] px-2 py-1 rounded-lg"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full flex">
            <label className="min-w-[20%] max-md:min-w-[25%] flex items-center">
              Description :{" "}
            </label>
            <input
              type="text"
              className="bg-slate-300 min-w-[80%] px-2 py-1 rounded-lg"
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

export default EditNote;
