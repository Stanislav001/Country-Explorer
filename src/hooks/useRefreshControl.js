import { useState, useCallback } from "react";

const useRefreshControl = (refetch, waitTime = 400) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    await new Promise((resolve) => setTimeout(resolve, waitTime));
    setRefreshing(false);
  }, [refetch, waitTime]);

  return { refreshing, onRefresh };
};

export default useRefreshControl;
