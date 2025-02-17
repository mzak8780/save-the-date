import { useState } from "react";
import { useRouter } from "next/router";
import Autosuggest from "../components/Autosuggest";
import "../app/globals.css";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    router.push(`/invite?name=${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-secondary p-4"
      data-theme="pastel"
    >
      <h1 className="text-primary-content text-4xl font-bold mb-4">
        Enter Your Name
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Autosuggest setName={setName} />
        <button
          type="submit"
          className="btn btn-primary text-white p-2 rounded-box"
          disabled={!name}
        >
          Submit
        </button>
      </form>
    </div>
  );
}