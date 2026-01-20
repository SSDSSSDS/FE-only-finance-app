import type { CategoryType } from "./type.js";
import "./CategoryComponent.scss";

const CategoryComponent = ({ label, budget }: CategoryType) => {
  return (
    <div className="category">
      <div className="category__label">{label}</div>
      <div className="category__budget">{budget}€</div>
    </div>
  );
};

export default CategoryComponent;
