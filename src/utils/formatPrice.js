export default function formatPrice(price) {
  const num = Number(price ?? 0); // null/undefined হলে 0 use করবে
  return isNaN(num) ? "$0.00" : `$${num.toFixed(2)}`;
}
