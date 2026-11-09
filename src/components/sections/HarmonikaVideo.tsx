// Showreel da Harmonika — vídeo em loop, mudo por padrão, com botão de som.
import { YouTubeLoop } from "@/components/ui/YouTubeLoop";

export function HarmonikaVideo() {
  return (
    <YouTubeLoop
      videoId="aJK1QoKl6b8"
      title="Showreel Harmonika Produtora"
      cover
      className="flex-1 min-h-52"
      style={{ minHeight: "280px" }}
    />
  );
}
