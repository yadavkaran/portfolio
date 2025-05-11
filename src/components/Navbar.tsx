import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Link, Text } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work Experience", href: "/work-experience" },
  { label: "Contact", href: "/contact" },
];

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link
    px={3}
    py={2}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "purple.100",
      color: "purple.700",
    }}
    href={href}
    fontWeight="bold"
    fontSize={{ base: "md", md: "lg" }}
    color="white"
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="rgba(30,30,40,0.95)"
      px={4}
      position="sticky"
      top="0"
      zIndex="2000"
      boxShadow="md"
      w="100%"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text
          fontWeight="bold"
          fontSize={{ base: "xl", md: "2xl" }}
          color="purple.300"
          letterSpacing="tight"
        >
          Karan Yadav
        </Text>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="white"
          bg="purple.500"
          _hover={{ bg: "purple.600" }}
        />
        <HStack spacing={6} alignItems={"center"} display={{ base: "none", md: "flex" }}>
          {Links.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={2}>
            {Links.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
} 