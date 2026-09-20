
import { useState } from "react";
import SkillBadge from "./SkillBadge";

type Skill = {
  id: number;
  label: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

function ProfileCard({ name, role, avatarUrl }: ProfileCardProps) {
  const [likes, setLikes] = useState(0);


  const skills: Skill[] = [
  { id: 1, label: "HTML" },
  { id: 2, label: "Programming basics" },
  { id: 3, label: "Communication" },
  { id: 4, label: "Teamwork" },
];
    

  return (
    <main>
      <section id="about">
        <h2>About Me</h2>

        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={`${name}'s profile photo`}
            width="250"
            height="300"
          />
        )}

        <p>
          Hello! My name is {name}. I am an IT Management student.
          I am interested in technology, web development, and learning new skills.
          I hope to improve my programming and communication skills during this course.
        </p>
      </section>

      <section id="skills">
        <h2>Skills</h2>

        {skills.length === 0 ? (
  <p>No skills available.</p>
) : (
  <ul>
    {skills.map((skill) => (
      <SkillBadge key={skill.id} skill={skill} />
    ))}
  </ul>
)}
      </section>

      <section id="goals">
        <h2>My Goals</h2>

        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Current Level</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HTML</td>
              <td>Beginner</td>
            </tr>

            <tr>
              <td>Web Development</td>
              <td>Beginner</td>
            </tr>

            <tr>
              <td>Git & GitHub</td>
              <td>Beginner</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="contact">
        <h2>Contact</h2>

        <p>
          Email:{" "}
          <a href="mailto:zhansayaruslankyzy07@gmail.com">
            zhansayaruslankyzy07@gmail.com
          </a>
        </p>

        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <br />
          <br />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <br />
          <br />

          <button type="submit">Send</button>
        </form>
      </section>

      <button onClick={() => setLikes(likes + 1)}>
        ❤️ Like {likes}
      </button>
    </main>
  );
}

export default ProfileCard;