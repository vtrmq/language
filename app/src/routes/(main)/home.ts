export async function load() {
  const res = await fetch('api/expenses');
  const expenses = await res.json();
  return { data: expenses };
}
