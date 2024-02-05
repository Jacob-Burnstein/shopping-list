export default function getStoreInitials(store: string) {
  const initials: string[] = [];
  const splitArray = store.split(" ");
  for (const word of splitArray) {
    const characters = word.split("");
    initials.push(characters[0]);
  }
  return initials.slice(0, 4).join("");
}
