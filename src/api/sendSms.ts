import axios from "axios";

const smsApi = axios.create({
  baseURL: "https://apick.app/rest/send_sms",
  withCredentials: true,
  headers: {
    CL_AUTH_KEY: import.meta.env.VITE_APICK_AUTH_KEY,
  },
});

// 문자 발송 api
export const postSendSms = async (phone: string, checkNumber: string) => {
  const formData = new FormData();
  formData.append("from", import.meta.env.VITE_MY_PHONE);
  formData.append("to", phone);
  formData.append("text", `Recommend Lunch에서 보낸 인증 코드는 [${checkNumber}]입니다. 5분내로 입력해주세요.`);

  console.log("요청");

  const res = await smsApi.post("", formData);
  console.log(res);

  return res.data;
};
