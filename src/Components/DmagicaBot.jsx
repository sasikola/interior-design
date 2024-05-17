import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const DmagicaBot = () => {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Infinity Store",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}",
      trigger: "waiting2",
    },

    {
      id: "waiting2",
      message: "Thanks! We will get back to you",
      end: true,
    },
  ];
  return (
    <>
      <div className="bot-container">
        <ChatBot steps={steps} />
      </div>
    </>
  );
};

export default DmagicaBot;
