import { Center } from "@chakra-ui/react";
import React from "react";

export const TypeBadge = ({ userType }) => {
  const type = userType.substr(0, 2);

  return (
    <Center
      textTransform="uppercase"
      bg={type.toLowerCase()}
      w="34px"
      h="24px"
      fontWeight="bold"
      fontSize="12px"
      lineHeigt="15px"
      rounded="1px"
    >
      {type}
    </Center>
  );
};
