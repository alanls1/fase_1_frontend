/* eslint-disable @typescript-eslint/no-explicit-any */
import { base } from ".";
import type { INewMetrics, IUpdateMetrics } from "../types/metrics";

export const metrics = async (uid_usuarios: string) => {
  try {
    const res = await base.get("/metrics", { params: { uid_usuarios } });
    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const newMetrics = async (data: INewMetrics) => {
  try {
    const res = await base.post("/metrics", { ...data });
    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const updateMetrics = async (data: IUpdateMetrics) => {
  try {
    const res = await base.put("/metrics", { ...data });
    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};

export const deleteMetric = async (uid_medidas?: string) => {
  try {
    const res = await base.delete("/metrics", { params: { uid_medidas } });
    return res.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
};
