// import axios from "axios";

// const baseURL  =import.meta.env.VITE_BACKEND_API
// const axiosInstance = axios.create({
//     baseURL : baseURL,
//     headers : {
//         'Content-Type':'application/json',
//     }

// })

// // now modify the request when we call the protected routes 

// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     function config(params) {
//         const accessToken = localStorage.getItem('accessToken')
//         if (accessToken){
//             config.headers['Authorization'] = ` Bearer ${accessToken}`
//         }
//         return config
//     }
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );



// // Add a response interceptor
// axios.interceptors.response.use(function onFulfilled(response) {
//     return response;
    
//   }, async function (error) {
//     // thiss runs when the response is not 2xx 
//     const originalRequest = error.config;
//     if (error.response.status ===401 && !originalRequest.retry) {
//         originalRequest.retry = true;
//         // get refesgh token
//         // make the psot requst 
//         // put new access tokne inside the original reuqest cofig file
        
//         const refreshToken = localStorage.getItem('refreshtoken')
//         try {
//             const response = axios.post('/token/refresh',{refreshToken})
//             localStorage.setItem('accessToken',(await response).data.access)
//             // put access token in config file so the original request get the token
//             originalRequest.headers['Authorization'] = `Bearer ${(await response).data.accessToken}`
//             return axiosInstance(originalRequest)
//         } catch (error) {
//                 localStorage.removeItem('accessToken')
//                 localStorage.removeItem('refreshToken')
//             }
//         }
//     }
    
//   });