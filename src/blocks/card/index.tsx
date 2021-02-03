import React, { FC } from "react";
import { Card as MDCard } from "components";
import { ICardProps } from "./interface";

const Card: FC<ICardProps> = ({ data }) => {
  const { title, description, link } = data;

  return (
    <MDCard>
      <h5>{title}</h5>
    </MDCard>
  );
};

export default Card;
