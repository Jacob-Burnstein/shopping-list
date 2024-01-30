"use client";

import React from "react";

interface DeleteStoreProps {
  id: number;
  deleteStore: (id: number) => void;
}

const DeleteStoreButton: React.FC<DeleteStoreProps> = ({ id, deleteStore }) => {
  const handleDelete = async () => {
    deleteStore(id);
    try {
      await fetch(`http://localhost:3000/api/store/${id}`, {
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
    <button className="deleteButton" onClick={() => handleDelete()}>
      -
    </button>
  );
};

export default DeleteStoreButton;
