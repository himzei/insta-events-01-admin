import {
  Box,
  Button,
  Checkbox,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/png/logo.png";

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const mutation = useMutation(usernameLogin, {
  //   onError: (err, context) => {
  //     console.log(err, context);
  //   },
  //   onSuccess: () => {
  //     toast({
  //       title: "환영합니다",
  //       status: "success",
  //     });
  //     reset();
  //     navigate("/");
  //   },
  // });

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    // mutation.mutate({ email, password });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>로그인 - 인스타 인증 관리자 페이지</title>
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

          {/* Form Login */}
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
                    <HiOutlineMail />
                  </Box>
                }
              />
              <Input
                {...register("email", {
                  required: "이메일을 입력해 주세요",
                })}
                isInvalid={Boolean(errors.email?.message)}
                type="text"
                placeholder="Email Address"
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
                {...register("password")}
                isInvalid={Boolean(errors.password?.message)}
                type="password"
                placeholder="Password"
                _placeholder={{ color: "#B0CAD1" }}
              />
            </InputGroup>
            <HStack
              fontSize="14"
              w="full"
              justifyContent="space-between"
              color="#B0CAD1"
            >
              <Checkbox colorScheme="red">
                <Text>Remember Me</Text>
              </Checkbox>
              <Text>Forget Password ?</Text>
            </HStack>
            <Box w="full" rounded="full" overflow="hidden">
              <Button type="submit" w="full" colorScheme={"red"}>
                Login
              </Button>
            </Box>
            <HStack w="full" justifyContent="center">
              <Text as="span" color="#B0CAD1">
                Don’t have an account yet?{" "}
                <Link to="/signup">
                  <Text as="span" color="red.500" fontWeight={600}>
                    Register Now
                  </Text>
                </Link>
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
