export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: Role;
  username: string;
  profilePhotoUrl: string;
  companies?: Company[];
  gender: Gender;
};
// type Role = 'staff' | 'student' | 'manager' | 'admin';
export enum Role {
  STAFF = 'staff',
  STUDENT = 'student',
  MANAGER = 'manager',
  ADMIN = 'admin'
}
// type Gender = 'male' | 'female' | 'other';
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}
interface Company {
  id?: number;
  name: string;
  description: string;
  location?: Address;
};
interface Address {
  city: string;
  street: string;
  postalCode: string;
}
