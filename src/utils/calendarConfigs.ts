import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

export const calendarPlugins = [
    dayGridPlugin,
    timeGridPlugin,
    listPlugin, 
    interactionPlugin,
];

export const calendarHeaderToolbar = {
    start: "today,prev,next",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
};

export const calendarButtonText = {
  prev: "back",
  next: "next",
  list: "agenda",
};
