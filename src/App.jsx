import { useState } from 'react';
import { Button as FunButton, TestButton } from "./Button";
import FoodCard from "./FoodCard";
import ImgSample from "./assets/sample.png";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if (page === "home") {
      return (
        <div>
          <img src={ImgSample} height={200} />

          <h1
            style={{
              textAlign: "center",
              color: "tomato",
              backgroundColor: "black",
            }}
          >
            Pizza: {Math.random()}
          </h1>

          <FoodCard title="Pizza" emoji="🍕" description="A pizza is a popular food" />
          <FoodCard title="Burger" emoji="🍔" description="A burger is very delicious" />
          <FoodCard title="French Fries" emoji="🍟" description="French fries are very tasty" />

          <FunButton title="Save" variant="primary" />
          <FunButton title="Delete" variant="secondary" />
          <FunButton title="Cancel" variant="tertiary" />

          <TestButton />
        </div>
      );
    }

    if (page === "about") {
      return <h2>ℹ️ This is About Page</h2>;
    }

    if (page === "contact") {
      return (
        <div>
          <h2>📞 Contact Page</h2>
          <input placeholder="Enter name" /><br /><br />
          <input placeholder="Enter email" /><br /><br />
          <button>Submit</button>
        </div>
      );
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </nav>

      <hr />

      {/* Page Content */}
      {renderPage()}
    </div>
  );
}

export default App;