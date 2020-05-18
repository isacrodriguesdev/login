import React, {useContext} from "react";
import {AuthProvider} from "../contexts/Auth";
import Home from "../pages/Home/Index";
import Login from "../pages/Login/Index";

export default () => {

  const {signed} = useContext(AuthProvider);

  return signed ? <Home /> : <Login />

};
