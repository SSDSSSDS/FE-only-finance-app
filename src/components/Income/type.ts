export type IncomeType = {
    salary?: number;
    sideHustle?: number;
    bonus?: BonusType | null;
}

export type BonusType = {
    label: string;
    amount: number;
}