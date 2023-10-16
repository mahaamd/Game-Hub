import { useColorMode, HStack, Text, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack padding={"10px"}>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace="nowrap">dark mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
