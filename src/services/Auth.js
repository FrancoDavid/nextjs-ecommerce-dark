export async function authRegisterService(data) {
  return await fetch("http://localhost:8080/api/user/register",{
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })  
} 