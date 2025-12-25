import { frontendStack } from "@/data/inforCards/page";

export default function Stack() {
  return (
    <>
      {frontendStack.map((tech) => {
        const Icon = tech.icon;
        return (
          <div key={tech.id} className="card-stack">
            <Icon size={32} />
            <span>{tech.name}</span>
          </div>
        );
      })}
    </>
  );
}
