import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState();

  // og
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // if (userInfo) {
    setUser(userInfo);
    // }
    if (!userInfo) {
      history.push("/");
    }
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};
export default ChatProvider;
