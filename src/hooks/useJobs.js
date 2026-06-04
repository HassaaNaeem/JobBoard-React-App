import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchJobs from "../services/jobsApi";

function useJobs() {
  const queryClient = useQueryClient();

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    staleTime: Infinity,
  });

  return { isLoading, data, error, refetch };
}
export default useJobs;
