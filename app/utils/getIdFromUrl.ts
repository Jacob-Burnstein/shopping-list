export default function getId(url: string): number {
  const splitUrl = url.split("");
  const id: number = parseInt(splitUrl[splitUrl.length - 1]);
  return id;
}
