import sprite from "/sprite.svg?url";

const ICONS = ["ball", "message", "bell"];

export default function AccountNav() {
    return (
        <nav className="flex items-center gap-[30px] after:block after:w-[1px] after:h-[28px] after:bg-light-grey">
            {ICONS.map((icon) => {
                return (
                    <button key={icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <use href={sprite + `#${icon}`} />
                        </svg>
                    </button>
                );
            })}
        </nav>
    );
}
