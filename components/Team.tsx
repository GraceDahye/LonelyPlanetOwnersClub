import { Box, Flex, Grid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FC } from "react";
import TeamCard from "./TeamCard";

// @ name: 팀원 이름, position: 포지션, image: public/images에 있는 이미지 이름, color: color 이름 (모든 색상이 가능하지는 않습니다.)
const teamCardConfig = [
  {
    name: "KB",
    position: "Team Leader",
    image: "team1.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "NURI",
    position: "Service/Event",
    image: "team2.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "CELINE",
    position: "Design/Artwork",
    image: "team3.png",
    color: "white",
    animation: "tada",
  },
  {
    name: "GRACE",
    position: "Sound/Dev",
    image: "team4.png",
    color: "white",
    animation: "tada",
  },
];

const Team: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Flex minH="100vh" alignItems="center" id="Team" flexDir="column">
      <Box fontSize="6xl" fontWeight="bold" mt={4}>
        {t("team")}
      </Box>
      <Grid
        mt={16}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
      >
        {teamCardConfig.map((v, i) => {
          return (
            <TeamCard
              key={i}
              name={v.name}
              position={v.position}
              image={v.image}
              color={v.color}
              animation={v.animation}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Team;
