import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store, persistor } from './src/app/store';
import MainNavigation from "./src/routes/MainNavigation";
import { theme } from "./src/style/theme";
import { ThemeProvider } from "styled-components/native";
import { PersistGate } from "redux-persist/integration/react";

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainNavigation />
        </ThemeProvider>
        </PersistGate>
    </Provider>
  );
}