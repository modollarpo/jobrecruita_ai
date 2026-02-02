export type UserRole = 'candidate' | 'recruiter' | 'admin' | 'super_admin';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}
