export const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export function formatMilliseconds(ms: number) {
  const totalSeconds = Math.floor(ms / 1000); // Chuyển mili giây sang giây
  const minutes = Math.floor(totalSeconds / 60); // Tính số phút
  const seconds = totalSeconds % 60; // Tính số giây còn lại

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
