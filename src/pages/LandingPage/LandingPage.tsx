import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { DashboardCard } from "@components/PageCard/PageCard";

export const LandingPage: React.FC = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <DashboardCard mainText={"L A N D I N G   P A G E"} />
            </Card>
        </Box>
    );
};
