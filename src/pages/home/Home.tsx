import React from "react";
import { Grid } from "@mui/material";

import PageTransition from "../../hoc/transition/PageTransition";
import InlineNavigationItem from "../../components/navigation/inlineNavigationItem/InlineNavigationItem";
import "./Home.css";

const Home = () => (
    <PageTransition>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <>
                    <div className="FlexAlignCenter">
                        <h2>Hi, I'm Josh.</h2>
                        <img className="AvatarMobile" src="/images/avatar.png" alt="My Avatar" />
                    </div>
                    <h1>A Software Developer from the UK.</h1>
                    <h3>
                        Originally self-taught, I'm a Web Developer with 10 years experience and in-depth knowledge of a number of technologies and languages.
                    </h3>
                    <h3>
                        I create applications that help customers solve business challenges and bring their technical strategy to life.
                    </h3>
                    <InlineNavigationItem
                        title="Learn more >"
                        path="/about"
                    />
                </>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="FlexJustifyCenter">
                <img className="AvatarDesktop" src="/images/avatar.png" alt="My Avatar" />
            </Grid>
        </Grid>
    </PageTransition>
);

export default Home;