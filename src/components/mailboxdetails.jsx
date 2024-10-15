import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { id } = useParams();
  const mailboxId = Number(id);

  const selectedMailbox = mailboxes.find((mailbox) => mailbox.id === mailboxId);
  const selectedLetters = letters.filter((letter) => letter.mailboxId === mailboxId);

  return (
    <div>
      <h2>Mailbox: {selectedMailbox?.name}</h2>
      <h3>Letters:</h3>
      <ul>
        {selectedLetters.map((letter, index) => (
          <li key={index}>
            <h4>To: {letter.recipient}</h4>
            <p>{letter.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxDetails;
