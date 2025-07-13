import GitHubStats from "../sections/GitHubStats";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p>
        I’m a MERN Stack Developer skilled in Docker, Kubernetes, and scalable web
        architecture. Explore my work hehe!
      </p>
      <GitHubStats />
    </div>
  );
}