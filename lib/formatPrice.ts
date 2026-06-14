export function formatPrice(price: number | null, priceOnRequest: boolean): string {
  if (priceOnRequest || price === null) return "Price on Request";
  return `₦${price.toLocaleString("en-NG")}`;
}
