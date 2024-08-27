import NavItem from "./NavItem";

const ROUTES = [
    "home",
    "dashboard",
    "inbox",
    "products",
    "invoices",
    "customers",
    "chat-room",
    "calendar",
    "help-center",
    "settings",
];

export default function NavBar() {
    return (
        <aside className="max-w-[16.25%] w-full bg-purple">
            <ul>
                {ROUTES.map((route) => {
                    return <NavItem key={route} route={route} />;
                })}
            </ul>
        </aside>
    );
}
