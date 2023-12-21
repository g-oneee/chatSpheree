import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChatState } from "../Context/contextProvider";
import { Box } from "@chakra-ui/react";
import ChatBox from "../components/miscellenous/ChatBox";
import SideDrawer from "../components/miscellenous/SideDrawer";
import MyChats from "../components/miscellenous/MyChats";
const ChatPage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
