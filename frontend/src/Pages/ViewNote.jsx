import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { set } from "mongoose";
import Backbutton from "../components/Backbutton";

const ViewNote = () => {
  const [data, setdata] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5500/notes/${id}`)
      .then((res) => {
        setdata(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-screen h-screen bg-slate-200 flex justify-center items-center">
      <div className="absolute left-4 top-20 pt-5">
        <Backbutton />
      </div>
      <div className="flex flex-col w-[50%] max-md:w-[80%] bg-white px-10 py-10 rounded-3xl justify-center items-center gap-10">
        <h1 className="text-2xl font-bold">Note Details</h1>
        <div className="w-full flex flex-col gap-2 max-md:gap-4">
          <div className="flex w-full gap-2">
            <h1 className="min-w-[20%] flex items-center justify-center font-bold text-sm max-md:min-w-[30%] bg-slate-100">
              Title :{" "}
            </h1>
            <h1 className="bg-slate-100 px-2 w-full">{data.title}</h1>
          </div>
          <div className="flex w-full gap-2">
            <h1 className="min-w-[20%] flex items-center justify-center font-bold text-sm max-md:min-w-[30%] bg-slate-100">
              Category :{" "}
            </h1>
            <h1 className="bg-slate-100 px-2 w-full">{data.category}</h1>
          </div>
          <div className="flex w-full gap-2">
            <h1 className="min-w-[20%] flex items-center justify-center font-bold text-sm max-md:min-w-[30%] bg-slate-100">
              Description :{" "}
            </h1>
            <h1 className="bg-slate-100 px-2 w-full">{data.description}</h1>
          </div>
          <div className="flex w-full gap-2">
            <h1 className="min-w-[20%] flex items-center justify-center font-bold text-sm max-md:min-w-[30%] bg-slate-100">
              Created :{" "}
            </h1>
            <h1 className="bg-slate-100 px-2 w-full">
              {new Date(data.createdAt).toDateString()}{" "}
              {new Date(data.createdAt).toLocaleTimeString()}
            </h1>
          </div>
          <div className="flex w-full gap-2">
            <h1 className="min-w-[20%] flex items-center justify-center font-bold text-sm max-md:min-w-[30%] bg-slate-100">
              Last edit :{" "}
            </h1>
            <h1 className="bg-slate-100 px-2 w-full">
              {new Date(data.updatedAt).toDateString()}{" "}
              {new Date(data.updatedAt).toLocaleTimeString()}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
