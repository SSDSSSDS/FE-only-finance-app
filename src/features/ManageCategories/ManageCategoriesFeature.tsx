import { useState } from "react";
import CategoryComponent from "../../components/Category/CategoryComponent.js"
import type { CategoryType } from "../../components/Category/type.js";
import "./ManageCategoriesFeature.scss"

type ManageCategoriesFeatureType = {
	categories: CategoryType[];
	onChangeCategories: (cats: CategoryType[]) => void; //(value: React.SetStateAction<CategoryType[]>) => void
}

const ManageCategoriesFeature = ({
	categories,
	onChangeCategories
}: ManageCategoriesFeatureType) => {

	categories = ([{ id: "1", label: "1", budget: 100, basket: "Fun" }, { id: "2", label: "2", budget: 300 }]);
	const options = ["Fundamentals", "Fun", "Future you"]

	const [label, setLabel] = useState<string>("");
	const [budget, setBudget] = useState<number | "">("");
	const [basket, setBasket] = useState<string | "">("");

	const AddCategory = () => {
		const trimmed = label.trim();
		if (trimmed === "" || budget === "") return;
		onChangeCategories([...categories, { label: label, budget: budget, basket: basket, id: crypto.randomUUID() }])
		setLabel("")
		setBudget("")
	}

	const DeleteCategory = (e: string) => {
		onChangeCategories(categories.filter((cat) => cat.id !== e))
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
					onChange={(e) => setBudget(e.target.value === "" ? "" : Number(e.target.value))}
				/>
				<label>
					Category
					<select
						name="selectedFruit"
						value={basket}
						onChange={(e) => setBasket(e.target.value)}
					>
						{options.map((op) =>
							<option>{op}</option>
						)}
					</select>
				</label>
				<button onClick={AddCategory}>Add category</button>
			</div>

			<div className="manage-categories">
				<div className="categories-form">
				</div>

				<div className="categories-grid">
					{categories.map((cat) => (
						<div key={cat.id} className="category-tile">
							<CategoryComponent id={cat.id} label={cat.label} budget={cat.budget} basket={cat.basket ? cat.basket : ""} />
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