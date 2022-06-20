import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects20() {
  const codeString = `package br.com.ifgoiano.exe20;

  import java.util.Locale;
  import java.util.Scanner;
  
  public class exe20 {
  
      public static void main(String[] args) {
  
          String frase = "";
          try (Scanner sc = new Scanner(System.in)) {
              System.out.println("Digite uma frase: ");
              frase = sc.nextLine();
          }
  
          contaVogais(frase);
  
      }
  
      public static void contaVogais(String frase) {
  
          // String[] vogais = {"A", "E", "I", "O", "U"};
          String vogaisDaFrase = "";
          frase = frase.toUpperCase(Locale.ROOT);
  
          for (int i = 0; i < frase.length(); i++) {
  
              if (frase.charAt(i) == 'a' || frase.charAt(i) == 'e' || frase.charAt(i) == 'i' || frase.charAt(i) == 'o'
                      || frase.charAt(i) == 'u' || frase.charAt(i) == 'A' || frase.charAt(i) == 'E'
                      || frase.charAt(i) == 'I' || frase.charAt(i) == 'O' || frase.charAt(i) == 'U') {
                  vogaisDaFrase += frase.charAt(i) + ", ";
              }
          }
  
          System.out.println("Vogais: " + vogaisDaFrase);
  
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe21" onclick="return check()">
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
              20. Fazer um programa que leia uma frase e imprima somente as vogais.
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

export default Projects20;
