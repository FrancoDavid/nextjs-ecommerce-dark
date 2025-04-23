const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getCategories() {
    const response = await fetch(API_URL+"category",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-store"
    })
    
    return await response.json();
}