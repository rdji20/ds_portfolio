import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import imageSrc from "../img/me_sea.jpg";
import { ChatContext } from "../contexts/ChatContext";

const production_link = "https://dsportfoliobe-5e233b6122bf.herokuapp.com/";
// const dev_link = "http://127.0.0.1:5000/";

console.log("Home component mounted");

function Home() {
    // State for user's current input

    const [userInput, setUserInput] = useState("");

    // State for chat history
    const [chatHistory, setChatHistory] = useState([]);

    const [loading, setLoading] = useState(false);

    const {
        greeting,
        hasFetched,
        session,
        user,
        userContext,
        infoBeh,
        setUser,
        setUserContext,
        setInfoBeh,
    } = useContext(ChatContext);

    useEffect(() => {
        // Check if the greeting is already in the chatHistory

        if (hasFetched && greeting) {
            setChatHistory((prevHistory) => [
                ...prevHistory,
                { type: "bot", content: greeting },
            ]);
        }
    }, [greeting, hasFetched]);

    // Handle user input change
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Convert chat history to text
    const chatHistoryToText = (chatHistory) => {
        return chatHistory
            .map((entry) => {
                let sender =
                    entry.type.charAt(0).toUpperCase() + entry.type.slice(1);
                return `${sender}: ${entry.content}`;
            })
            .join("\n");
    };

    // Handle user message submission
    const handleUserSubmit = async () => {
        // Add user's message to chat history
        setChatHistory((prevHistory) => [
            ...prevHistory,
            { type: "user", content: userInput },
        ]);

        setLoading(true);

        const formattedChatHistory = chatHistoryToText(chatHistory);
        console.log(formattedChatHistory);

        try {
            // Send user's message to the Flask backend
            const response = await axios.post(production_link + "devTestChat", {
                message: userInput,
                user: user,
                session: session,
                user_context: userContext,
                info_behavior: infoBeh,
                chat: formattedChatHistory,
            });

            // Add chatbot's response to chat history
            if (response.data && response.data.response) {
                setChatHistory((prevHistory) => [
                    ...prevHistory,
                    { type: "bot", content: response.data.response },
                ]);
                setInfoBeh(response.data.info_behavior);
                setUser(response.data.user);
                setUserContext(response.data.user_context);
            }
        } catch (error) {
            console.error("Error communicating with the backend:", error);
        }
        console.log(user, "This is the user now");
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
                    <p className="pt-3 text-lg">
                        My name is Roberto and I'm an Information/Data Scientist
                        and software developer.
                    </p>
                    <p className="pb-5 text-lg">
                        Chat with my <span className="bot-name">Bobby.AI</span>{" "}
                        to know more about me and my projects!
                    </p>
                    <p className="text-xs text-stone-400">
                        Version 1.1 Chat like conversation implemented. Doesn't
                        have all the information yet. Currently working in
                        developing vector database and adding code examples.
                        None of the personal information is saved.
                    </p>
                </div>
            </header>

            {/* Display chat history */}
            <section className="chat-history pt-7">
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
                <button className="btn btn-s btn-square">
                    <span className="loading loading-spinner"></span>
                </button>
            ) : null}

            {/* Buttons for questions examples*/}
            <section className="predefined-questions pb-2 mb-0 mt-20">
                <button
                    className="btn btn-s bg-slate-500 text-white border-slate-500"
                    onClick={() => {
                        setUserInput("Tell me about your intended startup");
                    }}
                >
                    Tell me about your intended startup
                </button>
                <button
                    className="btn m-1 bg-slate-500 text-white border-slate-500"
                    onClick={() => {
                        setUserInput(
                            "My name is Tua I'm a recruiter and I want to learn more about your projects."
                        );
                    }}
                >
                    My name is Tua I'm a recruiter and I want to learn more
                    about your projects.
                </button>
                <button
                    className="btn m-1  bg-slate-500 text-white border-slate-500"
                    onClick={() => {
                        setUserInput("What music do you like?");
                    }}
                >
                    What music do you like?
                </button>
            </section>

            {/* Input for user's message */}
            <section className="pt-0 pb-2 mt-0 mb-10">
                <input
                    type="text"
                    placeholder="Type here"
                    value={userInput}
                    onChange={handleInputChange}
                    className="input input-ghost w-full max-w-lg mb-4 mt-1 text-slate-400"
                />
                <button className="btn btn-s" onClick={handleUserSubmit}>
                    Send
                </button>
            </section>
        </div>
    );
}

export default Home;
