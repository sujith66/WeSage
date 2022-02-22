import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { HomeContainer, ButtonContainer } from "./style";
import Transfer from "../../components/Images/Transfer/Transfer";
import Download from "../../components/Images/Download/Download";
import Header from "../../components/Header/Header";

function Home() {

  const handleDownload = ()=>{
    console.log('Starting download')
  };

  return (
    <Container>

      {/* Global style component  for handling css resets */}
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />

      {/* Container for handling Home component elements */}
      <HomeContainer
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <div className="transfer__window">
          <Transfer />
          <div className="download__top-icon">
            <h3 className="margin__default">Ready when you are</h3>
            <p className="margin__default">Transfer expires in four days</p>
          </div>
          <p>GoProposal Frontend test </p>

          <div className="transfer__filelist">
            <div>
              <h4 className="margin__default" style={{ fontSize: "14px " }}>
                recruitment-frontend-test.zip
              </h4>
              <p className="margin__default" style={{ display: "flex" }}>
                652kb zip
              </p>
            </div>
            <Download color />
          </div>

          {/* Container for handlng button styles */}
          <ButtonContainer variant="contained" onClick={handleDownload}>Download</ButtonContainer>
        </div>
        <div className="transfer__main">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Transfer your data
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            Quickly build an effective transfer table for your potential
            customers with this layout. It&apos;s built with default MUI
            components with little customization.
          </Typography>
        </div>
      </HomeContainer>
    </Container>
  );
}

export default Home;
