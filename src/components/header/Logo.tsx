import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="max-w-[16.25%] w-full bg-dark-purple py-[25px] pl-5">
            <Link
                to="/"
                className="text-[15px] text-white tracking-[3px] uppercase font-bold"
            >
                Impekable
            </Link>
        </div>
    );
}
