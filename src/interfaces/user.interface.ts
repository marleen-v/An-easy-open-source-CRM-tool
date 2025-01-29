export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    street: string;
    zipCode: number;
    city: string;
    isAdmin?: boolean;
  }