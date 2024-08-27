import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage";
import CalendarPage from "./pages/CalendarPage";
import GenericPage from "./pages/GenericPage";
import { persistStore } from "redux-persist";
import { store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <GenericPage />,
            },
            {
                path: "dashboard",
                element: <GenericPage />,
            },
            {
                path: "inbox",
                element: <GenericPage />,
            },
            {
                path: "products",
                element: <GenericPage />,
            },
            {
                path: "invoices",
                element: <GenericPage />,
            },
            {
                path: "customers",
                element: <GenericPage />,
            },
            {
                path: "chat-room",
                element: <GenericPage />,
            },
            {
                path: "calendar",
                element: <CalendarPage />,
            },
            {
                path: "help-center",
                element: <GenericPage />,
            },
            {
                path: "settings",
                element: <GenericPage />,
            },
        ],
    },
]);

const persistor = persistStore(store);

export default function Providers() {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RouterProvider router={router} />
                </PersistGate>
            </Provider>
            <Toaster />
        </>
    );
}
