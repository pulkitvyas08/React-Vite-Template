import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { DashboardCard } from "@components/PageCard/PageCard";

export const UserProfile: React.FC = () => {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                <DashboardCard mainText={"U S E R   P R O F I L E"} />
            </Card>
        </Box>
    );
};
