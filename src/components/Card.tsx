import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  return <div className="rounded-2xl bg-userDarkBlue">{children}</div>;
}

export default Card;
