import React from "react";

import { Column, Row, Text, Button } from "components";

const SignupScreenPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-montserrat justify-start mx-[auto] lg:p-[14px] xl:p-[18px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
        <Row className="items-start lg:mb-[186px] xl:mb-[233px] 2xl:mb-[263px] 3xl:mb-[315px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[58%]">
          <aside className="lg:mb-[47px] xl:mb-[59px] 2xl:mb-[67px] 3xl:mb-[80px] w-[29%]">
            <div className="">
              <Column className="justify-start w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h1" variant="h1">
                  Sign Up
                </Text>
                <Text
                  className="font-semibold ml-[1px] lg:mt-[31px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  First Name
                </Text>
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] text-gray_600 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  First
                </Text>
                <Text
                  className="font-semibold ml-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Last Name
                </Text>
                <Text
                  className="font-medium lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] text-gray_600 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Last
                </Text>
                <Text
                  className="font-bold ml-[1px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  School Email
                </Text>
                <Text className="font-medium lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[17px] text-gray_600 underline w-[auto]">
                  s111111@scusd.net
                </Text>
                <Text
                  className="font-bold ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Password
                </Text>
                <Text
                  className="font-medium lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] text-gray_600 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  password
                </Text>
                <Button className="font-bold lg:mt-[45px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]">
                  Create Account
                </Button>
              </Column>
            </div>
          </aside>
          <Column className="items-center justify-start lg:ml-[242px] xl:ml-[303px] 2xl:ml-[341px] 3xl:ml-[410px] lg:mt-[190px] xl:mt-[237px] 2xl:mt-[267px] 3xl:mt-[320px] w-[29%]">
            <div className="bg-white_A700 lg:h-[30px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius28 shadow-bs w-[100%]"></div>
            <div className="bg-white_A700 lg:h-[30px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] rounded-radius28 shadow-bs w-[100%]"></div>
            <div className="bg-white_A700 lg:h-[30px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[45px] xl:mt-[57px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius28 shadow-bs w-[100%]"></div>
            <div className="bg-white_A700 lg:h-[30px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[75px] rounded-radius28 shadow-bs w-[100%]"></div>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SignupScreenPage;
