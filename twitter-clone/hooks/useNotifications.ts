import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useNotifications = ({ userId }: { userId?: string }) => {
  const url = userId ? `/api/notifications/${userId}` : null;

  const { data, isLoading, mutate, error } = useSWR(url, fetcher);

  return { data, isLoading, mutate, error };
};

export default useNotifications;
