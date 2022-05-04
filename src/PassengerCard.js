import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SendIcon from '@mui/icons-material/Send'
import { styled } from '@mui/material/styles';

export default function Cards() {
  const [Passenger, setPassenger] = useState(
    [{ name: "נעמה פרנק", phone: "0556772275", want: "אני רוצה שקט לאורך כל הטיסה", constrain: ["ימין", "חלון", "רווח"] },
    { name: "ציפי ורנר", phone: "0556772278", want: "אני מעוניין לשבת רק ליד גבר", constrain: ["שמאל", "עסקים"] },
    { name: "ריקי לוסטיג", phone: "0556772275", want: "אני רוצה נוסע ששפת האם שלו אנגלית", constrain: ["רווח", "חלון"] },
    { name: "נעמה פרנק", phone: "0556772275", want: "אני רוצה שקט לאורך כל הטיסה", constrain: ["חלון"] },
    { name: "ציפי ורנר", phone: "0556772278", want: "אני מעוניין לשבת רק ליד גבר", constrain: ["ימין", "חלון", "רווח"] },
    { name: "ריקי לוסטיג", phone: "0556772275", want: "אני רוצה נוסע ששפת האם שלו אנגלית", constrain: ["ימין", "חלון", "רווח"] },
    { name: "נעמה פרנק", phone: "0556772275", want: "אני רוצה שקט לאורך כל הטיסה", constrain: ["ימין", "חלון", "רווח"] },
    { name: "ציפי ורנר", phone: "0556772278", want: "אני מעוניין לשבת רק ליד גבר", constrain: ["ימין", "חלון", "רווח"] }]
  )
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#069A8E',

    },
    '& .MuiRating-iconHover': {
      color: '#069A8E',
    },
  });
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: '8px', textAlign: "center" }}>
        <Grid container spacing={{ xs: 2, md: 3, }}>
          {Passenger.map((item) => (
            <Grid item xs={2} sm={3} md={3} key={item.ID}>
              <Card sx={{ maxWidth: 345, textAlign: "center", marginTop: 10 }}>
                <Avatar style={{ marginLeft: 120, height: 100, width: 100 }} src="/broken-image.jpg" />
                <CardContent >
                  <Typography style={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
                    {item.name}
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >

                      <StyledRating
                        name="customized-color"
                        defaultValue={5}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                      />

                    </Box>
                  </Typography>

                    האילוצים שלי:{item.constrain.map((i) => i + ", ")}

                  <Typography variant="body2" color="text.secondary">
                  </Typography>
                  {item.want}
                </CardContent>
                <CardContent >


                  {item.phone}

                </CardContent>
                <CardContent style={{ textAlign: "center" }}>
                  <Button style={{ textAlign: "center", backgroundColor: '#069A8E' }} variant="contained" endIcon={<SendIcon />}>
                    Send mail
                  </Button>

                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>

  );
}