import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects30() {
  const codeString = `package br.com.ifgoiano.exe30;

  import java.util.Random;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          int i, cont = 0;
          Random gerador = new Random();
          int vet[] = new int[10];
          int vetAjustado[] = new int[10];
  
          System.out.printf("Vetor inicial:\n");
          for (i = 0; i < 10; i++) {
              vet[i] = gerador.nextInt();
              System.out.printf("%d\t", vet[i]);
          }
  
          // Armazenar menor que zero
          for (i = 0; i < 10; i++) {
              if (vet[i] < 0) {
                  vetAjustado[cont] = vet[i];
                  cont++;
              }
          }
          // Armazenar maior igual a zero
          for (i = 0; i < 10; i++) {
              if (vet[i] > 0) {
                  vetAjustado[cont] = vet[i];
                  cont++;
              }
          }
  
          System.out.printf("\nVetor ajustado:\n");
  
          for (i = 0; i < 10; i++) {
              System.out.printf("%d\t", vetAjustado[i]);
          }
  
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe31" onclick="return check()">
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
              30. Escreva um programa Java para mover todos os números positivos para a direita e
              todos os números negativos para a esquerda de um determinado array de inteiros.
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

export default Projects30;
