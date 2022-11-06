import EmployersListItems from "../employers-list-items/employers-list-items";
import "./employers-list.css";

const EmployersList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((item) => {
    const { id, ...itemsProps } = item;

    return (
      <EmployersListItems
        key={id}
        {...itemsProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-prop"))
        }
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployersList;
