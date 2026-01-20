import type { CategoryType } from "./type.js";

const CategoryComponent = ({ 
    id, 
    label, 
    budget, 
}: CategoryType) => {

    return (
        <>
        <p>{label}</p>
        <p>{budget}</p> 
        </>
    );
};

export default CategoryComponent;