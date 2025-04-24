import BoardController from "@/components/BoardController";

// App Component
  export default function HomePage() {
  return (
    <div>
        <h1 className="text-4xl font-bold">Welcome to My Bridge Dealing App</h1>
        <p className="mt-4">Select an option such as Settings, Multiple or Single hand dealing from the navbar above.</p>
        <BoardController />
    </div>
  );
}