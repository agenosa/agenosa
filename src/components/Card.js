import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import vancouver from "../images/vancouver.png"

const card = (
    
  <React.Fragment>
    <CardContent sx={{ padding: "24px", display: "flex", justifyContent: "space-evenly", backgroundColor:"#1b3b5f"}}>
    <Tooltip title="adrian.genosa@gmail.com">
      <IconButton href = "mailto: adrian.genosa@gmail.com">
        <MailOutlineIcon className="contact_icons" />
      </IconButton>
      </Tooltip>

      <Tooltip title="github.com/agenosa">
      <IconButton href="https://github.com/agenosa" target="_blank">
        <GitHubIcon className="contact_icons"/>
      </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn">
      <IconButton href="https://www.linkedin.com/in/adrian-genosa-30930b236/" target="_blank">
        <LinkedInIcon className="contact_icons" />
      </IconButton>
      </Tooltip>

      <Tooltip title="Resume">
      <IconButton href="https://drive.google.com/file/d/1zeE_QpbALCLVRqz-yW3_Gp2DN18ykb6j/view?usp=sharing" target="_blank">
        <PictureAsPdfIcon className="contact_icons"/>
      </IconButton>
      </Tooltip>
      <Tooltip title="Vancouver, BC">
      <IconButton href="https://www.google.com/maps/place/Vancouver,+BC/@49.2576508,-123.2639868,11z/data=!3m1!4b1!4m5!3m4!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375" target="_blank">
        <LocationOnIcon className="contact_icons"/>
      </IconButton>
      </Tooltip>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box>
        <img className="vancouver-map" src={vancouver}/>
      
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export const TechStack = () => {
  <Box>
      <Card variant="outlined">{card}</Card>
    </Box>

}

