import React from 'react';
import { Link } from 'react-router-dom';


const ViewMail = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.length > 0 ? (
        mailboxes.map((mail) => (
          <Link key={mail.id} to={`/mailboxes/${mail.id}`} className="mailbox-link">
            <div className="mailbox-container">
              <p>Mailbox: {mail.id}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No mailboxes available</p>
      )}
    </div>
  );
};

export default ViewMail;
