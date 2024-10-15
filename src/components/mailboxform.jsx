import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const NewMailbox = (props) => {
  const [mailbox, setMailbox] = useState("");
  const [details, setDetails] = useState("");
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleMailboxChange = (e) => {
    setMailbox(e.target.value);
  };

  const handleDetailsChange = (e) => {
    setDetails(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Created a new mailbox");
    props.addMailbox({
      mailboxName: mailbox,
      details: details,
      boxholder: boxholder,
      boxSize: boxSize,
    });
    setMailbox("");
    setDetails("");
    setBoxholder('');
    setBoxSize('Small');
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of the New MailBox</label>
      <input
        id="mailbox"
        type="text"
        name="newmailbox"
        value={mailbox}
        onChange={handleMailboxChange}
      /><br/>

      <label>Box Holder</label>
      <input
        type="text"
        value={boxholder}
        onChange={(e) => setBoxholder(e.target.value)}
        required
      /><br />

      <label>Box Size</label>
      <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br />

      <label>Mailbox Details</label>
      <input
        id="mailboxdetails"
        type="text"
        name="details"
        value={details}
        onChange={handleDetailsChange}
      /><br/>
      
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default NewMailbox;
