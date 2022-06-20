import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import { card, cardContent, cardIconBox, cardIcon } from "examples/Sidenav/styles/sidenavCard";
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <SuiBox
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon fontSize="medium" sx={(theme) => cardIcon(theme, { sidenavColor })}>
            star
          </Icon>
        </SuiBox>
        <SuiBox lineHeight={1}>
          <SuiTypography variant="h6" color="white">
            Atividade Avaliativa
          </SuiTypography>
          <SuiBox mb={1.825} mt={-1}>
            <SuiTypography variant="caption" color="white" fontWeight="medium">
              Linguagem de Programação 2
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
