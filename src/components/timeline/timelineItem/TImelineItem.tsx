import React from "react";
import { motion } from "framer-motion";

import ITimelineItem from "../../../interfaces/timeline/timelineItem/ITimelineItem";

import "./TimelineItem.css";

const TimelineItem: React.FC<ITimelineItem> = ({
    company,
    title,
    description,
    dateRange,
    pathToLogo,
}) => (
    <div className="TimelineItem">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1 },
            }}
            className="TimelineItemContent"
        >
            <h3>
                {title}
                <br />
                {company}
            </h3>
            <p>{description}</p>
            <div className="Arrow"></div>
        </motion.div>
        <div className="TimelineItemCenter">
            <motion.span
                initial={{ scale: 0 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { scale: 1, rotate: 360 },
                }}
                className="Logo"
            >
                <img style={{ maxWidth: "100%", objectFit: "contain" }} src={pathToLogo} alt={company} />
            </motion.span>
            <motion.span
                initial={{ scale: 0 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { scale: 1 },
                }}
            >
                <p>{dateRange}</p>
            </motion.span>
        </div>
    </div>
);

export default TimelineItem;