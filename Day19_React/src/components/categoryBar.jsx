import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function CategoryBar(props) {
  const { categories } = props;

  return (
    <div className="homepage-category-bar">
      <button>
        <RxHamburgerMenu />
        All
      </button>
      <div className="category-items">
        {categories.map((elem) => {
          return <p key={elem}>{elem}</p>;
        })}
      </div>
    </div>
  );
}
