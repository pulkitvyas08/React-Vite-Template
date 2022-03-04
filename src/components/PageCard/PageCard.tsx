import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface IDashboardProps {
    mainText: string,
}

export const DashboardCard: React.FC<IDashboardProps> = (mainText) => {
    return(
        <React.Fragment>
            <CardContent>
                <Typography
                    sx={{ fontSize: 50 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {mainText}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
}
