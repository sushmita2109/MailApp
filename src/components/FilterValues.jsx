import "./FilterValues.css";
export const FilterValues = () => {
  return (
    <div className="filtervalue">
      <label>
        <input type="checkbox" />
        Show Unread Mails
      </label>
      <label>
        <input type="checkbox" />
        Show Stared Mails
      </label>
    </div>
  );
};
