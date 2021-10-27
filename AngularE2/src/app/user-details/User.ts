export interface User {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: Address;
  role: Role;
  username: string;
  profilePhotoUrl: string;
  companies: Company[];
  gender: Gender;
};
type Role = 'staff' | 'student' | 'manager' | 'admin';
type Gender = 'male' | 'female' | 'other';
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
