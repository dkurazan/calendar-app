import AccountNav from "./AccountNav";
import AccountProfile from "./AccountProfile";


export default function Account() {
    return (
        <div className="flex gap-5 pr-5">
            <AccountNav />
            <AccountProfile />
        </div>
    );
}
