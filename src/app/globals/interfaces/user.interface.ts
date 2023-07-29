export interface IUser {
  id: number;
  name: string;
  email: string;
  role?: string;
  isActive?: boolean;
  memberSince?: string;
  picture?: string;
  theme?: string;
  accentColor?: string;
}