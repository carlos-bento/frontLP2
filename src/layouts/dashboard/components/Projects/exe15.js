import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects15() {
  const codeString = `package br.com.ifgoiano.exe15;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              int vet[] = new int[10];
              int x = 0;
              int maior = 0, menor = 0, igual = 0;
              int verificador;
  
              for (int i = 0; i < 10; i++) {
                  verificador = 0;
                  System.out.printf("Digite o %d numero:\n", i + 1);
                  verificador = ler.nextInt();
                  if (verificador > 0) {
                      vet[i] = verificador;
                  } else {
                      System.out.printf("Numero invalido");
                  }
              }
  
              verificador = 0;
              while (verificador <= 0) {
                  System.out.printf("Digite o numero X\n");
                  verificador = ler.nextInt();
                  if (verificador > 0) {
                      x = verificador;
                  } else {
                      System.out.printf("Numero invalido");
                  }
              }
  
              for (int i = 0; i < 10; i++) {
                  if (vet[i] > x) {
                      maior++;
                  } else if (vet[i] < x) {
                      menor++;
                  } else {
                      igual++;
                  }
              }
  
              System.out.printf("%d numeros sao maior que %d\n", maior, x);
              System.out.printf("%d numeros sao menor que %d\n", menor, x);
              System.out.printf("%d numeros sao iguais que %d\n", igual, x);
          }
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe16" onclick="return check()">
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
              15. Considere um vetor de 10 números inteiros positivos maiores que zero e um único
              número inteiro,também positivo e maior que zero. Faça um programa para: ● ler pelo
              teclado o vetor; ● ler pelo teclado o número X; ● dizer quantos números no vetor são
              maiores que X, menores que X e iguais a X
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

export default Projects15;
