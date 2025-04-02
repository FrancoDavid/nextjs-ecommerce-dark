const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProductsArribal() {
    const response = await fetch(API_URL+"product/lasts",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-store"
    })
    
    return await response.json();
}

export async function getProductsTopSelling() {
    const response = await fetch(API_URL+"product/all",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "no-store"
    })
    
    return await response.json();
}