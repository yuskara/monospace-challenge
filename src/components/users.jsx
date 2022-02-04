import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUsers, toggleUserStatus } from "../store/user-slice";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  Checkbox,
  Spinner,
  Box,
  HStack,
  Spacer,
  Icon,
} from "@chakra-ui/react";
import { TypeBadge } from "./type-badge";

export const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) return <Spinner display="block" mx="auto" size="xl" />;

  return (
    <Box>
      <HStack px="10px" mb="10px" align="center">
        <Box boxSize="32px" rounded="full" border="1px solid black" />
        <Box fontSize="18px" fontWeight="500">
          Users
        </Box>
        <Spacer />
        <Box fontSize="12px">2 selected</Box>
        <Box>
          <Icon width="21px" height="22px" viewBox="0 0 21 22">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-1768.000000, -212.000000)"
                stroke="#354069"
              >
                <g transform="translate(111.000000, 207.000000)">
                  <g
                    id="Icons/Questionmark"
                    transform="translate(1658.000000, 6.000000)"
                  >
                    <path
                      d="M6.66666667,6.02190476 C6.66666667,4.99333333 7.45466667,3.33333333 9.69152381,3.33333333 C11.9286667,3.33333333 12.3809524,5.34333333 12.3809524,6.02190476 C12.3809524,6.70047619 12.1700952,7.48361905 10.932381,8.72133333 C9.69380952,9.95904762 9.52380952,10.6019048 9.52380952,11.1904762 L9.52380952,11.9047619"
                      id="Path"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    ></path>
                    <circle
                      id="Oval"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      cx="9.52380952"
                      cy="15.015873"
                      r="1"
                    ></circle>
                    <circle
                      id="Oval"
                      cx="9.52380952"
                      cy="10"
                      r="9.52380952"
                    ></circle>
                  </g>
                </g>
              </g>
            </g>
          </Icon>
        </Box>
      </HStack>
      <Table
        variant="simple"
        fontSize="14px"
        lineHeight="18px"
        color="#39628D"
        sx={{ "th,td": { px: "10px" } }}
      >
        <Thead>
          <Tr borderTop="1px solid #E2E2E2" h="56px">
            <Th w="56px">
              <Checkbox />
            </Th>
            <Th>Type</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Telephone</Th>
            <Th isNumeric>status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr
              key={user.id}
              h="56px"
              h="2px"
              borderBottom="1px solid #E2E2E2"
              _hover={{ bg: "rgba(57,98,141,0.05)", cursor: "pointer" }}
            >
              <Td w="56px">
                <Checkbox />
              </Td>
              <Td>
                <TypeBadge userType={user.type} />
              </Td>
              <Td _hover={{ fontWeight: 600 }}>{user.name}</Td>
              <Td _hover={{ fontWeight: 600 }}>{user.email}</Td>
              <Td _hover={{ fontWeight: 600 }}>{user.phone}</Td>
              <Td isNumeric>
                <Switch
                  size="sm"
                  colorScheme="cyan"
                  isChecked={user.active}
                  onChange={() =>
                    dispatch(
                      toggleUserStatus({ id: user.id, value: !user.active })
                    )
                  }
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
