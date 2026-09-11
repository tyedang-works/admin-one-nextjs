import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../services/dashboard.service";
import { DashboardData } from "../types/dashboard.types";

export const useDashboard = () => {
  return useQuery<DashboardData>({
    queryKey: ["dashboard"],
    queryFn: getDashboardData,
  });
};
