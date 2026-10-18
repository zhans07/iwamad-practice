
import type { HTMLAttributes } from "react";
import "../../styles/ui.css";

type CardProps = HTMLAttributes<HTMLElement>;

export default function Card({
  className = "",
  ...props
}: CardProps) {
  return (
    <article
      className={`ui-card ${className}`.trim()}
      {...props}
    />
  );
}
