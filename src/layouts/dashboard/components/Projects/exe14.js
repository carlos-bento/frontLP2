import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects14() {
  const codeString = `package br.com.ifgoiano.exe14;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner sc = new Scanner(System.in)) {
              System.out.println("Digite a quantidade de números que deseja inserir:");
              Integer qtdNumeros = sc.nextInt();
  
              Integer[] numeros = new Integer[qtdNumeros];
  
              for (int i = 0; i < qtdNumeros; i++) {
                  System.out.println("Digite o " + (i + 1) + "º número:");
                  numeros[i] = sc.nextInt();
              }
  
              geraMatriz(qtdNumeros, numeros);
          }
  
      }
  
      public static void geraMatriz(Integer qtdNumeros, Integer[] numeros) {
  
          boolean matrizQuadrada = true;
  
          Integer tamanho = numeros.length;
          for (Integer linha : numeros) {
              if (tamanho != linha) {
                  matrizQuadrada = false;
                  break;
              }
          }
  
          System.out.println("A matriz é quadrada? " + matrizQuadrada);
  
      }
  
      // create method to print square matrix
      public static void imprimeMatriz(Integer[][] matriz) {
          for (Integer[] integers : matriz) {
              for (Integer integer : integers) {
                  System.out.print(integer + " ");
              }
              System.out.println();
          }
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe15" onclick="return check()">
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
              14. Dada uma sequência de números (vetor de inteiros) digitada pelo usuário, imprima-a
              na forma de uma matriz quadrada com o mínimo de linhas e colunas possíveis,
              preenchendo as linhas e colunas com os valores. Caso a quantidade de valores não ocupe
              a matriz inteira, complete com zeros. Exemplo: os números de 1 a 10 não cabem em uma
              matriz 3x3, então usar uma matriz 4x4 e completar com zeros.
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

export default Projects14;
