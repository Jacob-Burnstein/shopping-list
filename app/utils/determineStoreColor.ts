export default function determineStoreColor(index: number): string {
  const colorSequence = ["green", "yellow", "darkGrey", "greyBlue"];
  const position = index % 4;
  const color = colorSequence[position];
  return color;
}
