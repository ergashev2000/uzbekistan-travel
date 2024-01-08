"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import SearchModal from "@/components/SearchModal";

function Providers({ children }: React.PropsWithChildren) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default Providers;
