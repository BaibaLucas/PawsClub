/** All imports @keys */

/* KEYS */
/**
 ---- @apiUrl = Back Paws API
*/

const baseURL =
  process.env.NODE_ENV === "production"
  ? "api"
  : "http://localhost:3001";
  
export const apiUrl = baseURL;