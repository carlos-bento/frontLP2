import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects01() {
  const codeString = `package br.com.ifgoiano.exe1;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner scanner = new Scanner(System.in)) {
              Double estoqueMedio, quantidadeMinima, quantidadeMaxima;
  
              System.out.println("Digite a quantidade mínima: ");
              quantidadeMinima = scanner.nextDouble();
              System.out.println("Digite a quantidade máxima: ");
              quantidadeMaxima = scanner.nextDouble();
  
              estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
              System.out.println("O estoque médio é de: R$" + estoqueMedio);
          }
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe02" onclick="return check()">
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
              1. Faça um programa para calcular o estoque médio de uma peça, sendo que: 𝑒𝑠𝑡𝑜𝑞𝑢𝑒𝑀𝑒𝑑𝑖𝑜
              = (𝑞𝑢𝑎𝑛𝑡𝑖𝑑𝑎𝑑𝑒𝑀𝑖𝑛𝑖𝑚𝑎 + 𝑞𝑢𝑎𝑛𝑡𝑖𝑑𝑎𝑑𝑒𝑀𝑎𝑥𝑖𝑚𝑎)/2. Receba as quantidades via teclado.
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

export default Projects01;
