import React, { useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useGetAllCategoryQuery } from "../../../app/services/category/categoryApi";

const Category = () => {
  const allCategoryRes = useGetAllCategoryQuery();

  const allCategoryData = useMemo(() => {
    if (allCategoryRes.data && allCategoryRes.data.length) {
      return allCategoryRes.data;
    }
    return [];
  }, [allCategoryRes.data]);


  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={3}>
        {allCategoryData.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6">{category}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
