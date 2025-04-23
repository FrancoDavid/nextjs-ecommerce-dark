const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function postRegisterService(data) {
  return await fetch(API_URL+"user/register",{
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })  
}

export async function postLoginService(data) {
  return await fetch(API_URL+"user/login",{
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })  
} 