import { createContext, useContext, useState } from "react";
import { mails } from "../data/fakeFetch";
import PropTypes from "prop-types";

export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [allMails, setAllMails] = useState(mails);

  return (
    <MailContext.Provider value={{ allMails }}>{children}</MailContext.Provider>
  );
};

MailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMail = () => useContext(MailContext);
