import type { CategoryType } from "./type.js";
import "./CategoryComponent.scss";

const CategoryComponent = ({ label, budget, basket }: CategoryType) => {
  return (
    <div className="category">
      <div className="category__label">{label}</div>
      <div className="category__budget">{budget}€</div>
      <p>{basket}</p>
    </div>
  );
};

export default CategoryComponent;
