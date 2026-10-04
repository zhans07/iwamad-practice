import LikeButton from "./LikeButton";

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

function ProfileCard({ name, role, avatarUrl }: ProfileCardProps) {
  return (
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>{role}</p>

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

        <LikeButton />
      </section>
    </main>
  );
}

export default ProfileCard;