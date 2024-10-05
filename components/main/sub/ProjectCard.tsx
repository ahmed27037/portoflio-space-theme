"use client";

import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from "@mui/material";

interface Props {
  src: string;
  src2?: string;
  src3?: string;
  src4?: string;
  src5?: string;
  title: string;
  description: string;
  href?: string; // Link to the website
  github?: string; // Link to the GitHub repository
}

const ProjectCard = ({ src, src2, src3, src4, src5, title, description, href, github }: Props) => {
  return (
    <div>
      <Card sx={{ backgroundColor: "#1a1a1a", color: "white", borderRadius: 2 }}>
        {/* Image Section: Flexbox to align images side by side */}
        <Box display="flex" justifyContent="space-between" alignItems="center" padding={2}>
          {/* First Image */}
          <CardMedia
            component="img"
            height="200"
            image={src}
            alt={title}
            sx={{ width: "48%", objectFit: "cover", borderRadius: 2 }}
          />

          {src2 && (
            <CardMedia
              component="img"
              height="200"
              image={src2}
              alt={`${title} - additional`}
              sx={{ width: "48%", objectFit: "cover", borderRadius: 2 }}
            />
          )}
          {src3 && (
            <CardMedia
              component="img"
              height="50"
              image={src3}
              alt={`${title} - additional`}
              sx={{ width: "48%", objectFit: "cover", borderRadius: 2 }}
            />
          )}
          {src4 && (
            <CardMedia
              component="img"
              height="50"
              image={src4}
              alt={`${title} - additional`}
              sx={{ width: "48%", objectFit: "cover", borderRadius: 2 }}
            />
          )}
          {src5 && (
            <CardMedia
              component="img"
              height="50"
              image={src5}
              alt={`${title} - additional`}
              sx={{ width: "48%", objectFit: "cover", borderRadius: 2 }}
            />
          )}
        </Box>

        {/* Card Content */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          {/* Render description */}
          <Typography variant="body2" sx={{ fontSize: "1.2rem", color: "grey.400" }}>
            {description}
          </Typography>
        </CardContent>

        {/* Action Buttons */}
        <CardActions>
          {href && (
            <Button
              size="small"
              component="a"
              href={href} // Link to the website
              target="_blank"
              rel="noopener noreferrer" // Security best practice
              variant="contained"
              sx={{ backgroundColor: "#007BFF", ":hover": { backgroundColor: "#0056b3" } }}
            >
              Website
            </Button>
          )}
          {github && (
            <Button
              size="small"
              component="a"
              href={github} // Link to the GitHub repository
              target="_blank"
              rel="noopener noreferrer" // Security best practice
              variant="contained"
              sx={{ backgroundColor: "green", ":hover": { backgroundColor: "#0056b3" } }}
            >
              Github
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
