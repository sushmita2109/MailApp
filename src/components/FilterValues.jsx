import { useMail } from "../context/MailContext";
import "./FilterValues.css";
export const FilterValues = () => {
  const { showUnread, showStared } = useMail();
  return (
    <div>
      <fieldset className="filtervalue">
        <legend>Filter:</legend>

        <label>
          <input
            type="checkbox"
            value="unread"
            onChange={(event) => showUnread(event.target.checked)}
          />
          Show Unread Mails
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(event) => showStared(event.target.checked)}
          />
          Show Stared Mails
        </label>
      </fieldset>
    </div>
  );
};
