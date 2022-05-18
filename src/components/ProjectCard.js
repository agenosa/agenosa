import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import files from "../imports";
import ReactPlayer from "react-player/lazy";

export const VueCard = () => {
  return (
    <Card
      sx={{ maxWidth: "100%", backgroundColor: "#1b3b5f", color: "aliceblue" }}
    >
      <ReactPlayer
        url={files.vue.video}
        controls={true}
        width="100%"
        height="100%"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Artists Directory
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "min(4px, 5%)" }}>
          Filter, delete, and add new musicians...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className="project-link" to="/vueproject">
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export const CSharpCard = () => {
  return (
    <Card
      sx={{ maxWidth: "100%", backgroundColor: "#1b3b5f", color: "aliceblue" }}
    >
      <ReactPlayer
        url={files.csharp.video}
        controls={true}
        width="100%"
        height="100%"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Console App
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "min(55px, 5%)" }}>
          Add new employees to existing organization.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className="project-link" to="/csharpproject">
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export const ReactCard = () => {
  return (
    <Card
      sx={{ maxWidth: "100%", backgroundColor: "#1b3b5f", color: "aliceblue" }}
    >
      <ReactPlayer
        url={files.react.video}
        controls={true}
        width="100%"
        height="100%"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Portfolio Website
        </Typography>
        <Typography variant="body2">
          My portfolio website built using React.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className="project-link" to="/reactproject">
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export const AngularCard = () => {
  return (
    <Card
      sx={{ maxWidth: "100%", backgroundColor: "#1b3b5f", color: "aliceblue" }}
    >
      <ReactPlayer
        url={files.angular.video}
        controls={true}
        width="100%"
        height="100%"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Movie Database
        </Typography>
        <Typography variant="body2">Movie database application fetching data from API.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className="project-link" to="/angularproject">
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export const ProjectP3Card = () => {
  return (
    <Card
      sx={{ maxWidth: "100%", backgroundColor: "#1b3b5f", color: "aliceblue" }}
    >
      <ReactPlayer
        url={files.projectp3.video}
        controls={true}
        width="100%"
        height="100%"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          What's On Presale?
        </Typography>
        <Typography variant="body2">
          Full stack web application where users can inquire about upcoming presales.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className="project-link" to="/whatsonpresale">
            View Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};
