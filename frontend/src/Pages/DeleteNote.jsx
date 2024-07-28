import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";

const DeleteNote = () => {
  const { id } = useParams();
  const navigate = useNavigate("");
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5500/notes/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-slate-200 h-screen flex justify-center items-center">
      <div className="absolute left-4 top-20 pt-5">
        <Backbutton />
      </div>
      <div className="flex flex-col gap-12 justify-center items-center">
        <h1 className="text-3xl max-md:text-lg">
          Are You sure want to delete this note ?
        </h1>
        <button
          onClick={handleDelete}
          className="bg-red-500 w-fit text-white font-bold px-4 py-2 rounded-3xl"
        >
          Yes, I do
        </button>
      </div>
    </div>
  );
};

export default DeleteNote;
