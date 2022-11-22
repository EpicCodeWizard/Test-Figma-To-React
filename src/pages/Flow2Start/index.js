import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const Flow2StartPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/signupscreen");
  }

  return (
    <>
      <Stack
        className="common-pointer bg-white_A700 lg:h-[203px] xl:h-[253px] 2xl:h-[285px] 3xl:h-[342px] mx-[auto] lg:px-[40px] xl:px-[50px] 2xl:px-[56px] 3xl:px-[68px] w-[100%]"
        onClick={handleNavigate}
      >
        <Img
          src="images/img_chargerconnect.png"
          className="absolute lg:h-[122px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] inset-[0] justify-center m-[auto] w-[11%]"
          alt="ChargerConnect"
        />
      </Stack>
    </>
  );
};

export default Flow2StartPage;
