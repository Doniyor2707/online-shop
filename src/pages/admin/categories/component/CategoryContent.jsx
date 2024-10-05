import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { memo } from "react";
import { adminRoutes } from "../../../../constans/path";
import { Link } from "react-router-dom";

const CategoryContent = ({ id, name, image, onDelete }) => {
  // delete id
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={name}
            sx={{
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </CardActionArea>
        <CardContent>
          <Typography variant="h6" color="text.primary" gutterBottom>
            {name}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <IconButton
              sx={{ backgroundColor: "#e0f7fa", p: 1.5 }}
              LinkComponent={Link}
              to={adminRoutes.categoryUpdate.replace(':categoryId',id)}
            >
              <EditIcon sx={{ color: "#00796b" }} />
            </IconButton>

            <IconButton
              sx={{ backgroundColor: "#ffebee", p: 1.5 }}
              onClick={() => handleDelete(id)}
            >
              <DeleteOutline sx={{ color: "#d32f2f" }} />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(CategoryContent);
