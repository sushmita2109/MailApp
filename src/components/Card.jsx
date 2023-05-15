import { useMail } from "../context/MailContext";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = () => {
  const { state, addToTrash, addAsRead, addToSpam } = useMail();

  console.log("state", state);
  return (
    <div>
      {state.allData.map((allMail) => (
        <div key={allMail.mId} className="cardcontent">
          <div className="titlearea">
            <h6 className="title">{allMail.subject}</h6>
            <button className="star">Star</button>
          </div>
          <p>{allMail.content}</p>
          <div className="btngroup">
            <Link className="link">View Details</Link>
            <div className="btnactions">
              <button
                className="delete"
                onClick={() => addToTrash(allMail.mId)}
              >
                Delete
              </button>
              <button className="read" onClick={() => addAsRead(allMail.mId)}>
                Mark as Read
              </button>
              <button className="spam" onClick={() => addToSpam(allMail.mId)}>
                Report Spam
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
