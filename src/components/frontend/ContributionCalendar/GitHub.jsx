import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTheme } from "../../../context/ThemeContext";

const GitHub = () => {
    const { theme } = useTheme();

    return (
        <div className="github-calendar-wrapper p-4 rounded-4 shadow-sm border" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
            <h3 className="h4 fw-bold mb-4" style={{ color: 'var(--text-dark)' }}>Contribution Activity</h3>
            <div className="d-flex justify-content-center">
                <GitHubCalendar
                    username="ermradulsharma"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    showWeekdayLabels
                    colorScheme={theme}
                    theme={{
                        light: ['#ebedf0', '#dbeafe', '#60a5fa', '#065cc2', '#1e3a8a'],
                        dark: ['#161b22', '#0e2a47', '#004d99', '#3b82f6', '#4dabf7'],
                    }}
                    renderBlock={(block, activity) => (
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-${activity.date}`}>
                                    {activity.count} contributions on {activity.date}
                                </Tooltip>
                            }
                        >
                            {block}
                        </OverlayTrigger>
                    )}
                />
            </div>
        </div>
    );
};

export default GitHub;
