import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  Box,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaHome, FaBook, FaListUl, FaStar } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css"; // Asegúrate de que esté bien importado

const Header = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [navigationRoute, setNavigationRoute] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleNavigationClick = (route, message) => {
    setNavigationRoute(route);
    setDialogMessage(message);
    setConfirmDialog(true);
  };

  const handleConfirmNavigation = () => {
    setConfirmDialog(false);
    navigate(navigationRoute);
  };

  const navigationItems = [
    { icon: <FaHome size={20} />, text: "Home", onClick: () => handleNavigationClick("/", "¿Seguro que quieres ir a Home?") },
    { icon: <FaBook size={20} />, text: "Verbs", onClick: () => handleNavigationClick("/verbs", "¿Seguro que quieres ir a Verbs?") },
    { icon: <FaListUl size={20} />, text: "Vocabulary", onClick: () => handleNavigationClick("/vocabulary", "¿Seguro que quieres ir a Vocabulary?") },
    { icon: <FaStar size={20} />, text: "English +300", onClick: () => handleNavigationClick("/english+300", "¿Seguro que quieres ir a English +300?") }
  ];

  return (
    <>
      <AppBar className="app-bar">
        <Toolbar>
          <Typography variant="h6" className="toolbar-title">
            English learning
          </Typography>

          {!isMobile && (
            <Box>
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  startIcon={item.icon}
                  onClick={item.onClick}
                  className="styled-button"
                  disableElevation
                  aria-label={item.text}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
      >
        {navigationItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleMobileMenuClose();
              item.onClick && item.onClick();
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              {item.icon}
              <Typography>{item.text}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>

      <Dialog
        open={confirmDialog}
        onClose={() => setConfirmDialog(false)}
        aria-labelledby="confirm-dialog"
      >
        <DialogTitle id="confirm-dialog">Confirm Navigation</DialogTitle>
        <DialogContent>
          {dialogMessage}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmNavigation} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
