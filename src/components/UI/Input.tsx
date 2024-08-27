import { InputProps } from "../../utils/types";

const defaultDivStyles = "border-b-[1px] border-soft-grey";
const defaultInputStyles = "w-full focus:outline-none";

export default function Input({
    label,
    id,
    type,
    max,
    defaultValue,
    wrapperStyles,
    inputStyles,
}: InputProps) {
    return (
        <div
            className={
                wrapperStyles ? `${wrapperStyles} ${ defaultDivStyles}` : defaultDivStyles
            }
        >
            <label className="text-[9px] text-soft-grey" htmlFor={id}>
                {label}
            </label>
            <input
                className={
                    inputStyles ? `${inputStyles} ${ defaultInputStyles}` : defaultInputStyles
                }
                type={type}
                id={id}
                name={id}
                max={max ? max : undefined}
                defaultValue={defaultValue ? defaultValue : undefined}
            />
        </div>
    );
}
