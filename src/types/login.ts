export interface IValuesInput {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  accessToken: string;
  refreshToken: string;
  email: string;
  name: string;
  uid_usuarios: string;
  codigo_publico: string;
}
