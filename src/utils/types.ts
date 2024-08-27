export type DateInfo = {
    dateStr: string;
    jsEvent: { pageX: number; pageY: number };
};

export type InputProps = {
    label: string;
    id: string;
    type: string;
    max?: number;
    defaultValue?: string;
    wrapperStyles?: string;
    inputStyles?: string;
};

export type Event = {
    id: string;
    title: string;
    start: string;
    date: string;
    description?: string;
    backgroundColor: string;
};

export type ModalFormProps = {
    onClose: (e: any) => void;
    pickedDate: string;
};
