"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ButtonPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">This is /mui/button route</Typography>
      <Button variant="contained" startIcon={<FavoriteIcon />} sx={{ mt: 2 }}>
        Like
      </Button>
    </Box>
  );
}
