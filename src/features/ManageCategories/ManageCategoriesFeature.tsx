import { useState } from "react";
import CategoryComponent from "../../components/Category/CategoryComponent.js"
import type { CategoryType } from "../../components/Category/type.js";
import "./ManageCategoriesFeature.scss"

const ManageCategoriesFeature: React.FC = () => {

    const [categories, setCategories] = useState<CategoryType[]>([{ id: "1", label: "1", budget: 100 }, { id: "2", label: "2", budget: 300 }]);

    const [label, setLabel] = useState<string>("");
    const [budget, setBudget] = useState<number | "">("");

    const AddCategory = () => {
        const trimmed = label.trim();
        if (trimmed === "" || budget === "") return;
        setCategories([...categories, { label: label, budget: budget, id: crypto.randomUUID() }])
        setLabel("")
        setBudget("")
    }

    const DeleteCategory = (e: string) => {
        setCategories((all) => all.filter((cat) => cat.id !== e))
    }

    return (
        <div className="manage-categories">
            <div className="categories-form">
                <input
                    type="text"
                    name="label"
                    value={label}
                    placeholder="Label"
                    onChange={(e) => setLabel(e.target.value)}
                />

                <input
                    type="number"
                    name="budget"
                    value={budget}
                    placeholder="Budget"
                    onChange={(e) =>
                        setBudget(e.target.value === "" ? "" : Number(e.target.value))
                    }
                />

                <button onClick={AddCategory}>Add category</button>
            </div>

            <div className="manage-categories">
                <div className="categories-form">
                </div>

                <div className="categories-grid">
                    {categories.map((cat) => (
                        <div key={cat.id} className="category-tile">
                            <CategoryComponent id={cat.id} label={cat.label} budget={cat.budget} />
                            <button className="trash-btn" onClick={() => DeleteCategory(cat.id)}>
                                🗑
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default ManageCategoriesFeature;