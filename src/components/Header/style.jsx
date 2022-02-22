import styled from "styled-components";

export const HeaderContainer = styled("header")(() => ({
  ".MuiPaper-root": {
    backgroundColor: "transparent",
  },
  ".MuiTypography-h6": {
    fontWeight: "bolder",
    fontSize: "30px",
    color: "white",
    fontStyle: "italic",
    marginRight: "30rem",
  },
  nav: {
    background: "white",
    borderRadius: "7px",
    position: 'absolute',
    right: 0,
    "ul,li": {
      display: "flex",
    },
    li: {
      borderRight: "1px solid rgba(23,24,26,.11)",
    },
    a: {
      textDecoration: "none",
    },
  },
}));
