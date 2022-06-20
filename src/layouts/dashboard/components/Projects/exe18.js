import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects18() {
  const codeString = `package br.com.ifgoiano.exe18;

  import java.util.Random;
  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              Random gerador = new Random();
              int numTentativas = 0;
              int numEscolhido = -1;
              int sorteado = gerador.nextInt(100);
  
              while (numEscolhido != sorteado) {
                  numTentativas++;
                  System.out.printf("Digite um numero:\n");
                  numEscolhido = ler.nextInt();
                  if (numEscolhido > sorteado) {
                      System.out.printf("Numero digitado maior\n");
                  } else if (numEscolhido < sorteado) {
                      System.out.printf("Numero digitado menor\n");
                  }
              }
  
              System.out.printf("Escolhido numero sorteado, quantidades de tentativas: %d\n", numTentativas);
          }
  
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe19" onclick="return check()">
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
              18. Fazer um programa que sorteie um número de 0 a 100 e peça para que o usuário (sem
              conhecer o número sorteado) tente acertar. Caso não acerte, o programa deve imprimir
              uma mensagem informando se o número sorteado é maior ou menor que a tentativa feita.
              Deixe que o usuário tente até acertar o número e imprima a quantidade de tentativas
              feitas.
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

export default Projects18;
