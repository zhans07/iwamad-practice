import SkillBadge from "../components/SkillBadge";

const skills = [
  { id: 1, label: "HTML" },
  { id: 2, label: "Programming basics" },
  { id: 3, label: "Communication" },
  { id: 4, label: "Teamwork" },
];

function Skills() {
  return (
    <div>
      <h1>My Skills</h1>

      <ul>
        {skills.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;