import { HStack, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Menu from "./Menu";

export default function Layout({ title, children }) {
  return (
    <HStack w="full" justifyContent="center" h="full">
      <Helmet>
        <title>{title} - CNPartners</title>
      </Helmet>
      <HStack
        alignItems="flex-start"
        pt="20px"
        w="full"
        h="full"
        bg="#F5F8FA"
        maxH="calc(100vh - 100px)"
      >
        <Menu />
        <VStack
          w={"calc(100% - 300px)"}
          maxH="calc(100vh - 100px)"
          px="3"
          spacing="8"
          overflow={"auto"}
        >
          <HStack w="full" bg="white" fontWeight={600} p="8">
            <Text color="red.500">{title}</Text>
          </HStack>
          {children}
        </VStack>
      </HStack>
    </HStack>
  );
}
