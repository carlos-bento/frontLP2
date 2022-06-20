import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects07() {
  const codeString = `package br.com.ifgoiano.exe7;

  import java.util.Scanner;
  
  public class Teste {
  
    public static void main(String args[]) {
      try (Scanner scanner = new Scanner(System.in)) {
        int quantidadeNumeros;
        Double resultado = 1.0;
  
        System.out.print("Digite a quantidade de numeros a serem processados: ");
        quantidadeNumeros = scanner.nextInt();
        Double[] numeros = new Double[quantidadeNumeros];
  
        for (int x = 0; x < numeros.length; x++) {
          System.out.print("Digite um numero: ");
          numeros[x] = scanner.nextDouble();
        }
  
        for (int x = 0; x < numeros.length; x++) {
          for (Double y = numeros[x]; y > 0; y--) {
            resultado = y * resultado;
          }
          System.out.println("O fatorial de " + numeros[x] + " e: " + resultado);
          System.out.printf("O fatorial de %.0f eh igual a %.2f %n", numeros[x], resultado);
        }
      }
  
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe08" onclick="return check()">
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
              7. Escreva um programa que leia: ● a quantidade de números que deverá processar; ● os
              números que deverão ser processados, calcule e exiba, para cada número a ser
              processado, o seu fatorial. Lembrete: O fatorial de um número N é dado pela fórmula:
              N! = 1 * 2 * 3 * 4 * 5 * ... * N
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

export default Projects07;
