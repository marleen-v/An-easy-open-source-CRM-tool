export class User {
    id?: number;
    firstName: string;
    lastName: string;
    birthday: number;
    street: string;
    zipCode: number;
    city: string;
    email: string;
    isAdmin?: boolean;

    constructor(obj?: any){

        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.lastName : '';
        this.birthday = obj ? obj.birthday : null;
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : null;
        this.city = obj ? obj.city : '';
    }
  }