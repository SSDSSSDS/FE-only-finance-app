import { useState } from "react";
import type { BonusType } from "../../components/Income/type.js";
import IncomeComponent from "../../components/Income/IncomeComponent.js";

const ManageIncomeFeature: React.FC = () => {
  const [salary, setSalary] = useState<number | "">("");
  const [sideHustle, setSideHustle] = useState<number | "">("");
  const [bonus, setBonus] = useState<BonusType | null>(null);

  const [bonusLabel, setBonusLabel] = useState<string>("");
  const [bonusAmount, setBonusAmount] = useState<number | "">("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (salary === "" || sideHustle === "") return;

    const trimmedLabel = bonusLabel.trim();
    const hasBonus = trimmedLabel !== "" && bonusAmount !== "";

    setBonus(hasBonus ? { label: trimmedLabel, amount: Number(bonusAmount) } : null);
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setBonusLabel(bonus?.label ?? "");
    setBonusAmount(bonus?.amount ?? "");
    setIsSubmitted(false);
  };

  if (!isSubmitted) {
    return (
      <>
        <input
          type="number"
          value={salary}
          placeholder="input salary here"
          onChange={(e) => setSalary(e.target.value === "" ? "" : Number(e.target.value))}
        />

        <input
          type="number"
          value={sideHustle}
          placeholder="input side hustle earnings"
          onChange={(e) => setSideHustle(e.target.value === "" ? "" : Number(e.target.value))}
        />

        <p>Bonus:</p>

        <input
          type="text"
          value={bonusLabel}
          placeholder="bonus label"
          onChange={(e) => setBonusLabel(e.target.value)}
        />

        <input
          type="number"
          value={bonusAmount}
          placeholder="bonus amount"
          onChange={(e) => setBonusAmount(e.target.value === "" ? "" : Number(e.target.value))}
        />

        <button onClick={handleSubmit}>submit</button>
      </>
    );
  }

  return (
    <>
      <IncomeComponent
        salary={Number(salary)}
        sideHustle={Number(sideHustle)}
        bonus={bonus}
      />
      <button onClick={handleEdit}>edit</button>
    </>
  );
};



export default ManageIncomeFeature;