import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useQuery } from "react-query";
import { BASE_URL, getAdminResult } from "../api";
import { numberFormat, timeFormat } from "../lib/utils";
import { Link } from "react-router-dom";
import ChartResult from "../components/ChartResult";

export default function Result() {
  const gridTemplate = "1fr 1fr 1fr 1fr 1fr";
  const { data } = useQuery(["instaAdmin"], getAdminResult);

  return (
    <Layout title="인스타 인증 참가자 분석">
      <VStack w="98%" spacing={16}>
        <Box py="16" w="full">
          <ChartResult />
        </Box>
        <HStack justifyContent="space-between" w="full" py="4">
          <HStack>
            <Button colorScheme={"red"}>
              <Text>차트 다운로드</Text>
            </Button>
            <Link to={`${BASE_URL}/insta-admin/csv-result`}>
              <Button colorScheme={"green"} variant="outline">
                <Text>CSV 다운로드</Text>
              </Button>
            </Link>
          </HStack>
          <Box w="sm">
            <Select placeholder="Sort By" bg="white">
              <option value="option1">좋아요 많은 순</option>
              <option value="option2">공유횟수 많은 수</option>
              <option value="option3">친구소환 많은 순</option>
            </Select>
          </Box>
        </HStack>
        <VStack spacing="2" w="full">
          <Grid
            templateColumns={gridTemplate}
            w="full"
            align="center"
            color="#1E3A56"
          >
            <GridItem>시간</GridItem>
            <GridItem>인스타 게시글(개)</GridItem>
            <GridItem>좋아요(개)</GridItem>
            <GridItem>댓글(개)</GridItem>
            <GridItem>친구소환(명)</GridItem>
          </Grid>
          {data?.map((item, index) => (
            <Grid
              key={index}
              templateColumns={gridTemplate}
              w="full"
              align="center"
              color="#1E3A56"
              bg="white"
              py="4"
              rounded="lg"
            >
              <GridItem>{timeFormat(item?.created_at)}</GridItem>
              <GridItem>{item?.total_insta}</GridItem>
              <GridItem>
                {item?.total_likes && numberFormat(item.total_likes)}
              </GridItem>
              <GridItem>
                {item?.total_comments && numberFormat(item.total_comments)}
              </GridItem>
              <GridItem>{item?.total_friends}</GridItem>
            </Grid>
          ))}
          <Box h="80px" />
        </VStack>
      </VStack>
    </Layout>
  );
}
