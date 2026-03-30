import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const [message, setMessage] = useState('');
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}

export default MessageContext;

