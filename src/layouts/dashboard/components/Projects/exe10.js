import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects10() {
  const codeString = `package br.com.ifgoiano.exe10;

  import java.util.Scanner;
  
  public class Teste {
  
    public static void main(String[] args) {
  
      try (Scanner scanner = new Scanner(System.in)) {
        float numero;
        char program = 'N';
  
        while (program == 'N' || program == 'n') {
  
          System.out.printf("Digite um numero: ");
          numero = scanner.nextFloat();
  
          if ((numero % 2) == 0)
            System.out.println("- O numero eh par");
          else
            System.out.println("- O numero eh impar");
  
          if (numero > 0)
            System.out.println("- O numero eh positivo");
          if (numero < 0)
            System.out.println("- O numero eh negativo");
          if (numero == 0)
            System.out.println("- O numero eh considerado neutro");
  
          String checar;
          System.out.printf("Deseja encerrar o programa? Digite S para sim ou N para nao \n");
          checar = scanner.next();
  
          program = checar.charAt(0);
  
        }
      }
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe11" onclick="return check()">
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
              10. Faça um programa que leia um número inteiro e mostre uma mensagem indicando se
              este número é par ou ímpar, e se é positivo ou negativo. O programa só deve parar de
              rodar quando o usuário responder S na seguinte pergunta: Deseja encerrar o programa?
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

export default Projects10;
