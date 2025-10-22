import { Hono } from 'hono';
import { addExpenses, loadExpenses, saveExpenses } from "../utils/localstore";
import { z } from 'zod';

const expensesRoute = new Hono();

const expenseSchema = z.object({
  id: z.uuid(),
  name: z.string().trim().min(1, {message: "El campo name no puede estar vacio"}),
  amount: z.coerce.number().gt(0, { message: "La cantidad debe ser mayor que 0" })
});

type Expense = z.infer<typeof expenseSchema>;
/*
const fakeExpenses: Expense[] = [
  {id: crypto.randomUUID(), name: 'Pencil', amount: 20},
  {id: crypto.randomUUID(), name: 'Notebook', amount: 300},
  {id: crypto.randomUUID(), name: 'Purse', amount: 1200},
  {id: crypto.randomUUID(), name: 'Erase', amount: 50},
];
*/
const fakeExpenses: Expense[] = [];

const postSchema = expenseSchema.omit({ id: true });

expensesRoute.get("/", (c) => {
  const expenses: Expense[] = loadExpenses();
  return c.json(expenses);
});

expensesRoute.post("/", async (c) => {
  try {
    const data = await c.req.json();
    const expense = postSchema.parse(data);
    const fake: Expense[] = loadExpenses();
    const r = [{id: crypto.randomUUID(), ...expense }];
    addExpenses(r);
    c.status(201); // Created
    return c.json({error: []});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return c.json({error: error.issues});
    }
  }
});

expensesRoute.get("/:id", (c) => {
  const id = Number.parseInt(c.req.param("id"));
  const expense = fakeExpenses.find(expense => expense.id === id);
  if (!expense) {
    return c.notFound();
  }
  return c.json(expense);
});

expensesRoute.delete("/:id", (c) => {
  //const id = Number.parseInt(c.req.param("id"));
  const id = c.req.param("id");
  const fake: Expense[] = loadExpenses();
  const index = fake.findIndex(expense => expense.id === id);
  if (index === -1) {
    return c.notFound();
  }
  fake.splice(index, 1)[0];
  saveExpenses(fake);
  return c.json(fake);
});


export default expensesRoute;
