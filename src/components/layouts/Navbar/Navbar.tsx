import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    navlinks: {
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Navbar
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
                    </Link>
                    <Link to="/about" className={classes.link}>
                        About
                    </Link>
                    <Link to="/contact" className={classes.link}>
                        Contact
                    </Link>
                    <Link to="/faq" className={classes.link}>
                        FAQ
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
