import {
  Avatar,
  Box,
  Button,
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

export default function Header() {
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
        <HStack spacing={8}>
          <IoIosNotifications size="24" color="red" />
          <HStack spacing={2}>
            <Avatar w="8" h="8" />
            <Text fontSize={"14"}>조현일</Text>
          </HStack>

          <Menu>
            <MenuButton>
              <MdOutlineKeyboardArrowDown size="20" />
            </MenuButton>
            <MenuList>
              <MenuItem>로그인</MenuItem>
              <MenuItem>회원가입</MenuItem>
              <MenuItem>프로필</MenuItem>
              <MenuItem>로그아웃</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </HStack>
  );
}
