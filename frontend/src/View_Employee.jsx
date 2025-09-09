import React from "react";
import View_Data from "./View_Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const View_Employee = () => {
  const { id } = useParams();
  return (
    <div className="p-8">
      <Link to="/" className="flex gap-2 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-10 text-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <p className="text-black text-3xl font-semibold">
          View Employee Details
        </p>
      </Link>
      <div className="flex gap-2 border border-blue-600 border-b-4 border-t-0 border-r-0 border-l-0 w-fit py-5 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-6 text-blue-600 "
        >
          <path
            fill-rule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clip-rule="evenodd"
          />
        </svg>
        <p className="text-blue-600 font-semibold">Personal Information</p>
      </div>
      <hr className="border border-gray-300 " />
      <View_Data id={id} />
    </div>
  );
};

export default View_Employee;
