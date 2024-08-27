import sprite from "/sprite.svg?url";

export default function SearchBar() {
    return (
        <form className="flex items-center grow">
            <button
                className="h-full pl-5 pr-3"
                onClick={(e) => e.preventDefault()}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                >
                    <use href={sprite + "#search"} />
                </svg>
            </button>
            <input
                className="h-full text-[13px] text-grey w-full focus:outline-none placeholder:text-grey"
                type="text"
                placeholder="Search transactions, invoices or help"
            />
        </form>
    );
}
