import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import Live from "../assets/svg/live.svg";
import Result from "../assets/svg/result.svg";

export default function Menu() {
  const menuList = [
    { name: "실시간 인스타 인증", link: "/", svg: Live },
    { name: "인스타 인증 참가자 분석", link: "/result", svg: Result },
  ];
  const { pathname } = useLocation();
  return (
    <VStack
      w="300px"
      bg="white"
      p="4"
      minH="calc(100vh - 100px)"
      alignItems="flex-start"
      position="relative"
    >
      <Text fontWeight={600} color="red.500" py="4">
        Main
      </Text>
      <VStack w="full" h="full" alignItems="flex-start" spacing={0}>
        {menuList.map((item, i) => (
          <Link to={item.link} key={i}>
            <HStack
              h="50px"
              bg={pathname === item.link ? "#F5F8FA" : null}
              w="270px"
              borderLeft="4px"
              borderColor={pathname === item.link ? "red.500" : "white"}
              px="4"
            >
              <Image src={item.svg} w="6" />
              <Text
                color={pathname === item.link ? "red.500" : "#B0CAD1"}
                fontWeight={600}
              >
                {item.name}
              </Text>
            </HStack>
          </Link>
        ))}
        <Text
          position="absolute"
          bottom="8"
          fontSize="12"
          as="span"
          align="center"
          left="10"
        >
          &copy; {new Date().getFullYear()}{" "}
          <Text as="span" fontWeight={600} color="red.500">
            CNPartners
          </Text>{" "}
          All Right Reserved.
        </Text>
      </VStack>
    </VStack>
  );
}
