import { useLocation } from "react-router-dom";

export default function GenericPage() {
    const location = useLocation();
    
    return (
        <div className="h-full grid place-content-center">
            <h2 className="text-5xl capitalize">
                {location.pathname === '/' ? 'Home Page' : location.pathname.replace("/", "").replace("-", " ")}
            </h2>
        </div>
    );
}
