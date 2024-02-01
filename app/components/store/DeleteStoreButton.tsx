"use client";

import React from "react";
import createAuthenticatedApiClient from "../../api/utils/authenticatedApiClient";
import { useAuth } from "../../contexts/AuthContext";

interface DeleteStoreProps {
  id: number;
  deleteStore: (id: number) => void;
}

const DeleteStoreButton: React.FC<DeleteStoreProps> = ({ id, deleteStore }) => {
  const authContext = useAuth();
  const apiClient = createAuthenticatedApiClient(authContext);

  const handleDelete = async () => {
    deleteStore(id);
    try {
      await apiClient.delete(`/api/store/${id}`);
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
