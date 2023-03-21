import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import People from "../assets/svg/people.svg";
import Stamp from "../assets/svg/stamp.svg";
import Thumb from "../assets/svg/thumb.svg";
import Share from "../assets/svg/share.svg";
import Friends from "../assets/svg/friends.svg";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="실시간 인스타 인증">
      <VStack w="98%" spacing={16}>
        <HStack
          justifyContent="space-between"
          w="full"
          h="120px"
          bg="white"
          px="8"
        >
          <HStack spacing="4">
            <Image src={People} w="14" />
            <VStack spacing={0}>
              <Text fontSize="24" fontWeight={600} color="red.500">
                62150
              </Text>
              <Text>행사참가자</Text>
            </VStack>
          </HStack>
          <HStack spacing="4">
            <Image src={Stamp} w="14" />
            <VStack spacing={0}>
              <Text fontSize="24" fontWeight={600} color="green.500">
                4215
              </Text>
              <Text>인스타인증</Text>
            </VStack>
          </HStack>
          <HStack spacing="4">
            <Image src={Thumb} w="14" />
            <VStack spacing={0}>
              <Text fontSize="24" fontWeight={600} color="yellow.500">
                4215
              </Text>
              <Text>좋아요</Text>
            </VStack>
          </HStack>
          <HStack spacing="4">
            <Image src={Share} w="14" />
            <VStack spacing={0}>
              <Text fontSize="24" fontWeight={600} color="blue.500">
                4215
              </Text>
              <Text>공유횟수</Text>
            </VStack>
          </HStack>

          <HStack spacing="4">
            <Image src={Friends} w="14" />
            <VStack spacing={0}>
              <Text fontSize="24" fontWeight={600} color="purple.500">
                4215
              </Text>
              <Text>친구소환</Text>
            </VStack>
          </HStack>
        </HStack>
        <VStack spacing="2" w="full">
          <Grid
            templateColumns={"0.5fr 1.5fr 2.5fr 1fr 1fr 1fr 1fr"}
            w="full"
            align="center"
            color="#1E3A56"
          >
            <GridItem>아이디</GridItem>
            <GridItem>연락처</GridItem>
            <GridItem>인스타 게시글</GridItem>
            <GridItem>게시글 고유번호</GridItem>
            <GridItem>인스타 게시일</GridItem>
            <GridItem>인스타 인증일</GridItem>
            <GridItem>인증여부</GridItem>
          </Grid>
          {Array(20)
            .fill("")
            .map((_, i) => (
              <Grid
                key={i}
                templateColumns={"0.5fr 1.5fr 2.5fr 1fr 1fr 1fr 1fr"}
                w="full"
                align="center"
                color="#1E3A56"
                bg="white"
                py="4"
                rounded="lg"
              >
                <GridItem>조현일</GridItem>
                <GridItem>010-7186-0119</GridItem>
                <GridItem>https://www.instagram.com/p/CY3kQa7vmdu/</GridItem>
                <GridItem>CY3kQa7vmdu</GridItem>
                <GridItem>2023-03-20 14:00</GridItem>
                <GridItem>2023-03-20 14:00</GridItem>
                <GridItem>인증완료</GridItem>
              </Grid>
            ))}
          <Box h="80px" />
        </VStack>
      </VStack>
    </Layout>
  );
}
