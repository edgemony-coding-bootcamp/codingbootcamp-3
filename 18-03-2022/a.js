import { sum, name as nameB } from "./b.js";
import { sub } from "./c.js";

const name = "Salvatore";

console.log(name, "from module a");
console.log(nameB, "from module a");
console.log(sum(2, 2));
console.log(sub(3, 2));
