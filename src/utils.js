export const getImageUrl = (path) =>{
    return new URL(`../assets/${path}`, import.meta.url).href;
}

// export const getImageUrl = (path) => {
//     // Use the window.location.href to get the current URL
//     const baseUrl = window.location.href;
  
//     // Join the base URL with the relative image path
//     const imageUrl = new URL(`./assets/${path}`, baseUrl).href;
  
//     return imageUrl;
//   };

// export const getImageUrl = (path) => {
//     return process.env.PUBLIC_URL + "/assets/" + path;
//   };
  
  