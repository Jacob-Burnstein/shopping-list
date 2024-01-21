"use client";

import React from "react";

const DeleteButton = ({ id }: { id: number }) => {
  const handleDelete = async () => {
    console.log("delete button");
    try {
      await fetch("http://localhost:3000/api/list", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={() => handleDelete()}>DELETE</button>
    </div>
  );
};

export default DeleteButton;
