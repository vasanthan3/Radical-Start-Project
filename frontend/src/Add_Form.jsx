import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "./Data";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
  });

  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("empId", formData.empId);
    data.append("department", formData.department);
    data.append("designation", formData.designation);
    data.append("project", formData.project);
    data.append("type", formData.type);
    data.append("status", formData.status);
    data.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/add", data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Form submission failed.");
    }

    navigate("/");
  };

  return (
    <Data
      setFile={setFile}
      preview={preview}
      setPreview={setPreview}
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
    />
  );
};

export default Form;
