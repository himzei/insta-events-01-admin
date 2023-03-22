import {
  Avatar,
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Logo from "../assets/png/logo.png";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

export default function Header() {
  const queryClient = useQueryClient();
  const { userLoading, user, isLoggedIn } = useUser();
  console.log(userLoading, user, isLoggedIn);
  const onLogOut = async () => {
    await logOut();
    queryClient.refetchQueries(["me"]);
  };
  return (
    <HStack w="full" justifyContent="center" h="80px">
      <HStack w="full" px="4" justifyContent="space-between">
        <Image w="120px" src={Logo} />
        <Box>
          <InputGroup>
            <InputRightElement
              children={
                <Box color={"#B0CAD1"}>
                  <AiOutlineSearch />
                </Box>
              }
            />
            <Input
              w="md"
              px="6"
              type="text"
              rounded="full"
              bg="#F5F8FA"
              outline="none"
              border="none"
              placeholder="Search..."
              _placeholder={{ color: "#B0CAD1" }}
            />
          </InputGroup>
        </Box>
        {!userLoading ? (
          !isLoggedIn ? (
            <HStack spacing={8}>
              <Link to="/login">
                <Text fontSize={"14"}>(임시)로그인</Text>
              </Link>
              <Link to="/signup">
                <Text fontSize={"14"}>(임시)회원가입</Text>
              </Link>
            </HStack>
          ) : (
            <HStack spacing={8}>
              <IoIosNotifications size="24" color="red" />
              <HStack spacing={2}>
                <Avatar w="8" h="8" name={user?.name} />
                <Text fontSize={"14"}>{user?.email}</Text>
              </HStack>
              <Menu>
                <MenuButton>
                  <MdOutlineKeyboardArrowDown size="20" />
                </MenuButton>
                <MenuList>
                  <MenuItem>프로필</MenuItem>
                  <MenuItem onClick={onLogOut}>로그아웃</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          )
        ) : null}
      </HStack>
    </HStack>
  );
}
