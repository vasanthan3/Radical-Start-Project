import React from "react";
import { useNavigate } from "react-router-dom";

const Field = ({
  setFile,
  preview,
  setPreview,
  formData,
  setFormData,
  handleSubmit,
  mode,
}) => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlefilechange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  return (
    <form action="" method="POST" className="mt-5" onSubmit={handleSubmit}>
      <div className="border border-gray-300 rounded-lg w-28 h-28 mb-3 cursor-pointer">
        {!preview && (
          <label
            htmlFor="upload"
            className="flex justify-center items-center h-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
              />
            </svg>
          </label>
        )}
        <input
          id="upload"
          type="file"
          onChange={handlefilechange}
          className="hidden"
        />
        {preview && (
          <div className="mb-3 h-full relative">
            <img
              src={preview}
              alt="Preview"
              className="rounded-lg w-full h-full object-cover object-top"
            />
            <div className="rounded-full bg-blue-600 w-fit p-2 absolute bottom-1 right-1 cursor-pointer">
              <label
                htmlFor="filechange"
                className="flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-4 text-white cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </label>
              <input
                type="file"
                accept="image/*"
                id="filechange"
                onChange={handlefilechange}
                className="hidden"
              />
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-3" htmlFor="name">
            Name*
          </label>
          <input
            type="text"
            className="text-grey-500 border border-gray-300  focus:outline-0  w-full rounded-lg py-4 px-5"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-3" htmlFor="empid">
            Employee ID*
          </label>
          <input
            type="text"
            className="text-grey-500 border border-gray-200 focus:outline-0  w-full rounded-lg py-4 px-5"
            name="empId"
            id="empid"
            value={formData.empId}
            onChange={handleChange}
            placeholder="Enter employee ID"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-3" htmlFor="deptartment">
            Department*
          </label>
          <select
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
            className="text-grey-500 border border-gray-300 focus:outline-0  w-full rounded-lg py-4 px-5"
            required
          >
            <option value="" select disabled>
              Choose Department
            </option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-3" htmlFor="designation">
            Designation*
          </label>
          <select
            name="designation"
            id="designation"
            value={formData.designation}
            onChange={handleChange}
            className="text-grey-500 border border-gray-300 focus:outline-0  w-full rounded-lg py-4 px-5"
            required
          >
            <option value="" selected disabled>
              Choose Designation
            </option>
            <option value="Design lead">Design lead</option>
            <option value="Project lead">Project lead</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
            <option value="Designer">Designer</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-3 rou" htmlFor="project">
            Project
          </label>
          <input
            type="text"
            className="text-grey-500 border border-gray-300 focus:outline-0  w-full rounded-lg py-4 px-5"
            name="project"
            id="project"
            value={formData.project}
            onChange={handleChange}
            placeholder="Enter Project"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-3" htmlFor="type">
            Type*
          </label>
          <select
            name="type"
            id="type"
            value={formData.type}
            onChange={handleChange}
            className="text-grey-500 border border-gray-300 focus:outline-0  w-full rounded-lg py-4 px-5"
            required
          >
            <option value="" selected disabled>
              Choose Type
            </option>
            <option value="Office">Office</option>
            <option value="Remote">Work From Home</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-3" htmlFor="status">
            Status*
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="text-grey-500 border border-gray-300 focus:outline-0  w-full rounded-lg py-4 px-5"
            required
          >
            <option value="" selected disabled>
              Choose Status
            </option>
            <option value="Working">Working</option>
            <option value="Resign">Resign</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 text-gray-800 font-bold rounded-lg px-4 py-3 cursor-pointer"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold rounded-lg px-4 py-3 cursor-pointer"
        >
          {mode == "edit" ? "Update" : "Confirm"}
        </button>
      </div>
    </form>
  );
};

export default Field;
