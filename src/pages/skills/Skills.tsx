import React from "react";

import CardGrid from "../../components/cards/cardGrid/CardGrid";
import PageTransition from "../../hoc/transition/PageTransition";
import skills from "../../assets/data/skills.json";
import certs from "../../assets/data/certs.json";

const Skills = () => (
    <PageTransition>
        <h1>What do I know?</h1>
        <h2 style={{ marginBottom: "4rem" }}>Languages and Tools</h2>
        <CardGrid cardData={skills.data} />
        <h2 style={{ marginBottom: "4rem" }}>Certifications</h2>
        <CardGrid cardData={certs.data} />
    </PageTransition>
);

export default Skills;