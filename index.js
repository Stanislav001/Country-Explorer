import { registerRootComponent } from "expo";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./src/context/auth-context";
import { StripeProvider } from "@stripe/stripe-react-native";
import config from "./config";

function AppConfig() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retry: 1,
        retryOnMount: true,
        retryDelay: 6000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <StripeProvider publishableKey={config.STRIPE_PUBLIC_KEY}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </StripeProvider>
    </QueryClientProvider>
  );
}

registerRootComponent(AppConfig);
