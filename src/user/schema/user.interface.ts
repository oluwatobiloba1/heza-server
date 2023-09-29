
import { Roles } from '../roles/roles';


export interface IUser{
  firstname: string
  lastname: string;
  email: string;
  password: string;
  DOB: Date;
  role: Roles;
phonenumber: string;
imageUrl: string;
_id: string;
createdAt: Date;
updatedAt: Date;
}

