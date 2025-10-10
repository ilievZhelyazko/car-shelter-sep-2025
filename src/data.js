import fs from "fs/promises";
import { json } from "stream/consumers";
const dbSerialized = await fs.readFile("./src/db.json");
const db = JSON.parse(dbSerialized);
export async function getCats() {
  return db.cats;
}
export async function saveCat(cat) {
  //add cat to cats arr
  db.cats.push(cat);

  //Serialize db
  const dbSerialized = JSON.stringify(db, null, 2);
  //save cats arr ti file System
  await fs.writeFile("./src/db.json", dbSerialized, { encoding: "utf-8" });
}
