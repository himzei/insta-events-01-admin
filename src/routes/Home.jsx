import {
  Box,
  Button,
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
import { useQuery } from "react-query";
import { BASE_URL, getAdminStmap } from "../api";
import { numberFormat, timeFormat } from "../lib/utils";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useQuery(["stampAdmin"], getAdminStmap);
  const gridTemplate = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";
  return (
    <>
      <Layout title="실시간 인스타 인증">
        <VStack w="98%" spacing={8}>
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
                  -
                </Text>
                <Text>행사참가자</Text>
              </VStack>
            </HStack>
            <HStack spacing="4">
              <Image src={Stamp} w="14" />
              <VStack spacing={0}>
                <Text fontSize="24" fontWeight={600} color="green.500">
                  {data?.count}
                </Text>
                <Text>인스타인증</Text>
              </VStack>
            </HStack>
            <HStack spacing="4">
              <Image src={Thumb} w="14" />
              <VStack spacing={0}>
                <Text fontSize="24" fontWeight={600} color="yellow.500">
                  {data?.likes && numberFormat(data.likes)}
                </Text>
                <Text>좋아요</Text>
              </VStack>
            </HStack>
            <HStack spacing="4">
              <Image src={Share} w="14" />
              <VStack spacing={0}>
                <Text fontSize="24" fontWeight={600} color="blue.500">
                  {data?.comments && numberFormat(data.comments)}
                </Text>
                <Text>댓글</Text>
              </VStack>
            </HStack>

            <HStack spacing="4">
              <Image src={Friends} w="14" />
              <VStack spacing={0}>
                <Text fontSize="24" fontWeight={600} color="purple.500">
                  {data?.friends}
                </Text>
                <Text>친구소환</Text>
              </VStack>
            </HStack>
          </HStack>
          <HStack w="full">
            <Link to={`${BASE_URL}/insta/csv-result`}>
              <Button colorScheme={"green"} variant="outline">
                <Text>CSV 다운로드</Text>
              </Button>
            </Link>
          </HStack>
          <VStack spacing="2" w="full">
            <Grid
              templateColumns={gridTemplate}
              w="full"
              align="center"
              color="#1E3A56"
            >
              <GridItem>고유번호</GridItem>
              <GridItem>아이디</GridItem>
              <GridItem>인스타 게시시간</GridItem>
              <GridItem>게시글 인증시간</GridItem>
              <GridItem>좋아요(개)</GridItem>
              <GridItem>커멘트(개)</GridItem>
              <GridItem>친구소환(명)</GridItem>
            </Grid>
            {data?.instaRegister?.map((item, i) => (
              <Grid
                key={i}
                templateColumns={gridTemplate}
                w="full"
                align="center"
                color="#1E3A56"
                bg="white"
                py="4"
                rounded="lg"
              >
                {/* item.insta_url.replace("?__a=1", "") */}
                <GridItem>
                  <a
                    href={item.insta_url.replace("?__a=1", "")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.insta_ref}
                  </a>
                </GridItem>
                <GridItem>{item.insta_name}</GridItem>
                <GridItem>{timeFormat(item.insta_date)}</GridItem>
                <GridItem>{timeFormat(item.created_at)}</GridItem>
                <GridItem>{numberFormat(item.likes_cnt)}</GridItem>
                <GridItem>{numberFormat(item.comments_cnt)}</GridItem>
                <GridItem>{item.friends_cnt}</GridItem>
              </Grid>
            ))}
            <Box h="80px" />
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
