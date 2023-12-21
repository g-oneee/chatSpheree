import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

// import { Button, ButtonGroup } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact></Route>
      <Route path="/chats" component={ChatPage}></Route>
    </div>
  );
}

export default App;
