import React from "react";
import { useEffect, useState } from "react";
import Data from "./Data";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit_Form = ({ id, mode }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/view/${id}`);
        const emp = res.data[0];

        setFormData({
          name: emp.name,
          empId: emp.empId,
          department: emp.department,
          designation: emp.designation,
          project: emp.project,
          type: emp.type,
          status: emp.status,
          file: emp.file,
        });

        if (emp.file) {
          setPreview(`http://localhost:5000/${emp.file}`);
        }
      } catch (err) {
        console.error("Error fetching employee:", err);
      }
    };
    fetch();
  }, []);

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
    data.append("file", file ? file : formData.file);

    try {
      const res = await axios.put(`http://localhost:5000/update/${id}`, data);
      alert("Form Update successfully!");
    } catch (err) {
      console.error(err);
      alert("Form Update failed.");
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
      mode={mode}
    />
  );
};

export default Edit_Form;
