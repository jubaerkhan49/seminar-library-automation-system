import * as React from "react";
import Paperbase from "../Paperbase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
function MediaCard() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={5} columnSpacing={-40} sx={{marginTop: '1px',marginLeft: '20px'}}>
          <Grid item xs={6}>
            <Card
              sx={{
                bgcolor: "primary.main",
                color: "#ffffff",
                maxWidth: 300,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Jubaer Ahmad Khan
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ color: "#ffffff" }}
                >
                  makes a request for Operating Systems - 2nd Edition Book
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#ffffff" , fontWeight: 'bold'}}>
                  Accept
                </Button>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                bgcolor: "#651fff",
                color: "#ffffff",
                maxWidth: 300,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Hasan Al mamun
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ color: "#ffffff" }}
                >
                  makes a request for Computer Graphics - 1st Edition Book
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Accept
                </Button>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                bgcolor: "#ec407a",
                color: "#ffffff",
                maxWidth: 300,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Tamjid Islam
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ color: "#ffffff" }}
                >
                  makes a request for Operating Systems - 2nd Edition Book
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Accept
                </Button>
                <Button size="small" sx={{ color: "#ffffff" , fontWeight: 'bold'}}>
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                bgcolor: "#3f51b5",
                color: "#ffffff",
                maxWidth: 300,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sovon Mallick
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ color: "#ffffff" }}
                >
                  makes a request for Operating Systems - 2nd Edition Book
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Accept
                </Button>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                bgcolor: "#009688",
                color: "#ffffff",
                maxWidth: 300,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Taufiq Islam
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ color: "#ffffff" }}
                >
                  makes a request for Operating Systems - 2nd Edition Book
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Accept
                </Button>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                bgcolor: "#673ab7",
                color: "#ffffff",
                maxWidth: 300,
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Soad Anam
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ color: "#ffffff" }}
                >
                  makes a request for Operating Systems - 2nd Edition Book
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Accept
                </Button>
                <Button size="small" sx={{ color: "#ffffff", fontWeight: 'bold' }}>
                  Reject
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
function BookRequest() {
  return (
    <div>
      <Paperbase componentProp={<MediaCard />} />
    </div>
  );
}
export default BookRequest;
