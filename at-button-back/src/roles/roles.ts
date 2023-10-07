import { ObjectValues } from "../utils/types/object-values";

export const ORoles = {
  Admin: "Admin",
  User: "User"
} as const;

export type Roles = ObjectValues<typeof ORoles>;
