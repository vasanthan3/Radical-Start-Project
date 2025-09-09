import React from "react";
import Emp_Details from "./Emp_Details";
import { Link } from "react-router-dom";
import "./index.css";

const Employee = () => {
  return (
    <div className="px-12 py-8">
      <div className="flex">
        <p className="font-bold text-3xl flex-1 text-gray-800">Employee</p>
        <div className="flex gap-3">
          <div className="flex gap-3 my-auto px-3 py-3   border border-gray-300 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="search"
              placeholder="Search"
              className="focus:outline-0"
            />
          </div>
          <div className=" gap-3 my-auto px-3 py-3 w-56 bg-blue-500  border border-gray-300 rounded-xl">
            <Link to="/add" className="flex justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p className="text-white">Add to Employees</p>
            </Link>
          </div>
        </div>
      </div>
      <Emp_Details />
    </div>
  );
};

export default Employee;
