export interface IMetrics {
  busto: number;
  calcado: number;
  cintura: number;
  coxa: number;
  quadril: number;
  torax: number;
  uid_medidas: string;
  uid_usuarios: string;
  data: Date;
}

export interface INewMetrics {
  busto?: number;
  calcado?: number;
  cintura?: number;
  coxa?: number;
  quadril?: number;
  torax?: number;
  uid_usuarios?: string;
}

export type IUpdateMetrics = INewMetrics & {
  uid_usuarios?: string;
};
