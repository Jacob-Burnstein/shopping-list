"use client";

import React from "react";
import createAuthenticatedApiClient from "../../api/utils/authenticatedApiClient";

interface DeleteStoreProps {
  id: number;
  deleteStore: (id: number) => void;
}

const DeleteStoreButton: React.FC<DeleteStoreProps> = ({ id, deleteStore }) => {
  const apiClient = createAuthenticatedApiClient();

  const handleDelete = async () => {
    deleteStore(id);
    try {
      await apiClient.delete(`http://localhost:3000/api/store/${id}`);
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
