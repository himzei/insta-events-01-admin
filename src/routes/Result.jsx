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

export default function Result() {
  return (
    <Layout title="인스타 인증 참가자 분석">
      <VStack w="98%" spacing={16}>
        <HStack justifyContent="space-between" w="full" py="4">
          <HStack>
            <Button colorScheme={"red"}>
              <Text>결과 추출하기</Text>
            </Button>
            <Button colorScheme={"green"} variant="outline">
              <Text>CSV 다운로드</Text>
            </Button>
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
            templateColumns={"1fr 1.5fr 2.5fr 1fr 1fr 1fr 1fr 1fr 1fr"}
            w="full"
            align="center"
            color="#1E3A56"
          >
            <GridItem>아이디</GridItem>
            <GridItem>연락처</GridItem>
            <GridItem>인스타 게시글</GridItem>
            <GridItem>게시글 유지</GridItem>
            <GridItem>좋아요</GridItem>
            <GridItem>공유횟수</GridItem>
            <GridItem>친구소환</GridItem>
            <GridItem>공식인스타 좋아요</GridItem>
            <GridItem>공식인스타 팔로우</GridItem>
          </Grid>
          {Array(20)
            .fill("")
            .map((_, i) => (
              <Grid
                templateColumns={"1fr 1.5fr 2.5fr 1fr 1fr 1fr 1fr 1fr 1fr"}
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
                <GridItem>유지</GridItem>
                <GridItem>10</GridItem>
                <GridItem>23</GridItem>
                <GridItem>5</GridItem>
                <GridItem>좋아요</GridItem>
                <GridItem>팔로우</GridItem>
              </Grid>
            ))}
          <Box h="80px" />
        </VStack>
      </VStack>
    </Layout>
  );
}
