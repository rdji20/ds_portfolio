import React from "react";
import imageSrc from "../img/me_sea.jpg";

function Home() {
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

            <section className="">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-ghost w-full max-w-lg my-10"
                />
            </section>
        </div>
    );
}

export default Home;
