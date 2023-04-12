import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { getKeywords, putKeywordsUpdate } from "../api";

export default function Settings() {
  const { register, reset, handleSubmit } = useForm();
  const { data, refetch } = useQuery(["settings_keywords"], getKeywords);
  const keywords_string = data?.data?.keywords;
  const keywords = (keywords_string || "").split(",");

  const { mutate } = useMutation(putKeywordsUpdate, {
    onSuccess: () => {
      reset();
      refetch();
    },
  });
  const onValid = ({ keywords }) => {
    // console.log(keywords);
    mutate({ keywords });
  };
  const onInvalid = (error) => {
    console.log(error);
  };
  return (
    <Layout title="설정">
      <VStack w="98%" spacing={16}>
        <VStack
          w="full"
          alignItems="flex-start"
          bg="white"
          py="8"
          px="4"
          spacing="4"
        >
          <Text fontWeight="600">현재 설정된 키워드 리스트</Text>
          <HStack fontSize="20" color="green.600">
            {keywords?.map((item, i) => (
              <Text
                key={i}
                bg="blue.500"
                color="white"
                px="4"
                py="1"
                rounded="2xl"
              >
                {item.includes("#") ? item.trim() : `#${item.trim()}`}
              </Text>
            ))}
          </HStack>
          <Box />
          <VStack
            as="form"
            onSubmit={handleSubmit(onValid, onInvalid)}
            w="full"
            alignItems="flex-start"
          >
            <Text fontWeight={600}>
              키워드를 쉼표(,)로 구분해서 입력해 주세요
            </Text>
            <Input
              {...register("keywords", {
                required: "1개 이상의 키워드를 입력해 주세요",
              })}
              type="text"
            />
            <Button colorScheme="red" type="submit">
              <Text>전송</Text>
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
