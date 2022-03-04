import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { DashboardCard } from "@components/PageCard/PageCard";

export const Dashboard: React.FC = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <DashboardCard mainText={"D A S H B O A R D"} />
            </Card>
        </Box>
    );
};
