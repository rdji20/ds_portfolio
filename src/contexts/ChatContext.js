import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const production_link = "https://dsportfoliobe-5e233b6122bf.herokuapp.com/";
// const dev_link = "http://127.0.0.1:5000/";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [greeting, setGreeting] = useState(null);
    const [hasFetched, setHasFetched] = useState(false);
    const [session, setSession] = useState(null);
    const [user, setUser] = useState("");
    const [userContext, setUserContext] = useState("");
    const [infoBeh, setInfoBeh] = useState("");

    useEffect(() => {
        axios
            .get(production_link + "initiateChat")
            .then((response) => {
                if (response.data && response.data.response) {
                    setGreeting(response.data.response);
                }
                setHasFetched(true);
                setSession(response.data.session_id);
                setUser(response.data.user);
                setUserContext(response.data.user_context);
                setInfoBeh(response.data.info_behavior);
            })
            .catch((error) => {
                console.error("Error initializing chat:", error);
                setHasFetched(true);
            });
    }, []);

    return (
        <ChatContext.Provider
            value={{
                greeting,
                hasFetched,
                session,
                user,
                userContext,
                infoBeh,
                setUser,
                setUserContext,
                setInfoBeh,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
