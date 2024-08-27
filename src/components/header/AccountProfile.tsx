import sprite from "/sprite.svg?url";
import avatar from "../../assets/Avatar.png";

export default function AccountProfile() {
    return (
        <button className="flex items-center gap-[10px]">
            <div className="flex gap-[15px] items-center text-[13px] text-grey font-normal font-source-sans">
                <span>John Doe</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                >
                    <use href={sprite + "#arrow-down"} />
                </svg>
            </div>
            <img
                className="block w-[38px] h-[38px]"
                src={avatar}
                alt="User avatar"
                height="38"
                width="38"
                loading="lazy"
            />
        </button>
    );
}
