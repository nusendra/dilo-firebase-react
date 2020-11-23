import React, { useContext } from "react";
import { auth } from "../libs/firebase";
import { GlobalContext } from "../providers/GlobalProvider.jsx";

const Home = () => {
  const { dispatch } = useContext(GlobalContext);
  const logout = async () => {
    await auth().signOut();
    dispatch(null);
  };
  return (
    <div>
      <div>welcome home</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
