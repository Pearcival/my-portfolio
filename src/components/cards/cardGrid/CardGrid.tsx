import React from "react";
import { Grid } from "@mui/material";

import ICard from "../../../interfaces/cards/card/ICard";
import Card from "../card/Card";

interface ICardGridProps {
    cardData: ICard[],
};

const CardGrid: React.FC<ICardGridProps> = ({
    cardData,
}) => {
    return (
        <Grid container spacing={2}>
            {
                cardData.map((card) => (
                    <Grid item xs={4} sm={3} md={2} key={card.name}>
                        <Card
                            name={card.name}
                            pathToLogo={card.pathToLogo}
                            invertedBackground={card.invertedBackground}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};

export default CardGrid;