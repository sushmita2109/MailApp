import { useMail } from "../context/MailContext";
import "./FilterValues.css";
export const FilterValues = () => {
  const { showUnread, showStared } = useMail();
  return (
    <div>
      <fieldset className="filtervalue">
        <legend>Filter:</legend>

        <label>
          <input type="checkbox" value="unread" onChange={showUnread} />
          Show Unread Mails
        </label>
        <label>
          <input type="checkbox" onChange={showStared} />
          Show Stared Mails
        </label>
      </fieldset>
    </div>
  );
};
