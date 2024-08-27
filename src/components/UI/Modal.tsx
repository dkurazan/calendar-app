import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeModal } from "../../store/slices/modalSlice";
import sprite from "/sprite.svg?url";
import ModalForm from "./ModalForm";

export default function Modal() {
    const modalRef = useRef<HTMLDialogElement | null>(null);
    const [clientWidth, setClientWidth] = useState(0);
    const { open, pickedDate, position } = useAppSelector(
        (state) => state.modal
    );
    const dispatch = useAppDispatch();

    const handleOnClose = (e: any) => {
        e.preventDefault();
        dispatch(closeModal());

        // reset the form
        if (e._reactName === "onClose") {
            e.target.querySelector("form").reset();
        }
    };

    const onClickOutside = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (modalRef.current && e.target === modalRef.current) {
            dispatch(closeModal());
        }
    };

    useEffect(() => {
        const modal = modalRef.current;

        if (open) {
            modal!.showModal();
        }

        if (modalRef.current) {
            setClientWidth(modalRef.current.clientWidth);
        }

        return () => modal!.close();
    }, [open]);

    return createPortal(
        <dialog
            className="items-center backdrop:bg-transparent bg-transparent m-0 absolute min-w-[201px]"
            style={{ top: position.y, left: position.x - (clientWidth / 2 || 100) }}
            ref={modalRef}
            onClose={handleOnClose}
            onClick={onClickOutside}
        >
            <div className="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    className="relative top-[1px]"
                >
                    <use href={sprite + "#triangle"} />
                </svg>

                <ModalForm onClose={handleOnClose} pickedDate={pickedDate} />
            </div>
        </dialog>,
        document.getElementById("modal")!
    );
}
