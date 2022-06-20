import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects02() {
  const codeString = `package br.com.ifgoiano.exe2;

import java.util.Scanner;

public class Teste {

    public static void main(String[] args) {

        try (Scanner sc = new Scanner(System.in)) {
            Double cotacao, valorInicial, valorFinal;
            System.out.println("Digite a Cotação do Dólar: ");
            cotacao = sc.nextDouble();
            System.out.println("Digite o Valor em Dólar: ");
            valorInicial = sc.nextDouble();

            valorFinal = valorInicial * cotacao;
            System.out.println("Valor em Real: R$" + valorFinal);
        }
    }
}`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe03" onclick="return check()">
        próximo exercício
      </SuiButton>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h6" gutterBottom>
            Exercícios
          </SuiTypography>
          <SuiBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              settings
            </Icon>
            <SuiTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>Teste de código</strong>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Card>
        {" "}
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <SuiBox>
            <SuiTypography variant="h6" gutterBottom>
              2. Faça um programa que: ● Leia a cotação do dólar ● Leia um valor em dólares ●
              Converta esse valor para Real ● Mostre o resultado
            </SuiTypography>
            &nbsp;
            <Card>
              <SuiBox alignItems="center" lineHeight={0}>
                <SuiTypography variant="button" fontWeight="regular" color="text">
                  <SyntaxHighlighter
                    showLineNumbers="true"
                    wrapLongLines="true"
                    language="javascript"
                    style={coldarkCold}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                  &nbsp;
                </SuiTypography>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>
      </Card>
    </Card>
  );
}

export default Projects02;
