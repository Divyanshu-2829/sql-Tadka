const TABLE_NAMES = [
  "categories",
  "customers",
  "employee_territories",
  "employees",
  "order_details",
  "orders",
  "products",
  "regions",
  "shippers",
  "suppliers",
  "territories",
];

export const queries = [
  { label: "Query 1", value: "SELECT * FROM employee_territories" },
  { label: "Query 2", value: "SELECT * FROM orders" },
  { label: "Query 3", value: "SELECT * FROM products" },
  { label: "Query 4", value: "SELECT * FROM customers" },
  { label: "Query 5", value: "SELECT * FROM employees" },
  { label: "Query 6", value: "SELECT * FROM suppliers" },
  { label: "Query 7", value: "SELECT * FROM categories" },
  { label: "Query 8", value: "SELECT * FROM shippers" },
  { label: "Query 9", value: "SELECT * FROM regions" },
  { label: "Query 10", value: "SELECT * FROM territories" },
];
export default TABLE_NAMES;
