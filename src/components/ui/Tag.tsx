
import "../../styles/ui.css";

type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return <span className="ui-tag">{label}</span>;
}
