import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects19() {
  const codeString = `package br.com.ifgoiano.exe19;

  import java.util.Scanner;
  
  public class Teste {
    public static void main(String[] args) {
  
      try (Scanner scanner = new Scanner(System.in)) {
  
        String fraseDigitada;
        String fraseRefatorada = "";
  
        do {
          System.out.print("Digite uma frase de ate 50 characteres: ");
          fraseDigitada = scanner.nextLine();
        } while (fraseDigitada.length() > 50);
  
        char[] fraseArray = fraseDigitada.toCharArray();
        int contadorEspacos = 0;
  
        for (int x = 0; x < fraseArray.length; x++) {
          if (fraseArray[x] != ' ') {
            fraseRefatorada = fraseRefatorada + fraseArray[x];
          }
          if (fraseArray[x] == ' ') {
            contadorEspacos++;
          }
        }
        System.out.println();
        System.out.println("Frase com os espacos retirados: " + fraseRefatorada);
        System.out.println("Quantidade de espacos retirados: " + contadorEspacos);
      }
  
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe20" onclick="return check()">
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
              19. Fazer um programa que leia uma frase de até 50 caracteres e imprima a frase sem os
              espaços em branco. Imprimir também a quantidade de espaços em branco da frase.
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

export default Projects19;
