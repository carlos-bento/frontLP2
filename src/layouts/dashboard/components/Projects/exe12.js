import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects12() {
  const codeString = `package br.com.ifgoiano.exe12;

  import java.util.List;
  import java.util.Scanner;
  import java.util.ArrayList;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              List<Integer> list = new ArrayList<>();
              int num;
              int maior, menor;
  
              System.out.printf("Digite um numero:\n");
              num = ler.nextInt();
              list.add(num);
  
              maior = num;
              menor = num;
  
              while (num != 0) {
  
                  System.out.printf("Digite um numero:\n");
                  num = ler.nextInt();
                  list.add(num);
  
                  if (num > maior) {
                      maior = num;
                  }
                  if (num < menor && num != 0) {
                      menor = num;
                  }
              }
  
              System.out.printf("Maior numero digitado %d\n", maior);
              System.out.printf("Menor numero digitado %d\n", menor);
              System.out.println("Finalizado programa (Digitado numero 0)");
          }
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe13" onclick="return check()">
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
              12. Faça um programa que determine o maior e o menor entre N números lidos e
              armazenados em um array unidimensional. A condição de parada é a entrada de um valor
              0, ou seja, o programa deve ficar executando até que a entrada seja igual a 0 (ZERO).
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

export default Projects12;
