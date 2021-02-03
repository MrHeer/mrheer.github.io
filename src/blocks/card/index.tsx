import React, { FC, useState } from "react";
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

const Card: FC<ICardProps> = ({ data }) => {
  const { title, description, link } = data;

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
        <IconButton aria-label="go to detail" target="_blank" href={link}>
          <GitHub />
        </IconButton>
      </CardActions>
    </MDCard>
  );
};

export default Card;
