import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects03() {
  const codeString = `package br.com.ifgoiano.exe3;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner recebe = new Scanner(System.in)) {
              int[] numeros = new int[3];
  
              int igualValor = 0;
              int naoigualValor = 0;
              int maiorValor = 0;
              int menorValor = 0;
              int maiorouigualValor = 0;
              int menorouigualValor = 0;
  
              int checar = 0; // iniciando a variavel
  
              System.out.println("Verificador de relacionamentos");
  
              for (int i = 0; i < 3; i++) {
                  System.out.println("Informe o " + (i + 1) + " valor: ");
                  numeros[i] = recebe.nextInt();
              }
  
              igualValor = numeros[0];
              naoigualValor = numeros[0];
              menorValor = numeros[0];
              maiorValor = numeros[0];
              maiorouigualValor = numeros[0];
              menorouigualValor = numeros[0];
  
              for (int i = 0; i < numeros.length; i++) {
  
                  checar += numeros[i];
  
                  if (igualValor == numeros[i])
                      igualValor = numeros[i];
  
                  if (naoigualValor != numeros[i])
                      naoigualValor = numeros[i];
  
                  if (menorValor > numeros[i])
                      menorValor = numeros[i];
  
                  if (maiorValor < numeros[i])
                      maiorValor = numeros[i];
  
                  if (maiorouigualValor <= numeros[i])
                      maiorouigualValor = numeros[i];
  
                  if (menorouigualValor >= numeros[i])
                      menorouigualValor = numeros[i];
              }
  
              System.out.println("");
              System.out.println("Menor valor: " + menorValor);
              System.out.println("Maior valor: " + maiorValor);
              System.out.println("");
              System.out.println("Valor maior ou igual aos outros: " + maiorouigualValor);
              System.out.println("Valor menor ou igual aos outros: " + menorouigualValor);
              System.out.println("");
              System.out.println("Valores que sao iguais: " + igualValor);
              System.out.println("Valores que nao sao iguais: " + naoigualValor);
          }
  
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe04" onclick="return check()">
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
              3. Escrever um programa que leia três números inteiros e mostre todos os
              relacionamentos de ordem existentes entre eles. Os relacionamentos possíveis são:
              Igual, Não igual, Maior, Menor, Maior ou igual, Menor ou igual.
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

export default Projects03;
