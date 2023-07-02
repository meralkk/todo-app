import React, { useEffect, useState } from "react";
import Note from "./note";
import axios from "axios";
import NoteForm from "./noteform";

const Notes = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://649098c31e6aa71680cb8adf.mockapi.io/todo"
      );
      const data = response.data;
      setData(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://649098c31e6aa71680cb8adf.mockapi.io/todo/${id}`
      );
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxClick = async (id, completed) => {
    try {
      const updatedData = data.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !completed };
        }
        return item;
      });
      setData(updatedData);

      await axios.put(
        `https://649098c31e6aa71680cb8adf.mockapi.io/todo/${id}`,
        { completed: !completed }
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NoteForm getData={getData} />

      {data.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          onDelete={() => handleDelete(item.id)}
          onCheckboxClick={() => handleCheckboxClick(item.id, item.completed)}
        />
      ))}
    </div>
  );
};

export default Notes;
