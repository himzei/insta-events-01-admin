import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../assets/png/logo.png";
import { useMutation, useQueryClient } from "react-query";
import { usernameLogin } from "../api";

export default function LogIn() {
  const navigate = useNavigate();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const queryClient = useQueryClient();
  const mutation = useMutation(usernameLogin, {
    onError: (err, context) => {
      console.log(err, context);
    },
    onSuccess: () => {
      toast({
        title: "환영합니다",
        status: "success",
      });
      reset();
      queryClient.refetchQueries(["me"]);
      navigate("/home");
    },
  });

  const onSubmit = ({ username, password }) => {
    // console.log(email, password);
    if (username !== "test" && password !== "1111") {
      toast({
        title: "로그인 싶래",
        status: "warning",
      });
      return false;
    }
    mutation.mutate({ username, password });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>회원가입 - 인스타 인증 관리자 페이지</title>
      </Helmet>
      <VStack w="full" justifyContent={"center"} h={"100vh"} bg="#F5F8FA">
        <VStack w="md" p="4" rounded="xl" spacing={6}>
          <Box w="full" h="100px" position="relative">
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              h="full"
              spacing="0"
            >
              <Image src={Logo} />
            </VStack>
          </Box>

          {/* as Form */}
          <VStack
            as="form"
            w="full"
            spacing={4}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputGroup>
              <InputRightElement
                children={
                  <Box color={"#B0CAD1"}>
                    <AiOutlineUser />
                  </Box>
                }
              />
              <Input
                type="text"
                {...register("username", {
                  required: "아이디를 입력해주세요",
                  minLength: {
                    message: "이름은 2자 이상 작성하셔야 합니다. ",
                    value: 2,
                  },
                })}
                placeholder="ID"
                _placeholder={{ color: "#B0CAD1" }}
              />
            </InputGroup>

            <InputGroup>
              <InputRightElement
                children={
                  <Box color={"#B0CAD1"}>
                    <FaEyeSlash />
                  </Box>
                }
              />
              <Input
                type="password"
                _placeholder={{ color: "#B0CAD1" }}
                placeholder="Password"
                {...register("password")}
              />
            </InputGroup>

            <Box w="full" rounded="full" overflow={"hidden"}>
              <Button w="full" type="submit" colorScheme={"red"}>
                로그인
              </Button>
            </Box>
            {errors.errors?.message ? (
              <Text fontSize="14" color="red.500">
                {errors.errors?.message}
              </Text>
            ) : null}
          </VStack>
          <HStack w="full" justifyContent="center">
            <Text as="span" color="#B0CAD1">
              회원 아이디가 없으시다면{" "}
              <Link to="/signup">
                <Text as="span" color="red.500" fontWeight={600}>
                  회원가입
                </Text>
              </Link>
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
