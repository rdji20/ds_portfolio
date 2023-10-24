import React, { useContext } from "react";
// import Modal from "react-modal";
import { ProjectsContext } from "../contexts/ProjectsContext";

const NotesPage = () => {
    const { notes } = useContext(ProjectsContext); //Here I deleted setNotes
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [secretWord, setSecretWord] = useState("");
    // const [expandedNote, setExpandedNote] = useState(null);

    // // Handler for adding new notes
    // const addNote = () => {
    //     // If the secret word is correct, add a new note
    //     if (secretWord === "OpenSesame") {
    //         // You can set your own secret word
    //         const newNote = {
    //             id: notes.length + 1,
    //             title: `Note Title ${notes.length + 1}`,
    //             content: "This is a preview of the content...",
    //             date: new Date().toLocaleDateString(),
    //         };
    //         setNotes([...notes, newNote]);
    //         setModalIsOpen(false); // Close the modal after adding the note
    //     } else {
    //         alert("Wrong secret word!");
    //     }
    //     setSecretWord(""); // Clear the secret word
    // };

    // // Open the modal
    // const openModal = () => {
    //     setModalIsOpen(true);
    // };

    // // Close the modal
    // const closeModal = () => {
    //     setModalIsOpen(false);
    //     setSecretWord(""); // Clear the secret word
    // };

    // NEW: Handler for expanding and collapsing notes
    // const toggleNoteExpansion = (id) => {
    //     if (expandedNote === id) {
    //         setExpandedNote(null); // Collapse the currently expanded note
    //     } else {
    //         setExpandedNote(id); // Expand the new note
    //     }
    // };

    return (
        <div className="App p-5 text-white">
            <h1 className="text-3xl mb-4">My Everyday Notes:</h1>

            {/* Note Cards */}
            {notes.map((note) => (
                <div
                    key={note.id}
                    className="bg-gray-700 p-5 rounded shadow-lg mb-4"
                >
                    <h2 className="text-xl font-bold">{note.title}</h2>
                    <p className="text-gray-400">{note.date}</p>
                    <p className="mt-2">{note.content}</p>
                </div>
            ))}

            {/* Add Note Button */}
            {/* <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
                onClick={openModal}
            >
                + Add Note
            </button> */}

            {/* Modal for entering the secret word
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Secret Word Input"
                className="bg-white rounded p-5 outline-none" // basic styles for the modal
            >
                <h2>Give me the secret word</h2>
                <input
                    type="text"
                    value={secretWord}
                    onChange={(e) => setSecretWord(e.target.value)}
                    className="border p-2 my-3"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addNote}
                >
                    Send Word
                </button>
                <button
                    className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded ml-3"
                    onClick={closeModal}
                >
                    Cancel
                </button>
            </Modal> */}
        </div>
    );
};

export default NotesPage;
