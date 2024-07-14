import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { useAccount } from "wagmi";

import {
  CopyToClipboardButton,
  CircleQuestion,
  QRCodeGiveBadge,
  TheFooterNavbar,
  TheHeader,
  TicketIcon,
} from "@/components/01-atoms";
import { getEllipsedAddress } from "@/utils/formatters";

export const CheckinSection = () => {
  const { address, chain } = useAccount();

  return (
    <Flex flexDirection="column" minHeight="100vh" marginBottom="60px">
      <TheHeader />

      <Box
        flex={1}
        as="main"
        className="p-6 sm:px-[60px] sm:py-[80px] flex flex-col items-center"
        gap={6}
      >
        <Card
          className="px-8 py-6 mt-6 relative"
          background={"#212223"}
          border={2}
          borderRadius={16}
        >
          <Flex className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-1/2 border dark:border-[#161617] border-[#707572] bg-[#F6F6F6] dark:bg-[#212322] rounded-full w-[72px] h-[72px] flex items-center justify-center">
            <TicketIcon />
          </Flex>
          <CardHeader
            gap={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"column"}
            p={0}
            pt={6}
          >
            <Flex className={"items-center"}>
              <Text className="text-center text-lime-400 text-2xl font-normal font-['Space Grotesk'] leading-loose">
                Check in ZuVillage Georgia
              </Text>
            </Flex>
            <Flex className={"items-center"} gap={2}>
              <Text className="text-center text-slate-50 text-base font-normal leading-snug">
                To start, please find a Manager to check you in.
              </Text>
            </Flex>
          </CardHeader>
          <CardBody display={"flex"} flexDirection={"column"} p={0}>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              {address && chain ? (
                <>
                  <QRCodeGiveBadge />

                  <Flex
                    color="white"
                    className="justify-center items-center gap-2"
                  >
                    <Text>{getEllipsedAddress(address)}</Text>
                    <CopyToClipboardButton isUserAddress />
                  </Flex>
                </>
              ) : (
                "NO WALLET CONNECTED"
              )}
            </Flex>
          </CardBody>
        </Card>

        <Flex flexDirection={"column"} className="w-full h-full items-center">
          <Divider className="border-slate-50 opacity-10 w-full" />
          <Flex className="w-full flex-row py-3" gap={4}>
            <CircleQuestion />
            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Text className="text-slate-50 text-sm font-normal leading-tight">
                What Trustful is?
              </Text>
            </Flex>
          </Flex>
          <Divider className="border-slate-50 opacity-10 w-full" />
          <Flex className="w-full flex-row py-3" gap={4}>
            <CircleQuestion />
            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Text className="text-slate-50 text-sm font-normal leading-tight">
                How it works in ZuVillage?
              </Text>
            </Flex>
          </Flex>
          <Divider className="border-slate-50 opacity-10 w-full" />
          <Flex className="w-full flex-row py-3" gap={4}>
            <CircleQuestion />
            <Flex flexDirection={"column"} justifyContent={"center"}>
              <Text className="text-slate-50 text-sm font-normal leading-tight">
                What to do now
              </Text>
            </Flex>
          </Flex>
          <Divider className="border-slate-50 opacity-10 w-full" />
        </Flex>
      </Box>
      <TheFooterNavbar />
    </Flex>
  );
};
