import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects22() {
  const codeString = `package br.com.ifgoiano.exe22;

  import java.util.Scanner;
  
  public class Teste {
    public static void main(String[] args) {
      try (Scanner scanner = new Scanner(System.in)) {
        char[] alfabeto = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'x', 'w', 'y', 'z' };
  
        System.out.print("Digite a primeira letra: ");
        char letraUm = (char) scanner.nextLine().toLowerCase().charAt(0);
        int primeiraLetra = buscarLetra(letraUm, alfabeto);
  
        System.out.print("Digite a segunda letra: ");
        char letraDois = (char) scanner.nextLine().toLowerCase().charAt(0);
        int segundaLetra = buscarLetra(letraDois, alfabeto);
  
        int diferencas = segundaLetra - primeiraLetra;
        if (primeiraLetra >= 0 && segundaLetra >= 0 && diferencas >= 0) {
          System.out.println("O numero de caracteres existente entre as letras digitadas eh de: " + (diferencas - 1));
        } else {
          System.out.println("Erro: os caracteres digitados nao estao em ordem alfabetica.");
        }
      }
    }
  
    public static int buscarLetra(char variavel, char[] alfabeto) {
      int numero = 0;
      for (int x = 0; x < alfabeto.length; x++) {
        if (alfabeto[x] == variavel) {
          numero = x;
        }
      }
      return numero;
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe23" onclick="return check()">
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
              22. Escreva um programa que solicite dois caracteres de A a Z ao usuário e imprima o
              número de caracteres existente entre eles. Assuma que o usuário digite os 2 caracteres
              em ordem alfabética. Caso não o estejam, emitir mensagem de erro. ● Exemplo: Digite 2
              caracteres: J T ● O número de caracteres entre eles é: 9
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

export default Projects22;
