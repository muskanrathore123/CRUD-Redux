import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/actions/userActions";
import { useParams, useNavigate } from "react-router-dom"; 

const DeleteUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  useEffect(() => {
    dispatch(deleteUser(id));
    navigate("/users"); 
  }, [dispatch, id, navigate]);

  return (
    <div>
      <h2>Deleting User...</h2>
    </div>
  );
};

export default DeleteUser;
