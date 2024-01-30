"use client";

import React from "react";

interface DeleteButtonProps {
  id: number;
  deleteItem: (id: number) => void;
}

const DeleteItemButton: React.FC<DeleteButtonProps> = ({ id, deleteItem }) => {
  const handleDelete = async () => {
    deleteItem(id);
    try {
      await fetch(`http://localhost:3000/api/list/${id}`, {
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
      <button className="deleteButton" onClick={() => handleDelete()}>
        -
      </button>
    </div>
  );
};

export default DeleteItemButton;
