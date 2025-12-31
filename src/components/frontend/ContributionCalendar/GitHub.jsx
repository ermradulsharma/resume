import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const GitHub = () => {
    return (
        <div className="github-calendar-wrapper p-4 rounded-4 shadow-sm bg-white border">
            <h4 className="fw-bold mb-4 text-dark">Contribution Activity</h4>
            <div className="d-flex justify-content-center">
                <GitHubCalendar
                    username="ermradulsharma"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    showWeekdayLabels
                    theme={{
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
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
