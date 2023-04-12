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
  useToast,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { FaEyeSlash } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../assets/png/logo.png";
import { Helmet } from "react-helmet";
import { useMutation } from "react-query";
import { usernameSignUP } from "../api";

export default function SignUp() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const navigate = useNavigate();
  const mutation = useMutation(usernameSignUP, {
    onSuccess: () => {
      toast({
        title: "회원가입 되었습니다.",
        status: "success",
      });
      reset();
      navigate("/login");
    },
  });

  const onSubmit = ({ name, email, password }) => {
    mutation.mutate({ name, email, password });
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
                {...register("name", {
                  required: "이름을 입력해주세요",
                  minLength: {
                    message: "이름은 2자 이상 작성하셔야 합니다. ",
                    value: 2,
                  },
                })}
                placeholder="Full Name"
                _placeholder={{ color: "#B0CAD1" }}
              />
            </InputGroup>

            <InputGroup>
              <InputRightElement
                children={
                  <Box color={"#B0CAD1"}>
                    <HiOutlineMail />
                  </Box>
                }
              />
              <Input
                type="email"
                placeholder="Email Address"
                _placeholder={{ color: "#B0CAD1" }}
                {...register("email", {
                  required: "이메일을 입력해주세요",
                })}
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
            <HStack fontSize="14" w="full" color="#B0CAD1" alignItems="center">
              <Checkbox colorScheme="red">
                <Text as="span">
                  I agree with all Listed{" "}
                  <Text as="span" color="red.500" fontWeight={600}>
                    Terms & Conditions
                  </Text>
                </Text>
              </Checkbox>
            </HStack>

            <Box w="full" rounded="full" overflow={"hidden"}>
              <Button w="full" type="submit" colorScheme={"red"}>
                Register Now
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
              Already have an account? Click here{" "}
              <Link to="/login">
                <Text as="span" color="red.500" fontWeight={600}>
                  Login
                </Text>
              </Link>
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}
