import axios from "axios";
import React, { useEffect, useState } from "react";
const Info = ({ id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/view/${id}`);
        setData(result.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="border border-gray-300 rounded-lg w-28 h-28 mb-3 cursor-pointer mt-5">
        <img
          src={`http://localhost:5000/${data.file}`}
          className="w-full h-full object-cover object-top rounded-lg"
        />
      </div>
      <div className="grid grid-cols-5">
        <div className="border-2 border-gray-300  border-t-0 border-r-0 border-l-0 py-4 col-span-2">
          <p className="text-gray-400 mb-1">Name</p>
          <p className="text-gray-700">{data.name}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-3">
          <p className="text-gray-400 mb-1">Employee ID</p>
          <p className="text-gray-700">{data.empId}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-2">
          <p className="text-gray-400 mb-1">Department</p>
          <p className="text-gray-700">{data.department}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-3">
          <p className="text-gray-400 mb-1">Designation</p>
          <p className="text-gray-700">{data.designation}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-2">
          <p className="text-gray-400 mb-1">Project</p>
          <p className="text-gray-700">{data.project}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-3">
          <p className="text-gray-400 mb-1">Type</p>
          <p className="text-gray-700">{data.type}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-2">
          <p className="text-gray-400 mb-1">Status</p>
          <p className="text-gray-700">{data.status}</p>
        </div>
        <div className="border-2 border-gray-300 border-t-0 border-r-0 border-l-0 py-4 col-span-3"></div>
      </div>
    </div>
  );
};

export default Info;
