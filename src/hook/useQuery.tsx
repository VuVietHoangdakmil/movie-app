import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
interface Query<Res, Q> {
  queryKey: string[];
  queryFn: (query?: Q) => Promise<AxiosResponse<Res, any>>;
  query?: Q;
  enabled?: boolean;
}
const useQueryCustomer = <Res, Q extends object>({
  queryKey,
  queryFn,
  query,
  enabled = true,
}: Query<Res, Q>) => {
  const { data, error, status, isRefetching } = useQuery<Res>({
    queryKey,
    queryFn: async () => {
      const res: any = await queryFn(query);
      return res.data;
    },
    retry: 0,
    enabled,
  });
  return { data, error, status, isRefetching };
};
export { useQueryCustomer };
