import React from "react";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Searchfield from "../searchBar";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "3px 7px",
  },
}));

const MainBar = () => {
  const { totalItems } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <Grid item xs={6} md={8}>
        <Searchfield />
      </Grid>
      <Grid item xs={2} md={2}>
        <IconButton
          color="#000"
          aria-label="add to shopping cart"
          style={{ fontSize: "16px" }}
        >
          <StyledBadge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        {token ? (
          <>
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <IconButton
                style={{ fontSize: "16px", color: "#000" }}
                onClick={() => dispatch(removeUser())}
              >
                Logout
                <LogoutIcon />
              </IconButton>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <IconButton style={{ fontSize: "16px", color: "#000" }}>
                Login
                <LoginIcon />
              </IconButton>
            </Link>
          </>
        )}
      </Grid>
    </>
  );
};

export default MainBar;
