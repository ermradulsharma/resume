import React from "react";
import {
  eachDayOfInterval,
  format,
  startOfMonth,
  endOfMonth,
} from "date-fns";

const generateEmptyData = () => {
  const today = new Date();
  const days = eachDayOfInterval({
    start: startOfMonth(today),
    end: endOfMonth(today),
  });

  return days.map((day) => ({
    date: format(day, "yyyy-MM-dd"),
    count: 0,
  }));
};

const ActivityCalendar = () => {
  const data = generateEmptyData();

  return (
    <div style={{ textAlign: "center" }}>
      <h3 className="mb-3">Activity Calendar (Mock)</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((entry) => (
          <li key={entry.date}>
            {entry.date}: {entry.count} contributions
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityCalendar;
