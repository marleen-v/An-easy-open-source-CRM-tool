export interface User {
    id?: string;
    email:string;
    firstName: string;
    lastName: string;
    street: string;
    zipCode: number;
    city: string;
    birthday: number;
    isAdmin?: boolean;
  }