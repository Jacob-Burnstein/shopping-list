"use client";

import React from "react";
import createAuthenticatedApiClient from "../../api/utils/authenticatedApiClient";
import { useAuth } from "../../contexts/AuthContext";
interface DeleteButtonProps {
  id: number;
  deleteItem: (id: number) => void;
}

const DeleteItemButton: React.FC<DeleteButtonProps> = ({ id, deleteItem }) => {
  const authContext = useAuth();
  const apiClient = createAuthenticatedApiClient(authContext);
  const handleDelete = async () => {
    deleteItem(id);
    try {
      await apiClient.delete(`/list/${id}`);
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
