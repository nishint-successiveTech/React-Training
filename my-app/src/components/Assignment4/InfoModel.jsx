"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function InfoModal() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleToggle}>
        Open Info Modal
      </Button>

      <Dialog open={open} onClose={handleToggle}>
        <DialogTitle>About This App</DialogTitle>

        <DialogContent>
          <DialogContentText>
            This is a simple React + Next.js app with Material-UI components.
            The modal you're viewing was built using MUI's Dialog component.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleToggle} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

