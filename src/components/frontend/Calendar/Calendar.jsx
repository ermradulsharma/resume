import React, { useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dateClick, drag-n-drop
import listPlugin from "@fullcalendar/list";

export default function ReactFullCalendarStarter() {
    const [weekends] = useState(true);
    const [events, setEvents] = useState([
        { id: "1", title: "Kickoff Meeting", start: todayAt(10), end: todayAt(11) },
        { id: "2", title: "Code Review", start: todayAt(14), end: todayAt(15) },
        { id: "3", title: "Deployment", start: addDays(new Date(), 1).toISOString().slice(0, 10) }
    ]);

    const handleDateClick = useCallback((info) => {
        const title = prompt("Event title?");
        if (!title) return;
        const newEvent = {
            id: String(Date.now()),
            title,
            start: info.date,
            allDay: info.allDay,
        };
        setEvents((prev) => [...prev, newEvent]);
    }, []);

    const handleEventDrop = useCallback((info) => {
        setEvents((prev) =>
            prev.map((e) => (e.id === info.event.id ? { ...e, start: info.event.start, end: info.event.end } : e))
        );
    }, []);

    const handleEventResize = useCallback((info) => {
        setEvents((prev) =>
            prev.map((e) => (e.id === info.event.id ? { ...e, start: info.event.start, end: info.event.end } : e))
        );
    }, []);

    const handleEventClick = useCallback((info) => {
        if (window.confirm(`Delete event "${info.event.title}"?`)) {
            setEvents((prev) => prev.filter((e) => e.id !== info.event.id));
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="rounded-2xl bg-white p-4 shadow">
                    <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                        }}
                        weekends={weekends}
                        selectable={true}
                        editable={true}
                        droppable={true}
                        events={events}
                        dateClick={handleDateClick}
                        eventDrop={handleEventDrop}
                        eventResize={handleEventResize}
                        eventClick={handleEventClick}
                        height="auto"
                        nowIndicator={true}
                        dayMaxEventRows={3}
                        eventTimeFormat={{ hour: "2-digit", minute: "2-digit", meridiem: false }}
                        eventClassNames={(_arg) => ["rounded-md", "px-1.5", "py-0.5"]}
                        displayEventTime={true}
                    />
                </div>
            </div>
        </div>
    );
}
function todayAt(hour) {
    const d = new Date();
    d.setHours(hour, 0, 0, 0);
    return d;
}

function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}
