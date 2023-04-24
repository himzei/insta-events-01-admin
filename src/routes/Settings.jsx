import { Button, Input, Select, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { getSettings, postKeywordsUpdate, putHashtagsSelected } from "../api";
import { ADM_EVENTS_NAME } from "../lib/settings";

export default function Settings() {
  const { register, reset, handleSubmit } = useForm();
  // queryKey[1] 값의 admin 이 세팅한 값 넣기

  const { data, refetch } = useQuery(
    ["settings_keywords", ADM_EVENTS_NAME],
    getSettings
  );

  const { mutate: postKeywordsMutate } = useMutation(postKeywordsUpdate, {
    onSuccess: () => {
      reset();
      refetch();
    },
  });

  const { mutate: putHashtagsMutate } = useMutation(putHashtagsSelected, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleHashtagsSelected = (event) => {
    const hashtag = event.target.value;
    const dataId = data?.data.id;

    putHashtagsMutate({ hashtag, dataId });
  };

  const onValid = ({ keywords }) => {
    const dataId = data?.data.id;
    // console.log(keywords);
    postKeywordsMutate({ keywords, dataId });
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
          <VStack w="full" alignItems="flex-start">
            <Text fontWeight={600}>행사명</Text>
            <Input type="text" value={data?.data?.events_name} disabled />
          </VStack>
          <VStack w="full" alignItems="flex-start">
            <Text fontWeight={600}>행사일정</Text>
            <Input type="text" value={data?.data?.events_date} disabled />
          </VStack>
          <VStack w="full" alignItems="flex-start">
            <Text fontWeight={600}>공식홈페이지(인스타)</Text>
            <Input type="text" value={data?.data?.official_url} disabled />
          </VStack>
          <VStack w="full" alignItems="flex-start">
            <Text fontWeight={600}>해시태그</Text>
            <Select
              placeholder="해시태그를 선택해 주세요"
              onChange={handleHashtagsSelected}
            >
              {data?.hashtags.map((hashtag) => (
                <option
                  key={hashtag.pk}
                  value={hashtag.pk}
                  selected={
                    hashtag.pk === data?.data?.hashtags_selected
                      ? "selected"
                      : null
                  }
                >
                  {hashtag.keywords}
                </option>
              ))}
            </Select>
          </VStack>
        </VStack>
        <VStack
          w="full"
          alignItems="flex-start"
          bg="white"
          py="8"
          px="4"
          spacing="4"
        >
          {/* 해시태그 추가 */}
          <VStack
            as="form"
            onSubmit={handleSubmit(onValid, onInvalid)}
            w="full"
            alignItems="flex-start"
          >
            <Text fontWeight={600}>
              해시태그를 쉼표(,)로 구분해서 입력해 주세요
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
