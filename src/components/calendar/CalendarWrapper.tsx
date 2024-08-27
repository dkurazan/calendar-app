import Calendar from "./Calendar";

export default function CalendarWrapper() {
    return (
        <div className="pt-[35px] pl-[75px] pr-[95px] pb-[100px] ">
            <h1 className="text-[28px] text-purple mb-8">Calendar</h1>
            <div className="bg-white px-5 pt-5 pb-[35px]">
                <h4 className="mb-[15px] text-grey text-[18px]">
                    Calendar view
                </h4>
                <Calendar />
            </div>
        </div>
    );
}
