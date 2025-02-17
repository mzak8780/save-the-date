import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

interface AutosuggestProps {
  setName: (name: string) => void;
}

const Autosuggest: React.FC<AutosuggestProps> = ({ setName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [guestNames, setGuestNames] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const fetchNames = async () => {
      const { data } = await supabase.from("guests").select("name");
      if (data) {
        setGuestNames(data.map((guest) => guest.name));
        console.log(suggestions);
      }
    };
    fetchNames();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    search(value);
  };

  const search = async (term: string) => {
    if (term.length > 1) {
      setSuggestions(
        guestNames.filter((suggestion) =>
          suggestion.toLowerCase().startsWith(term.toLowerCase())
        )
      );
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setName(suggestion);
  };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="Enter your name..."
        value={searchTerm}
        onChange={handleInputChange}
        required
        className="input input-bordered"
      />
      {suggestions.length > 0 && (
        <div className="dropdown dropdown-open">
          <ul className="dropdown-content menu bg-base-100 w-full rounded-box mt-2">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Autosuggest;