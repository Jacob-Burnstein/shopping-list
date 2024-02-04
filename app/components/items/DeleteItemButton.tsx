"use client";

import React from "react";

import apiClient from "../../api/utils/apiClient";

interface DeleteButtonProps {
  id: number;
  deleteItem: (id: number) => void;
}

const DeleteItemButton: React.FC<DeleteButtonProps> = ({ id, deleteItem }) => {
  const handleDelete = async () => {
    deleteItem(id);
    try {
      await apiClient.delete(`/items/${id}`);
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
