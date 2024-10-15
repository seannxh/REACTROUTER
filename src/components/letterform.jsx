import React, { useState } from 'react';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: 1,
    recipient: 'John Doe',
    message: 'This is the letter message',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mailboxId && formData.recipient && formData.message) {
      addLetter(formData); 
      alert("All fields are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Mailbox:
        <select
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox.id} value={mailbox.id}>
              {mailbox.name} (ID: {mailbox.id})
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Recipient Name:
        <input
          type="text"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;
