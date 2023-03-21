import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack justifyContent={"center"} minH="100vh">
      <Heading>404</Heading>
      <Text>페이지가 존재하지 않습니다.</Text>
      <Link to="/">
        <Button variant={"ghost"}>홈으로 가기</Button>
      </Link>
    </VStack>
  );
}
