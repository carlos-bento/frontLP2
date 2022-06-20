/* eslint-disable react/prop-types */

import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";
import logoJava from "assets/images/small-logos/logo-java.png";
import carlosFoto from "assets/images/carlos-foto.jpg";
import rosiFoto from "assets/images/rosi-foto.png";
import marcosFoto from "assets/images/marcos-foto.png";
import Tooltip from "@mui/material/Tooltip";
import SuiAvatar from "components/SuiAvatar";
import SuiButton from "components/SuiButton";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

const avatars = (members) =>
  members.map(([image, name]) => (
    <Tooltip key={name} title={name} placeholder="bottom">
      <SuiAvatar
        src={image}
        alt="name"
        size="xs"
        sx={{
          border: ({ borders: { borderWidth }, palette: { white } }) =>
            `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        }}
      />
    </Tooltip>
  ));

// const codigo: (), = <SuiButton color="info">testes</SuiButton>;

const projectsTableData = {
  columns: [
    { name: "projeto", align: "left" },
    { name: "autores", align: "left" },
    { name: "status", align: "left" },
    { name: "progresso", align: "center" },
    { name: "codigo", align: "center" },
  ],

  rows: [
    {
      projeto: [logoJava, "Exercicio 01"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe01" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 02"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe02" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 03"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe03" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 04"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe04" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 05"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe05" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 06"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe06" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 07"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe07" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 08"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe08" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 09"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe09" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 10"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe10" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 11"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe11" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 12"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe12" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 13"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe13" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 14"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe14" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 15"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe15" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 16"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe16" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 17"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe17" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 18"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe18" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 19"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe19" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 20"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe20" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 21"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe21" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 22"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe22" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 23"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe23" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 24"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe24" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 25"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe25" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 26"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe26" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 27"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe27" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 28"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe28" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 29"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe29" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 30"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe30" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 31"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe31" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 32"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe32" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 33"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe33" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 34"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe34" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 35"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [marcosFoto, "Marcos"],
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe35" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
    {
      projeto: [logoJava, "Exercicio 36"],
      autores: (
        <SuiBox display="flex" py={1}>
          {avatars([
            [rosiFoto, "Rosi"],
            [carlosFoto, "Carlos"],
            [marcosFoto, "Marcos"],
          ])}
        </SuiBox>
      ),
      status: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          completo
        </SuiTypography>
      ),
      progresso: <Completion value={100} color="success" />,
      codigo: (
        <SuiButton color="info" href="/dashboard/exe36" onclick="return check()">
          mostrar codigo
        </SuiButton>
      ),
    },
  ],
};

export default projectsTableData;
