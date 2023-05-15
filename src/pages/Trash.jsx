import { useMail } from "../context/MailContext";
import "../components/Card.css";
import "./Inbox.css";
import { Header } from "../components/Header";

export const Trash = () => {
  const { state } = useMail();
  return (
    <div className="inboxpage">
      <Header />
      <div className="inboxcontent">
        <h1>Trash</h1>

        {state.allDeleteMail?.map((del) => (
          <div key={del.mId}>
            <div className="titlearea">
              <h6 className="title">{del.subject}</h6>
              <button className="star">Star</button>
            </div>
            <p>{del.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
