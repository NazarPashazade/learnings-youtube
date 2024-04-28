import { Request, Response, Router } from "express";
import {
  getUsers,
  createUser,
  getCountries,
  getAvarageEarningsByCountry,
} from "./userService";

export const mainRouter = Router();

// 1. Fetch all user details as it is in the file >> Eg. : [{...userData1..}, ...]
// 2. Add new user. Save new data in the JSON file.
// 3. Fetch distinct countries with number of users >> Eg.: { country1: 3; country2: 12, ... }
// 4. (*) Provide statistics on all countries in one request: average earnings of the 10 users with highest earnings per country.  >> Eg.: { country1: 3; country2: 12, ... }
// 5. (*) Optimize for performance: consider a huge database, and that the frequency of user updates is low, while the frequency of statistics requests is very high.

// [

//   Latvia : 10
//   Latvia : 8
//   Latvia : 9
//   Latvia : 4

//   Latvia : 31

// ]

mainRouter.use((req: any, res: any, next) => {
  res.customdata = { name: "John Doe" };
  next("OOOOOOOO");
});

mainRouter.use((req: any, res: any, next) => {
  res.customdata = { name: "Nazar Pasha" };
  next();
});

mainRouter.get(`/hello`, (req: any, res: any) => {
  try {
    console.log({ customdata: res.customdata });
    const userName = req.query["user-name"];
    res.json(`Hello ${userName}!`);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

mainRouter.get("/users", (req: Request, res: Response) => {
  try {
    const users = getUsers();

    res.json(users);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

mainRouter.post("/users", (req: Request, res: Response) => {
  try {
    const newUser = createUser(req);
    res.json(newUser);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

mainRouter.get("/countries", (req: Request, res: Response) => {
  try {
    const result = getCountries();

    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

mainRouter.get("/avarageEarningsByCountry", (req: Request, res: Response) => {
  try {
    const result = getAvarageEarningsByCountry();

    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
