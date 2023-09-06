import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="Pages">
      <article style={{ padding: "200px" }}>
        <h1>Oops!</h1>
        <p>Page Not Found</p>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </article>
    </div>
  );
};

export default Missing;
