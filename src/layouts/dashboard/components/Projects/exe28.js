import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects28() {
  const codeString = `package br.com.ifgoiano.exe28;
  
  public class Teste {
    public static void main(String[] args) {
      int[][] numeros = { { 15, 14, 13, 12, 11 }, { 1, 2, 3, 4, 5 }, { 6, 7, 8, 9, 10 }, { 20, 19, 18, 17, 16 } };
      int minimo;
      int maximo;
  
      for (int i = 0; i < numeros.length; i++) {
        minimo = numeros[i][0];
        maximo = numeros[i][0];
        for (int j = 0; j < numeros[i].length; j++) {
          if (numeros[i][j] < minimo) {
            minimo = numeros[i][j];
          }
          if (numeros[i][j] > maximo) {
            maximo = numeros[i][j];
          }
        }
        System.out.println("Min: " + minimo + " Max: " + maximo);
      }
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe29" onclick="return check()">
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
              28. Escreva um programa Java para encontrar o k-ésimo elemento menor e k-ésimo maior
              em um determinado array multidimensional. Os elementos na matriz podem estar em
              qualquer ordem.
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

export default Projects28;
