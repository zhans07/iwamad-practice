
import Tag from "./ui/Tag";

type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li>
      <Tag label={skill.label} />
    </li>
  );
}

export default SkillBadge;
