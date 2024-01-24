"use client";

import React from "react";

interface DeleteButtonProps {
  id: number;
  deleteItem: (itemId: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, deleteItem }) => {
  const handleDelete = async () => {
    deleteItem(id);
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
