import { useState } from "react";
import API from "../services/api";

const DataForm = ({ fetchCharts }) => {
  const [title, setTitle] = useState("");
  const [labels, setLabels] = useState("");
  const [values, setValues] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/charts", {
      title,
      labels: labels.split(","),
      values: values.split(",").map(Number),
    });

    fetchCharts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Labels (A,B,C)" onChange={(e) => setLabels(e.target.value)} />
      <input placeholder="Values (10,20,30)" onChange={(e) => setValues(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
};

export default DataForm;