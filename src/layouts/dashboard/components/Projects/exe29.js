import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects29() {
  const codeString = `package br.com.ifgoiano.exe29;

  import java.util.Scanner;
  
  public class exe29 {
  
      public static void main(String[] args) {
          try (Scanner sc = new Scanner(System.in)) {
              System.out.println("Digite um valor decimal inteiro para converter ao equivalente em binário");
              int num = sc.nextInt();
  
              convertBinario(num);
          }
      }
  
      public static void convertBinario(int num) {
          int resto;
          String binario = "";
          int aux = num;
  
          if (num < 0) {
              num = num * -1;
              aux = num;
          }
  
          while (num > 0) {
              resto = num % 2;
              binario = resto + binario;
              num = num / 2;
          }
  
          System.out.println("O número " + aux + " em binário é " + binario);
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe30" onclick="return check()">
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
              29. Crie um programa em Java que contenha um método para transformar um valor decimal
              em binário, tendo que são usados os restos das seguidas divisões do número por 2:
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

export default Projects29;
