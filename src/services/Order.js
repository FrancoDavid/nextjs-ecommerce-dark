const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function postGenerateOrder(data, token) {
    console.log(API_URL, "order", data, token);
  return await fetch(API_URL + "order", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}
