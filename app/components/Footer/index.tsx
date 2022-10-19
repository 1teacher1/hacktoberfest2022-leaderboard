import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box py={4} mt="auto">
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
        }}
      ></Flex>
      <Flex alignItems="center" as="span" mt="2" justifyContent="center">
        <Text as="span" fontSize="sm" mr="2">
          &copy; {new Date().getFullYear()} Hacktoberfest2022. Powered by
        </Text>
        <Link
          href="https://vercel.com/"
          target="_blank"
          display="flex"
          alignItems="center"
          textDecor="none"
          _hover={{ textDecor: "none" }}
        >
          <Image
            src={
              colorMode === "light"
                ? "/vercel-icon.svg"
                : "/vercel-icon-white.svg"
            }
            h="1rem"
          />{" "}
          <Text as="span" ml="1">
            Vercel
          </Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
