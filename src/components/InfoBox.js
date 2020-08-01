import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

const InfoBox = ({ title, cases, total }) => {
  return (
    <Card className="info-box">
      <CardContent>
        <Typography className="info-box__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="info-box__cases">{cases}</h2>
        <Typography className="info-box__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
