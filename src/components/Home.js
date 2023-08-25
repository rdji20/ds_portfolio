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
                        My name is Roberto and I'm a Information and Data
                        Scientist. Chat with my{" "}
                        <span className="bot-name">Bobby.AI</span> to know more
                        about me!
                    </p>
                </div>
            </header>

            {chatOn && (
                <section className="">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-ghost w-full max-w-lg my-10"
                    />
                </section>
            )}
        </div>
    );
}

export default Home;
