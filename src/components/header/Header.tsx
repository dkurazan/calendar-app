import Account from "./Account";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
    return (
        <header className="flex font-source-sans shadow-bottom">
            <Logo />
            <SearchBar />
            <Account />
        </header>
    );
}
