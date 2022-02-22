import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import { HeaderContainer } from "./style";
import Container from "@mui/material/Container";

const Header = () => {
  return (
    <Container>
      {/* container for handling header component */}
      <HeaderContainer
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            we
          </Typography>
          <nav>
            <ul>
              <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Help
                </Link>
              </li>

              <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Company
                </Link>
              </li>

              <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Pricing
                </Link>{" "}
              </li>

              <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Sign up
                </Link>{" "}
              </li>

              <li>
                <Link
                  variant="button"
                  color="text.primary"
                  href="#"
                  sx={{ my: 1, mx: 1.5 }}
                >
                  Log in
                </Link>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
