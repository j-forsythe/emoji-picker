import "./styles.css";
import emojisByGroup from "unicode-emoji-json/data-by-group";
import React, { useContext, useState } from "react";
import { EmojiContext } from "./Provider";
import { Popover } from "react-tiny-popover";

export default function App() {
  const [isPickerOpen, setPickerOpen] = useState(false);
  const [state, dispatch] = useContext(EmojiContext);
  const { emoji } = state;

  const renderEmojis = () => {
    const emojiList = [];
    Object.entries(emojisByGroup).forEach(([emojiGroup, data]) => {
      emojiList.push(
        <li key={emojiGroup}>
          <p>{emojiGroup}</p>
          {data.map((emojiData) => (
            <button
              key={emojiData.name}
              onClick={() =>
                dispatch({ type: "SELECTEMOJI", payload: emojiData })
              }
            >
              {emojiData.emoji}
            </button>
          ))}
        </li>
      );
    });
    return emojiList;
  };

  return (
    <div className="App">
      <p>{emoji.emoji}</p>
      <Popover
        isOpen={isPickerOpen}
        positions={["bottom", "left", "right", "top"]}
        content={() => <ul className="picker-wrapper">{renderEmojis()}</ul>}
        onClickOutside={() => setPickerOpen(false)}
      >
        <button onClick={() => setPickerOpen(!isPickerOpen)}>Click me!</button>
      </Popover>
    </div>
  );
}
