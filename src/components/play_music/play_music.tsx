const PlayMusic: React.FC<{ src: string }> = ({ src }) => {
  // "https://open.spotify.com/embed/track/31VNCmwspR7nVJ6kruUuJt"

  return (
    <iframe src={src} width="100%" height="80" allow="encrypted-media"></iframe>
  );
};
export default PlayMusic;
