// api.js

export const fetchAPI = (date) => {
    // 模拟一个异步 API 调用
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
      }, 1000);
    });
  };
  
  export const submitAPI = (formData) => {
    // 模拟一个异步 API 调用
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
  