import { useEffect } from "react";
import { Card } from "../components/Card";
import { FilterValues } from "../components/FilterValues";
import { Header } from "../components/Header";
import "./Inbox.css";
import { useMail } from "../context/MailContext";
import { mails } from "../data/fakeFetch";
export const Inbox = () => {
  const { addAllMail } = useMail();

  useEffect(() => {
    addAllMail(mails);
  }, []);
  return (
    <div className="inboxpage">
      <Header />
      <div className="inboxcontent">
        <FilterValues />
        <Card />
      </div>
    </div>
  );
};
