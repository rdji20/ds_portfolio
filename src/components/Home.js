import React, { useState } from "react";
import imageSrc from "../img/me_sea.jpg";

// Function to send a message to the backend and retrieve the response
async function sendMessageToBackend(userMessage) {
    const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
    });
    const data = await response.json();
    return data.response; // This will be the SDK's response
}

function Home() {
    const [chatOn, setChat] = useState(true);
    const [messages, setMessages] = useState([]); // To store all chat messages

    async function handleSendMessage(userMessage) {
        const sdkResponse = await sendMessageToBackend(userMessage);
        setMessages([
            ...messages,
            { sender: "user", text: userMessage },
            { sender: "sdk", text: sdkResponse },
        ]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="profile-container">
                    <img src={imageSrc} className="Profile-img" alt="logo" />
                    <h2 className="text-3xl font-bold pt-6">Hello World!</h2>
                    <p className="greeting pb-6">
                        My name is Roberto and I'm a Information Scientist and
                        Designer. Chat with my{" "}
                        <span className="bot-name">bobby.AI</span> to know more
                        about me!
                    </p>
                </div>
            </header>

            {chatOn && (
                <section className="pt-10">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`chat ${
                                message.sender === "user"
                                    ? "chat-end"
                                    : "chat-start"
                            }`}
                        >
                            <div className="chat-bubble">{message.text}</div>
                        </div>
                    ))}
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            onKeyPress={(event) => {
                                if (event.key === "Enter") {
                                    handleSendMessage(event.target.value);
                                    event.target.value = ""; // Clear the input
                                }
                            }}
                        />
                    </div>
                </section>
            )}
        </div>
    );
}

export default Home;
