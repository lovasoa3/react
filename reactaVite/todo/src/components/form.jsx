import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState(""); // État pour le nom
  const [message, setMessage] = useState(""); // État pour le message
  const [messages, setMessages] = useState([]); // État pour les messages affichés
  const [containerOpacity, setContainerOpacity] = useState(1); // État pour l'opacité du conteneur

  const add = () => {
    const newMessage = `${name} et ${message}`;
    setMessages(prevMessages => [...prevMessages, newMessage]);

    // Effacez les champs après avoir ajouté le message
    setName("");
    setMessage("");
  };

  const toggleView = () => {
    setContainerOpacity(prevOpacity => (prevOpacity === 1 ? 0 : 1));
  };

  return (
    <>
      <section>
        <form id="block_form">
          <h3>todo</h3>
          <input type="text" placeholder=" name" value={name} onChange={e => setName(e.target.value)}/>
          <input type="text" placeholder=" your todo list" value={message} onChange={e => setMessage(e.target.value)}/>
          <div className="block">
            <button type="button" onClick={add}>add</button>
            <button type="button" onClick={toggleView}>view</button>
          </div>
        </form>
        <div id="container" style={{ opacity: containerOpacity }}>
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default Form;
