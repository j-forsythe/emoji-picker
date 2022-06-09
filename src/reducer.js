// reducer.js
export default function reducer(state, action) {
  function collect(list, newEmoji) {
    let recent = Object.values(list["Recently Used"]);

    if (recent) {
      if (recent?.includes(newEmoji)) return { "Recently Used": [...recent] };
      if (recent?.length === 10) {
        recent.pop();
      }

      return { "Recently Used": [newEmoji, ...recent] };
    }
  }

  switch (action.type) {
    case "SELECTEMOJI":
      return {
        emoji: action.payload,
        recentlyUsed: collect(state.recentlyUsed, action.payload)
      };
    default:
      throw new Error();
  }
}
