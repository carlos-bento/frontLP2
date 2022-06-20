import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects26() {
  const codeString = `package br.com.ifgoiano.exe26;

  import java.util.Scanner;
  
  public class exe26 {
  
      public static void main(String[] args) {
          try (Scanner sc = new Scanner(System.in)) {
              System.out.println("Informe o tamanho da matriz quadrada: ");
              int tamanho = sc.nextInt();
  
              Boolean[][] matriz = new Boolean[tamanho][tamanho];
  
              for (int i = 0; i < matriz.length; i++) {
                  for (int j = 0; j < matriz.length; j++) {
                      System.out.printf("Insira o valor da posição: m[%d][%d]: ", (i + 1), (j + 1));
                      matriz[i][j] = sc.nextBoolean();
                  }
              }
  
              System.out.println("Matriz Original: ");
              for (int i = 0; i < matriz.length; i++) {
                  for (int j = 0; j < matriz.length; j++) {
                      System.out.printf("%b  ", matriz[i][j]);
                  }
                  System.out.print("\n");
              }
  
              System.out.println("Matriz resultante");
              for (int i = 0; i < matriz.length; i++) {
                  for (int j = 0; j < matriz.length; j++) {
                      if (matriz[i][j] == matriz[j][i]) {
                          matriz[i][j] = true;
                      } else {
                          matriz[i][j] = false;
                      }
                      System.out.print(matriz[i][j] + "  ");
                  }
                  System.out.print("\n");
              }
          }
  
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe27" onclick="return check()">
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
              26. Escreva um programa que receba valores booleanos e os distribua em uma matriz
              quadrada. O tamanho da matriz deve ser informado pelo usuário. Para cada valor na
              posição (x, y) da matriz realize a operação AND com o valor que está na posição (y,
              x). Mostre o resultado no console.
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

export default Projects26;
