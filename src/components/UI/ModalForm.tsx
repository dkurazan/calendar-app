import { FormEvent } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { addEvent } from "../../store/slices/eventsSlice";
import { closeModal } from "../../store/slices/modalSlice";
import { ModalFormProps } from "../../utils/types";
import { validateData } from "../../utils/helpers";
import Input from "./Input";
import sprite from "/sprite.svg?url";
import toast from "react-hot-toast";

export default function ModalForm({ onClose, pickedDate }: ModalFormProps) {
    const dispatch = useAppDispatch();

    const handleOnSubmit = (e: FormEvent<EventTarget>) => {
        e.preventDefault();

        // getting data
        const form = e.target as HTMLFormElement;
        const fd = new FormData(form);

        // validation
        const validatedData = validateData(fd, pickedDate);
        if (!validatedData) return;

        // creating event and fields clearing
        dispatch(addEvent(validatedData));
        dispatch(closeModal());
        form.reset();
        toast.success("Event successfully created!");
    };

    return (
        <form
            className="flex flex-col gap-5 relative p-[25px] rounded-[10px] 
            border-purple border-[1px] bg-white shadow-modal w-full"
            onSubmit={handleOnSubmit}
        >
            <button
                className="absolute top-2 right-2 focus:outline-none"
                onClick={onClose}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                >
                    <use href={sprite + "#close-btn"} />
                </svg>
            </button>
            <Input
                label="event name"
                id="title"
                type="text"
                wrapperStyles="flex flex-col gap-1"
                inputStyles="text-[9px]"
                max={30}
            />
            <Input
                label="event date"
                id="date"
                type="date"
                wrapperStyles="flex flex-col w-full justify-between"
                inputStyles="placeholder:text-soft-grey"
                defaultValue={pickedDate}
            />

            <Input
                label="event time"
                id="time"
                type="time"
                wrapperStyles="flex flex-col w-full justify-between"
                inputStyles="placeholder:text-soft-grey"
            />

            <Input
                label="notes"
                id="notes"
                type="text"
                wrapperStyles="flex flex-col w-full gap-1"
                inputStyles="text-[9px]"
            />

            <Input
                label="color"
                id="color"
                type="color"
                wrapperStyles="flex w-full justify-between flex-row"
                inputStyles="max-w-6 self-end"
            />

            <div className="mt-4 flex justify-between text-[12px]">
                <button className="text-red" onClick={onClose}>
                    Cancel
                </button>
                <button className="text-blue">Save</button>
            </div>
        </form>
    );
}
