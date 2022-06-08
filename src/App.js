import "./styles.css";
import emojisByGroup from "unicode-emoji-json/data-by-group";
import { useState } from "react";

export default function App() {
  const renderEmojis = () => {
    const emojiList = [];
    Object.entries(emojisByGroup).forEach(([emojiGroup, data]) => {
      emojiList.push(
        <li>
          <p>{emojiGroup}</p>
          {data.map((emojiData) => (
            <button key={emojiData.name}>{emojiData.emoji}</button>
          ))}
        </li>
      );
    });
    return emojiList;
  };

  return (
    <div className="App">
      <ul>{renderEmojis()}</ul>
    </div>
  );
}
