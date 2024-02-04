"use client";

import React from "react";
import apiClient from "../../api/utils/apiClient";

interface DeleteStoreProps {
  id: number;
  deleteStore: (id: number) => void;
}

const DeleteStoreButton: React.FC<DeleteStoreProps> = ({ id, deleteStore }) => {
  const handleDelete = async () => {
    deleteStore(id);
    try {
      await apiClient.delete(`/stores/${id}`);
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
