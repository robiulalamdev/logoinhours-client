const Star = ({ rating = 0 }) => {
  return (
    <ul className="list list-row list-xxs align-items-center lh-1">
      {[...Array(5)].map((_, i) => (
        <li key={i}>
          <span
            className={`material-symbols-outlined mat-icon solid  ${
              rating > i && "text-warning"
            }`}
          >
            {" "}
            star{" "}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Star;
