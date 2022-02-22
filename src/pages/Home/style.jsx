import styled from "styled-components";
import Button from "@mui/material/Button";

export const HomeContainer = styled("main")(() => ({
  display: "flex",
  '.MuiTypography-h5': {
      color: 'white'
  },
  
  '.transfer__window': {
      backgroundColor: 'white',
      height: '24rem',
      width: '30rem',
      borderRadius: '20px',
      paddingTop: '20px',
      paddingBottom: '20px',
      '@media (max-width:767px)': {
          position: 'absolute',
          width: '15rem'
      }
  },
  '.transfer__main': {
      display: "flex",
      flexDirection: 'column'
  },
    '.MuiButton-contained': {
        borderRadius: '20px'
    },
    '.download__top-icon': {
        fontSize: '12px'
    },
    '.transfer__filelist': {
        display: "flex",
        borderBottom: "1px solid",
        borderTop: "1px solid",
        padding: "4px",
    }
  
}));

export const HeaderContainer = styled("header")(() => ({
  ".MuiPaper-root": {
    backgroundColor: "transparent",
  },
  ".MuiTypography-h6": {
    fontWeight: "bolder",
    fontSize: "30px",
    color: "white",
    fontStyle: "italic",
    marginRight: '30rem'
  },
  nav: {
    background: "white",
    borderRadius: "7px",
'ul,li': {
    display: 'flex'
},
li: {
    borderRight: '1px solid rgba(23,24,26,.11)'
},
    a: {
      textDecoration: "none",
    },
  },
}));

export const ButtonContainer = styled(Button)(() => ({
    marginTop: '2rem'
}));