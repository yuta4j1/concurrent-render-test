import { User } from "../models/user";

let userList: User[] | null = null;

export const useUser = (): User[] => {
  if (!userList) {
    throw fetch("http://localhost:3004/users").then(async r => {
      const fetched = await r.json();
      userList = fetched;
    });
  }

  return userList;
};
