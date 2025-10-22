import { existsSync, readFileSync, writeFileSync } from "fs";

const FILE_PATH = "./data/expenses.json";

export interface Expense {
  id: string;
  name: string;
  amount: number;
}

export function loadExpenses(): Expense[] {
  if (!existsSync(FILE_PATH)) return [];
  const data = readFileSync(FILE_PATH, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveExpenses(expenses: Expense[]) {
  writeFileSync(FILE_PATH, JSON.stringify(expenses, null, 2));
}

export function addExpenses(newExpenses: Expense[]) {
  const current = loadExpenses();
  const merged = [...current, ...newExpenses];
  saveExpenses(merged);
  return merged;
}

