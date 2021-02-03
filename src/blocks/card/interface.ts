import { GridProps } from "@material-ui/core";

export interface ICardData {
  title: string;
  description: string;
  link: string;
  gridProps?: Pick<GridProps, "lg" | "md" | "sm" | "xl" | "xs">;
}

export interface ICardProps {
  data: ICardData;
}
