import {
  Box,
  Heading,
  Icon,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  let contributors = [];
  try {
    const response = await fetch(
      `https://api.github.com/repos/${process.env.REPO_OWNER}/${process.env.REPO_NAME}/contributors`
    );
    contributors = await response.json();
  } catch (error) {}
  return json({ contributors });
};
export default function Index() {
  const data = useLoaderData();
  const contributors =
    data.contributors ||
    ([
      { login: "niraj", avatar_url: "asdasdf", contributions: 23 },
    ] as ContributorInterface[]);
  return (
    <Box>
      <Heading fontSize={{ base: "1.2rem", md: "1.8rem" }} as="h2">
        Our contributors leaderboard
      </Heading>
      <TableContainer my={4}>
        <Table variant="simple">
          <TableCaption>Thanks to all contributors ❤️</TableCaption>
          <Thead>
            <Tr>
              <Th>S.No</Th>
              <Th>Name</Th>
              <Th isNumeric>Score</Th>
            </Tr>
          </Thead>
          <Tbody>
            {contributors?.map(
              (contributor: ContributorInterface, index: number) => (
                <Tr key={index}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <Link
                      href={contributor.html_url}
                      target="_blank"
                      display="flex"
                      alignItems="center"
                      textDecor="none"
                      _hover={{
                        textDecor: "none",
                        color: "#7c7fff",
                      }}
                    >
                      <Box
                        h="2.5rem"
                        w="2.5rem"
                        borderRadius="full"
                        overflow="hidden"
                        mr="2"
                      >
                        <Image
                          h="full"
                          w="full"
                          objectFit="cover"
                          src={contributor.avatar_url}
                        />
                      </Box>
                      {contributor.login}{" "}
                      {index < 5 && (
                        <Tooltip
                          hasArrow
                          label="Top Contributor"
                          bg="primary"
                          color="white"
                          fontSize="0.5rem"
                        >
                          <Icon viewBox="0 0 576 512" h="2rem" ml="1">
                            <path
                              fill="orange"
                              d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 513.9 96 536 96S576 113.9 576 136z"
                            />
                          </Icon>
                        </Tooltip>
                      )}
                    </Link>
                  </Td>
                  <Td isNumeric>
                    <Text fontSize={{ base: "1rem", md: "1.3rem" }}>
                      {contributor.contributions}
                    </Text>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
