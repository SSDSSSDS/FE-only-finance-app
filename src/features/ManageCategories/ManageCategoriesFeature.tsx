import { useState } from "react";
import CategoryComponent from "../../components/Category/CategoryComponent.js"
import type { CategoryType } from "../../components/Category/type.js";

const ManageCategoriesFeature: React.FC = () => {

    const [categories, setCategories] = useState<CategoryType[]>([{id: "1", label: "1", budget:100}, {id: "2", label: "2", budget:300}]);

    const [label, setLabel] = useState<string>("");
    const [budget, setBudget] = useState<number | "">("");

    const AddCategory = () => {
        const trimmed = label.trim();
        if (trimmed === "" || budget === "") return;
        setCategories([...categories, {label: label, budget: budget, id: crypto.randomUUID()}])
        setLabel("")
        setBudget("")
    }

    const DeleteCategory = (e: string) => {
        setCategories((all) => all.filter((cat) => cat.id !== e))
    }

    return (
        <>
        <input type="text" name="label" value={label} onChange={e => setLabel(e.target.value)} />
        <input type="number" name="budget" value={budget} onChange={e => setBudget(e.target.value === "" ? "" : Number(e.target.value))} />
        <button onClick={() => AddCategory()} > Add category </button>

        {categories.map((cat) => (
            <>
            <CategoryComponent
            key={cat.id}
            id={cat.id}
            label={cat.label}
            budget={cat.budget}
            />
            <button onClick={() => DeleteCategory(cat.id)}> trash icon </button>
            </>
        ))}
        </>
    )
}

export default ManageCategoriesFeature;