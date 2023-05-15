import "./FilterValues.css";
export const FilterValues = () => {
  return (
    <div>
      <fieldset className="filtervalue">
        <legend>Filter:</legend>

        <label>
          <input type="checkbox" />
          Show Unread Mails
        </label>
        <label>
          <input type="checkbox" />
          Show Stared Mails
        </label>
      </fieldset>
    </div>
  );
};
