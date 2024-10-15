import NavBar from "./components/navbar";
import { Route, Routes, useNavigate }  from 'react-router-dom';
import { useState } from 'react'
import NewMailbox from './components/mailboxform';
import ViewMail from './components/mailboxlist';
import MailboxDetails from './components/mailboxdetails';
import LetterForm from './components/letterform';
import './App.css';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);
  const navigate = useNavigate();

  const addMailbox = ({ mailboxName, details, boxSize, boxholder }) => {
    const newMailboxId = mailboxes.length + 1;
    const newMailBox = {
      id: newMailboxId,
      name: mailboxName,
      details,
      boxSize,
      boxholder,
    };
    setMailboxes([...mailboxes, newMailBox]);
  };

  const addLetter = (letter) => {
    setLetters([...letters, letter]);
    navigate(`/mailboxes/${letter.mailboxId}`);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to Home-Mail!</h1>} />
        <Route path="/new-mailbox" element={<NewMailbox addMailbox={addMailbox} />} />
        <Route path="/mailboxes" element={<ViewMail mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
      </>
  );
}

export default App;