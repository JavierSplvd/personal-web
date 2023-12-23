import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Link, Stack } from "@chakra-ui/layout";
import { NAV_ITEMS } from "./NAV_ITEMS";

export const Menu: React.FC = () => {
  return (
    <>
      <Flex
        zIndex={10}
        position="absolute"
        top={0}
        left={0}
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <Stack
          direction="column"
          spacing={4}
          align="center"
          padding="2rem"
          borderRadius="1rem"
          backgroundColor="whiteAlpha.500"
          border="1px solid white"
        >
          {NAV_ITEMS.map((navItem) => (
            <Link key={navItem.label} width="100%" href={navItem.href} target={navItem.external ? "_blank" : "_self"}>
              {navItem.label}
              {navItem.external && (
                <ExternalLinkIcon
                  marginLeft="0.5rem"
                  marginBottom="0.2rem"
                  fontSize="0.75rem"
                />
              )}
            </Link>
          ))}
        </Stack>
      </Flex>
    </>
  );
};
