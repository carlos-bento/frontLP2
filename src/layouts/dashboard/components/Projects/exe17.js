import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects17() {
  const codeString = `package br.com.ifgoiano.exe17;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
          int contador = 0;
  
          int qntV1 = insereQuantidade();
          int qntV2 = insereQuantidade();
  
          Integer[] v1 = new Integer[qntV1];
          Integer[] v2 = new Integer[qntV2];
  
          v1 = populaVetor(v1);
          v2 = populaVetor(v2);
  
          for (int valoresV1 = 0; valoresV1 < v1.length; valoresV1++) {
              for (int valoresV2 = 0; valoresV2 < v2.length; valoresV2++) {
                  if (v1[valoresV1].equals(v2[valoresV2])) {
                      contador++;
                  }
              }
          }
  
          System.out.println("Os vetores V1 e V2 possuem: " + contador + " valores iguais");
      }
  
      public static Integer insereQuantidade() {
          try (Scanner sc = new Scanner(System.in)) {
              System.out.println("Digite a quantidade de valores do vetor");
              int qnt = sc.nextInt();
  
              verificaQnt(qnt);
  
              return qnt;
          }
      }
  
      public static void verificaQnt(int qnt) {
  
          if (qnt > 50) {
              System.out.println("A quantidade de valores inseridos no vetor devem ser menores que 50");
              insereQuantidade();
          }
  
      }
  
      public static Integer[] populaVetor(Integer[] vetor) {
  
          try (Scanner sc = new Scanner(System.in)) {
              for (int i = 0; i < vetor.length; i++) {
                  System.out.println("Digite o " + (i + 1) + "º valor do vetor: ");
                  vetor[i] = sc.nextInt();
              }
          }
  
          return vetor;
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe18" onclick="return check()">
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
              17. Leia 2 vetores de inteiros V1 e V2 de N componentes cada (no máximo 50). Determine
              e imprima quantas vezes que V1 e V2 possuem valores idênticos nas mesmas posições.
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

export default Projects17;
