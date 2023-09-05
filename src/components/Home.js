import React, { useState } from "react";
import axios from "axios";
import imageSrc from "../img/me_sea.jpg";

const production_link =
    "https://dsportfoliobe-5e233b6122bf.herokuapp.com/getChatbotResponse";
// const dev_link = "http://127.0.0.1:5000/getChatbotResponse";

function Home() {
    // State for user's current input
    const [userInput, setUserInput] = useState("");

    // State for chat history
    const [chatHistory, setChatHistory] = useState([]);

    const [loading, setLoading] = useState(false);

    // Handle user input change
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Handle user message submission
    const handleUserSubmit = async () => {
        // Add user's message to chat history
        setChatHistory((prevHistory) => [
            ...prevHistory,
            { type: "user", content: userInput },
        ]);

        setLoading(true);

        try {
            // Send user's message to the Flask backend
            const response = await axios.post(production_link, {
                message: userInput,
            });

            // Add chatbot's response to chat history
            if (response.data && response.data.response) {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { type: "bot", content: response.data.response },
                ]);
            }
        } catch (error) {
            console.error("Error communicating with the backend:", error);
        }

        setLoading(false);

        // Clear the user input
        setUserInput("");
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="profile-container">
                    <img src={imageSrc} className="Profile-img" alt="logo" />
                    <h2 className="text-3xl font-bold pt-6">Hello World!</h2>
                    <p className="greeting pb-6">
                        My name is Roberto and I'm an Information/Data Scientist
                        and software developer. Chat with my{" "}
                        <span className="bot-name">Bobby.AI</span> to know more
                        about me!
                    </p>
                    <p className="text-xs text-stone-400">
                        Version 1.0 works as search rather than conversation.
                        Currently working on adding context from chat history.
                    </p>
                </div>
            </header>

            {/* Display chat history */}
            <section className="chat-history">
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`chat-message ${message.type}-message`}
                    >
                        {message.content}
                    </div>
                ))}
            </section>
            {loading ? (
                <button className="btn btn-square">
                    <span className="loading loading-spinner"></span>
                </button>
            ) : null}

            {/* Input for user's message */}
            <section className="">
                <input
                    type="text"
                    placeholder="Type here"
                    value={userInput}
                    onChange={handleInputChange}
                    className="input input-ghost w-full max-w-lg my-10"
                />
                <button className="btn btn-s" onClick={handleUserSubmit}>
                    Send
                </button>
            </section>
        </div>
    );
}

export default Home;
