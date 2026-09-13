// TODO: Impl playSound util
export function playSound(name: "move" | "win" | "draw") {
  new Audio(`/sounds/${name}.mp3`).play();
}
