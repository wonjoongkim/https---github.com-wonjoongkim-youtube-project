import axios from "axios";

export const apiFunction = setInstance(axios.create());

function setInstance(instance) {
  // 요청 인터셉터
  instance.interceptors.request.use(
    (config) => {
      // 요청 보내기 전에 작업 수행
      const _config = {
        ...config,
        params: { hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "bb60140e13msh7f5da119555c915p157085jsn40029107f20b",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      };
      return _config;
    },
    (error) => {
      // 요청 오류 처리
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터
  instance.interceptors.response.use(
    (response) => {
      // 응답 데이터 처리
      return response;
    },
    (error) => {
      // 응답 오류 처리
      return Promise.reject(error);
    }
  );

  return instance;
}
