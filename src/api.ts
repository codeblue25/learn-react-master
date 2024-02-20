// Promise
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
    res.json()
  );
}

// async await
// export async function fetchCoins() {
//   const response = await fetch(
//     "https://proxy.cors.sh/https://api.coinpaprika.com/v1/coins"
//   );
//   const json = await response.json();
//   return json;
// }
