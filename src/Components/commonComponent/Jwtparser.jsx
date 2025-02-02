const parseJwt = (token) => {
    // Check if token is present
    if (!token) return null;
  
    try {
      // Extract the second part of the token (payload)
      const base64Url = token.split('.')[1];
  
      // Replace characters for proper base64 decoding
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  
      // Decode the base64 payload and parse JSON
      return JSON.parse(atob(base64));
    } catch (error) {
      console.error("Error parsing JWT:", error);
      return null;
    }
  };


export default parseJwt