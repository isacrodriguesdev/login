import React, {createContext, useState} from "react";
import Routes from "../routes/Index";

export const AuthProvider = createContext({
  signed: false,
  error: null,
  signIn: (email: string, password: string) => {},
  signOut: () => {}
});


export default (props: any) => {

  const [signed, setSigned] = useState(false);
  const [error, setError] = useState(null);
  
  async function signIn(email: string, password: string) {
    const data = {email: "dev@gmail.com", password: "123456"};
  
    if (data.email === email && data.password === password) {
      setSigned(true)
    } else {
      setError("Email ou senha incorreto")
    }
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthProvider.Provider value={{signIn, signed, signOut, error}}>
      <Routes />
    </AuthProvider.Provider>
  );
};
