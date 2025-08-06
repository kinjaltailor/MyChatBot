import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotresponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => { 
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if(!userMessage) return;
    inputRef.current.value = "";
    
    // update chat history with user msg
    setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

    // thinkimng placeholder for bot response
    setTimeout(() => {
      setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);

    // calling the  func to genrate a bot response
    generateBotresponse([...chatHistory, { role: "user", text: userMessage }]);
},600);
}

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm