import { Request } from "express";
import userList from "./user-collection.json";

interface UserModel {
  id: number;
  earnings: string;
  country: string;
  name: string;
}

export function getUsers(): UserModel[] {
  return userList;
}

export function createUser(req: Request): UserModel {
  const data = req.body;
  userList.push(data);
  return data;
}

export function getCountries(): any {
  const data: any = {};

  userList.forEach(({ country }) => {
    if (Object.keys(data).includes(country)) {
      data[`${country}`] = data[`${country}`] + 1;
    } else {
      data[country] = 0;
    }
  });

  return data;
}

// [

//   Latvia : 10
//   Latvia : 8
//   Latvia : 9
//   Latvia : 4

//   Latvia : 31

// ]

// {
//   "id": 22,
//   "earnings": "$5.94",
//   "country": "Mexico",
//   "name": "Sylvester Witt"
// },

function extractAmount(earnings: string) {
  return Number(earnings.slice(1, earnings.length));
}

export function getAvarageEarningsByCountry(): any {
  const data: any = {};


  
  // {Latvia:[10,9]}
  // {US:[10,9,4,8]}


    // {Latvia:19}
    // {US:31}

 
 
  // userList.forEach(({ country, earnings }) => {  //LOOP N
  //   const amount = extractAmount(earnings);

  //   if (Object.keys(data).includes(country)) {
  //     data[`${country}`] = data[`${country}`].push(amount);

  //     data[`${country}`].sort();  // LOOP N

  //     let sum = 0;

  //     if (data[`${country}`].length > 10) {
  //       data[`${country}`].forEach((item) => {  //LOOP N
  //         sum + item;
  //       });
  //     }
  //     data[`${country}`] = "$" + sum;
  //   }
  // });

  // ]

  try {
    userList.forEach(({ country, earnings }) => {
      const amount = extractAmount(earnings);
      if (Object.keys(data).includes(country)) {
        const previousAmount = extractAmount(data[`${country}`]);
        data[`${country}`] = "$" + (previousAmount + amount);
      } else {
        data[country] = 0;
      }
    });
  } catch (err) {
    console.log(err);
  }

  return data;
}
