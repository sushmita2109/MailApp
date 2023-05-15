import { useMail } from "../context/MailContext";
import "../components/Card.css";
import "./Inbox.css";
import { Header } from "../components/Header";

export const Spam = () => {
  const { state } = useMail();
  return (
    <div className="inboxpage">
      <Header />
      <div className="inboxcontent">
        <h1>Spam</h1>
        {state.allSpamMail?.map((spam) => (
          <div key={spam.mId} className="cardcontent">
            <div className="titlearea">
              <h6 className="title">{spam.subject}</h6>
              <button className="star">Star</button>
            </div>
            <p>{spam.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
