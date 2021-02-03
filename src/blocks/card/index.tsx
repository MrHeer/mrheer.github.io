import React, { FC, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  GitHub,
  Card as MDCard,
  Typography,
} from "components";
import { ICardProps } from "./interface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    detailButton: {
      marginLeft: "auto",
    },
  })
);

const Card: FC<ICardProps> = ({ data }) => {
  const { title, description, link } = data;
  const classes = useStyles();
  const [raised, setRaised] = useState<boolean>(false);

  return (
    <MDCard
      raised={raised}
      onMouseEnter={() => setRaised(true)}
      onMouseLeave={() => setRaised(false)}
    >
      <CardHeader title={<Typography variant="h5">{title}</Typography>} />
      <CardContent>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton
          className={classes.detailButton}
          aria-label="go to detail"
          target="_blank"
          href={link}
        >
          <GitHub />
        </IconButton>
      </CardActions>
    </MDCard>
  );
};

export default Card;
