import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavBar from "../components/navigation/Navigation";


export default function RootPage() {
    return (
        <>
            <Header />
            <main className="font-source-sans flex ">
                <NavBar />
                <section className="w-full bg-base-grey pageHeight">
                    <Outlet />
                </section>
            </main>
        </>
    );
}
