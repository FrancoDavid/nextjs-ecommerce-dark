const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { PAGES_DICTIONARY, SIZE_PAGES_DICTIONARY } from "@/config/constants";

export async function getProductsArribal() {
    const response = await fetch(API_URL+"product/lasts",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "force-cache"
    })
    
    return await response.json();
}

export async function getProductsTopSelling() {
    const response = await fetch(API_URL+"product/all",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      cache: "force-cache"
    })
    
    return await response.json();
}

export async function getProducts(categoryName, page=PAGES_DICTIONARY.INIT, size=SIZE_PAGES_DICTIONARY.MEDIUM) {

  const query = new URLSearchParams();
  
  if (categoryName) query.append("categoryName", categoryName);
  
  query.append("page", page);
  query.append("size", size);

  const URL = API_URL+"product/all?"+query.toString();

  const response = await fetch(URL,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "force-cache"
  })
  
  return await response.json();
}

export async function getProduct(id) {
  const response = await fetch(API_URL+"product/"+id,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "force-cache"
  })
  
  return await response.json();
}