import toast from "react-hot-toast";

export const validateData = (formData: FormData, pickedDate: string) => {
    if (formData.get("title") === "" || formData.get("time") === "") {
        toast.error("Please, fill in all required fields!");
        return null;
    }

    const eventData = {
        id: `${pickedDate}-${Math.random() * 1000}`,
        title: formData.get("title") as string,
        start: `${formData.get("date")}T${formData.get("time")}` as string,
        date: formData.get("date") as string,
        description: formData.get("notes") as string,
        backgroundColor: formData.get("color") as string,
    };

    return eventData;
};
