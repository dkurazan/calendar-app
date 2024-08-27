import FullCalendar from "@fullcalendar/react";
import {
    calendarButtonText,
    calendarHeaderToolbar,
    calendarPlugins,
} from "../../utils/calendarConfigs";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { openModal } from "../../store/slices/modalSlice";
import { DateInfo } from "../../utils/types";

export default function Calendar() {
    const events = useAppSelector((state) => state.events);
    const dispatch = useAppDispatch();

    const handleDateClick = (dateInfo: DateInfo) => {
        dispatch(
            openModal(dateInfo)
        );

        console.log(dateInfo);
        
    };

    return (
        <>
            <FullCalendar
                plugins={calendarPlugins}
                headerToolbar={calendarHeaderToolbar}
                buttonText={calendarButtonText}
                dayMaxEvents={true}
                events={events}
                droppable={true}
                editable={true}
                dateClick={handleDateClick}
            />
        </>
    );
}
