import React from "react";
import ITimelineItem from "../../interfaces/timeline/timelineItem/ITimelineItem";
import TimelineItem from "./timelineItem/TImelineItem";

import "./Timeline.css";

interface ITimelineProps {
    timelineItems: ITimelineItem[]
}

const Timeline: React.FC<ITimelineProps> = ({
    timelineItems,
}) => (
    <div className="Timeline">
        {
            timelineItems.map((timelineItem: ITimelineItem, index) => (
                <TimelineItem
                    company={timelineItem.company}
                    title={timelineItem.title}
                    description={timelineItem.description}
                    dateRange={timelineItem.dateRange}
                    pathToLogo={timelineItem.pathToLogo}
                    key={index}
                />
            ))
        }
    </div>
);

export default Timeline;