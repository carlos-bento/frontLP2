import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects23() {
  const codeString = `package br.com.ifgoiano.exe23;

  import java.math.BigDecimal;
  import java.util.Scanner;
  
  public class exe23 {
  
      public static void main(String[] args) {
  
          try (Scanner sc = new Scanner(System.in)) {
              System.out.println("Digite o salário:");
              BigDecimal salario = sc.nextBigDecimal();
              System.out.println("Digite o percentual de reajuste:");
              Double percentual = sc.nextDouble();
              salario = reajuste(salario, percentual);
  
              System.out.println("O novo salário é: R$ " + salario);
          }
      }
  
      public static BigDecimal reajuste(BigDecimal salario, Double indiceReajuste) {
          return salario.add(salario.multiply(BigDecimal.valueOf(indiceReajuste / 100)));
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe24" onclick="return check()">
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
              23. Escreva um programa que calcule e retorne o salário atualizado através de um
              método chamado reajuste. O método deve receber o valor do salário e o índice de
              reajuste como parâmetro.
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

export default Projects23;
