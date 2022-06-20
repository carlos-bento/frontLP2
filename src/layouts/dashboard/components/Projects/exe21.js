import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects21() {
  const codeString = `package br.com.ifgoiano.exe21;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              int Tam;
              int media = 0;
              int maior = -1;
  
              System.out.printf("Digite a quantidade de numeros que deseja digitar:\n");
              Tam = ler.nextInt();
  
              int vet[] = new int[Tam];
  
              for (int i = 0; i < Tam; i++) {
                  System.out.printf("Digite um numero:\n");
                  vet[i] = ler.nextInt();
              }
  
              for (int i = 0; i < Tam; i++) {
                  if (vet[i] > maior) {
                      maior = vet[i];
                  }
                  media = media + vet[i];
              }
  
              System.out.printf("Media e igual a : %d e o maior e %d\n", media / Tam, maior);
          }
  
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe22" onclick="return check()">
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
              21. Fazer um programa para armazenar em um vetor, vários números inteiros e positivos
              e calcular a média destes. Imprimir também o maior valor. A quantidade de números
              lidos será definida pelo usuário.
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

export default Projects21;
