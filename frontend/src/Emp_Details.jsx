import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Details = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/");
        setData(res.data);  
      } catch (err) {
        console.log("Fetching Error", err);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    navigate("/");
    setToggle(false);
    try {
      const data = await axios.delete(`http://localhost:5000/delete/${id}`);
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const deletePopup = (id) => {
    setId(id);
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <>
      <div className="border border-gray-300 rounded-md px-4 mt-5 relative">
        <table className="w-full text-gray-500">
          <thead>
            <tr className="border border-gray-300 border-t-0 border-l-0 border-r-0 border-b">
              <td className="py-5">Employee Name</td>
              <td className="py-5">Employee ID</td>
              <td className="py-5">Department</td>
              <td className="py-5">Designation</td>
              <td className="py-5">Project</td>
              <td className="py-5">Type</td>
              <td className="py-5">Status</td>
              <td className="py-5">Action</td>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((value) => (
                <tr
                  key={value.id}
                  className="border border-gray-300 border-t-0 border-l-0 border-r-0 text-gray-800"
                >
                  <td className="py-5 flex items-center">
                    <img
                      src={`http://localhost:5000/${value.file}`}
                      alt=""
                      className="rounded-full w-8 h-8 object-cover object-top mr-4"
                    />
                    {value.name}
                  </td>
                  <td className="py-5">{value.empId}</td>
                  <td className="py-5">{value.department}</td>
                  <td className="py-5">{value.designation}</td>
                  <td className="py-5">{value.project}</td>
                  <td className="py-5">{value.type}</td>
                  <td className="py-5">{value.status}</td>
                  <td className="py-5 flex gap-1">
                    <Link to={`view/${value.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5 mb-1 cursor-pointer"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </Link>
                    <Link to={`edit/${value.id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5 mb-1 cursor-pointer"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-5 mb-1 cursor-pointer"
                      onClick={() => deletePopup(value.id)}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="py-28">
                  <div className="flex justify-center font-semibold text-xl text-black">
                    No Records Found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {toggle && (
        <>
          <div className="bg-white-200 w-80 h-65 rounded-lg grid grid-row-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white ">
            <div className="row-span-5 flex flex-col justify-center items-center gap-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-15 text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
              <p className="text-xl px-15 text-center">
                Are you sure you want to delete
              </p>
            </div>
            <div className="row-span-1 flex gap-1">
              <button
                onClick={() => setToggle(false)}
                className="bg-red-500 text-white text-lg font-semibold w-1/2 rounded-bl-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(id)}
                className="bg-blue-500 text-white text-lg font-semibold  w-1/2 rounded-br-lg cursor-pointer"
              >
                Yes
              </button>
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 bottom-0 bg-gray-800 opacity-25"></div>
        </>
      )}
    </>
  );
};

export default Details;
