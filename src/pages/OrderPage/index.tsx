import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { postSendSms } from "../../api/sendSms";

function generateCheckNumber(): string {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  return randomNumber.toString();
}

const Order = () => {
  const [phone, setPhone] = useState<string>(""); // 전화번호
  const [checkNumber, setCheckNumber] = useState(generateCheckNumber()); // 인증번호

  const handleSendSms = async () => {
    const data = await postSendSms(phone, checkNumber);
    console.log(data);
  };

  return (
    <>
      <div style={{ margin: "20px" }}></div>
      <TextField
        id="phone"
        label="전화번호"
        variant="outlined"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleSendSms}>
        인증 문자 발송
      </Button>
    </>
  );
};

export default Order;
