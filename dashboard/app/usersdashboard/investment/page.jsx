'use client'
import React from "react";
import { fetchPackage } from "../../lib/actions"; 
import Button from "../../ui/userdashboard/components/button";
import  Img from "../../ui/userdashboard/components/img.jsx";
import  Input  from "../../ui/userdashboard/components/input.jsx";
import  Line  from "../../ui/userdashboard/components/line.jsx";
import Text from "../../ui/userdashboard/components/texts.jsx";
import List from "../../ui/userdashboard/components/list.jsx";
import { CloseSVG } from '../../ui/userdashboard/components/close' 


const Investments = () => {
  // const packageData = await fetchPackage();
  // console.log(packageData);
 

  const [groupeightvalue, setGroupeightvalue] = React.useState("");
  return (
    <div className="container mx-auto mt-8">
      {/* <h1 className="text-3xl font-bold mb-4">Investment Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packageData.map((pkg, index) => (
          <div key={index} className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-2">{pkg.name}</h2>
            <p className="text-gray-600 mb-2">Amount: {pkg.amount}</p>
            <p className="text-gray-600 mb-2">Period: {pkg.period}</p>
            <p className="text-gray-600 mb-2">ROI: {pkg.ROI}</p>
            <Link className="block mt-4" href={`/payment?package=${encodeURIComponent(pkg.name)}`}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                  Subscribe
                </button> 
            </Link>
          </div>
        ))}
      </div> */}

      <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-full">
        <div className="bg-white-A700 border-b border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
          <Text
            className="ml-5 md:ml-[0] sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
            size="txtInterSemiBold28"
          >
            Investments
          </Text>
          <Input
            name="GroupEight"
            placeholder="Search for something"
            value={groupeightvalue}
            onChange={(e) => setGroupeightvalue(e)}
            className="!placeholder:text-bluegray-400 !text-bluegray-400 leading-[normal] p-0 text-[15px] text-left w-full"
            wrapClassName="flex md:flex-1 md:ml-[0] ml-[433px] md:mt-0 my-[5px] rounded-[25px] w-[23%] md:w-full"
            prefix={
              <Img
                className="cursor-pointer h-5 ml-[25px] mr-[15px] my-[15px]"
                src="images/img_search.svg"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                fillColor="#888ea2"
                className="cursor-pointer h-5 my-auto"
                onClick={() => setGroupeightvalue("")}
                style={{
                  visibility:
                    groupeightvalue?.length <= 0 ? "hidden" : "visible",
                }}
                height={20}
                width={20}
                viewBox="0 0 20 20"
              />
            }
            color="gray_101"
          ></Input>
          <Button
            className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]"
            shape="circle"
            color="gray_102"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-[25px]"
              src="images/img_settings_50X50.svg"
              alt="settings One"
            />
          </Button>
          <Button
            className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] w-[50px]"
            shape="circle"
            color="gray_102"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-[25px]"
              src="images/img_notification.svg"
              alt="notification"
            />
          </Button>
          <Img
            className="h-[60px] md:h-auto md:ml-[0] ml-[35px] rounded-[50%] w-[60px]"
            src="images/img_ellipse1.png"
            alt="EllipseOne"
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-start w-[94%] md:w-full">
          <List
            className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
              <div className="flex flex-row gap-[15px] items-center justify-start w-[85%] md:w-full">
                <Button
                  className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                  shape="circle"
                  color="gray_102"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-[31px]"
                    src="images/img_contrast_70X70.svg"
                    alt="contrast"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Total Invested Amount
                  </Text>
                  <Text
                    className="text-indigo-600 text-xl"
                    size="txtInterSemiBold20"
                  >
                    $150,000
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
              <div className="flex flex-row gap-[15px] items-center justify-start w-[88%] md:w-full">
                <Button
                  className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                  shape="circle"
                  color="gray_102"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Number of Investments
                  </Text>
                  <Text
                    className="text-indigo-600 text-xl"
                    size="txtInterSemiBold20"
                  >
                    1,250
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
              <div className="flex flex-row gap-[15px] items-center justify-start w-[65%] md:w-full">
                <Button
                  className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                  shape="circle"
                  color="gray_102"
                  size="lg"
                  variant="fill"
                >
                  <Img
                    className="h-[30px]"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                </Button>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <Text
                    className="text-base text-bluegray-400"
                    size="txtInterRegular16Bluegray400"
                  >
                    Rate of Return
                  </Text>
                  <Text
                    className="text-indigo-600 text-xl"
                    size="txtInterSemiBold20"
                  >
                    +5.80%
                  </Text>
                </div>
              </div>
            </div>
          </List>
          <List
            className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Yearly Total Investment
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[25px] w-full">
                <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start mb-0.5 w-[99%] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start">
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $40,000
                    </Text>
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $30,000
                    </Text>
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $20,000
                    </Text>
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $10,000
                    </Text>
                    <Text
                      className="h-4 md:ml-[0] ml-[35px] text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $0
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-0 mt-3.5 w-[88%] sm:w-full">
                    <div className="border border-dashed border-gray-103 h-px w-full"></div>
                    <div className="h-[161px] md:h-[167px] mt-1.5 relative w-full">
                      <div className="absolute bottom-[14%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                          <div className="border border-dashed border-gray-103 h-px w-full"></div>
                          <div className="border border-dashed border-gray-103 h-px w-full"></div>
                          <div className="border border-dashed border-gray-103 h-px w-full"></div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[161px] inset-[0] justify-center m-auto w-[92%]"
                        src="images/img_statistics.svg"
                        alt="Statistics"
                      />
                    </div>
                    <div className="border border-dashed border-gray-103 h-px mt-[22px] w-full"></div>
                    <div className="flex flex-row items-center justify-between mt-[7px] w-[96%] md:w-full">
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2016
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2017
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2018
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2019
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2020
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2021
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Monthly Revenue
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[25px] w-full">
                <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start mb-0.5 w-[99%] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start">
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $40,000
                    </Text>
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $30,000
                    </Text>
                    <Text
                      className="text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $20,000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $10,000
                    </Text>
                    <Text
                      className="ml-9 md:ml-[0] text-[13px] text-bluegray-400"
                      size="txtInterRegular13"
                    >
                      $0
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:mt-0 mt-3.5 w-[88%] sm:w-full">
                    <div className="border border-dashed border-gray-103 h-px w-full"></div>
                    <div className="h-[111px] md:h-[136px] mt-[25px] relative w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[20%] w-full">
                        <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                          <div className="border border-dashed border-gray-103 h-px w-full"></div>
                          <div className="border border-dashed border-gray-103 h-px w-full"></div>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[111px] inset-[0] justify-center m-auto w-full"
                        src="images/img_vector6.svg"
                        alt="VectorSix"
                      />
                    </div>
                    <div className="border border-dashed border-gray-103 h-px mt-[7px] w-full"></div>
                    <div className="border border-dashed border-gray-103 h-px mt-[45px] w-full"></div>
                    <div className="flex flex-row items-center justify-between mt-[7px] w-[97%] md:w-full">
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2016
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2017
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2018
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2019
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2020
                      </Text>
                      <Text
                        className="text-[13px] text-bluegray-400"
                        size="txtInterRegular13"
                      >
                        2021
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[58%] md:w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                My Investment
              </Text>
              <List
                className="flex flex-col gap-[15px] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="round"
                    color="gray_102"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_eye.svg" alt="eye" />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 sm:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Apple Store
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      E-commerce, Marketplace
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-14 sm:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      $54,000
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Envestment Value
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-11 sm:ml-[0]">
                    <Text
                      className="text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +16%
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Return Value
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="round"
                    color="gray_102"
                    size="md"
                    variant="fill"
                  >
                    <Img src="images/img_google.svg" alt="google" />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 sm:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Samsung Mobile
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      E-commerce, Marketplace
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-14 sm:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      $25,300
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Envestment Value
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-11 sm:ml-[0]">
                    <Text
                      className="text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -4%
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Return Value
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="round"
                    color="gray_102"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[25px]"
                      src="images/img_signal.svg"
                      alt="signal"
                    />
                  </Button>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-5 sm:ml-[0]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      Tesla Motors
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Electric Vehicles
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[127px]">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterMedium16Bluegray900"
                    >
                      $8,200
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Envestment Value
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-11 sm:ml-[0]">
                    <Text
                      className="text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +25%
                    </Text>
                    <Text
                      className="text-[15px] text-bluegray-400"
                      size="txtInterRegular15Bluegray400"
                    >
                      Return Value
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[41%] md:w-full">
              <Text
                className="text-[22px] text-bluegray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Trending Stock
              </Text>
              <div className="bg-white-A700 flex flex-col gap-[13px] items-start justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[5px] mt-0.5 w-[98%] md:w-full">
                  <div className="flex flex-row items-center justify-start w-[96%] md:w-full">
                    <Text
                      className="text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      SL No
                    </Text>
                    <Text
                      className="ml-9 text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Name
                    </Text>
                    <Text
                      className="ml-[86px] text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Price
                    </Text>
                    <Text
                      className="ml-[65px] text-base text-bluegray-400"
                      size="txtInterMedium16Bluegray400"
                    >
                      Return
                    </Text>
                  </div>
                  <Line className="bg-gray-103 h-px w-full" />
                </div>
                <List
                  className="flex flex-col gap-7 md:ml-[0] ml-[5px] w-[91%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      01.
                    </Text>
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      Trivago
                    </Text>
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      $520
                    </Text>
                    <Text
                      className="text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +5%
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      02.
                    </Text>
                    <Text
                      className="ml-[58px] text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      Canon
                    </Text>
                    <Text
                      className="ml-[82px] text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      $480
                    </Text>
                    <Text
                      className="ml-[63px] text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +10%
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      03.
                    </Text>
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      Uber Food
                    </Text>
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      $350
                    </Text>
                    <Text
                      className="text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -3%
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      04.
                    </Text>
                    <Text
                      className="ml-[57px] text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      Nokia
                    </Text>
                    <Text
                      className="ml-[88px] text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      $940
                    </Text>
                    <Text
                      className="ml-[63px] text-base text-green-600"
                      size="txtInterMedium16Green600"
                    >
                      +2%
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-[99%] md:w-full">
                    <Text
                      className="text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      05.
                    </Text>
                    <Text
                      className="ml-[58px] text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      Tiktok
                    </Text>
                    <Text
                      className="ml-[84px] text-base text-bluegray-900"
                      size="txtInterRegular16Bluegray900"
                    >
                      $670
                    </Text>
                    <Text
                      className="ml-16 text-base text-red-700"
                      size="txtInterMedium16Red700"
                    >
                      -12%
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
