// reducer.js
export default function reducer(state, action) {
  switch (action.type) {
    case "SELECTEMOJI":
      return {
        emoji: action.payload
      };
    // case 'COLLECTEMOJIS':
    //   return {
    //     count: state.count - action.payload,
    //   };
    default:
      throw new Error();
  }
}
