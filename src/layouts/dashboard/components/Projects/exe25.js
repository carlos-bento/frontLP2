import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects25() {
  const codeString = `package br.com.ifgoiano.exe25;

  import java.util.Scanner;
  
  public class exe25 {
  
      public static void main(String[] args) {
  
          try (Scanner scanner = new Scanner(System.in)) {
              System.out.println("Informe o tamanho da matriz quadrada: ");
              int tamanho = scanner.nextInt();
  
              Integer[][] matriz = new Integer[tamanho][tamanho];
  
              for (int i = 0; i < tamanho; i++) {
                  for (int j = 0; j < tamanho; j++) {
                      System.out.printf("Insira o valor na posição m[%d][%d] = ", (i + 1), (j + 1));
                      matriz[i][j] = scanner.nextInt();
                  }
              }
  
              System.out.println("Matriz Original: ");
              for (int i = 0; i < tamanho; i++) {
                  for (int j = 0; j < tamanho; j++) {
                      System.out.printf("%d  ", matriz[i][j]);
                  }
                  System.out.print("\n");
              }
  
              System.out.println("\nMatriz Inversa: ");
              for (int i = 0; i < tamanho; i++) {
                  for (int j = 0; j < tamanho; j++) {
                      System.out.printf("%d  ", matriz[j][i]);
                  }
                  System.out.print("\n");
              }
          }
  
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe26" onclick="return check()">
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
              25. Escreva um programa que receba valores inteiros e os distribua em uma matriz
              quadrada. O tamanho da matriz deve ser informado pelo usuário. Depois troque os
              valores das linhas e colunas. Exemplo: o valor que estiver na linha 2, coluna 3, passa
              a estar na linha 3, coluna 2.
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

export default Projects25;
