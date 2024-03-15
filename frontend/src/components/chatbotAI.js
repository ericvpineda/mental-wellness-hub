// ChatbotAI.js
import React, { useState } from 'react';

const ChatbotAI = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (inputValue.trim() === '') return;
    setMessages([...messages, { from: 'user', text: inputValue }]);
    setInputValue('');
  };

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 max-w-xs p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      <div className="overflow-y-auto h-64 bg-gray-700">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 my-2 rounded-lg ${message.from === 'user' ? 'bg-blue-600' : 'bg-gray-600'}`}>
            <p className="text-white text-sm">{message.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="w-full p-2 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg border-l-0 border-gray-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotAI;
