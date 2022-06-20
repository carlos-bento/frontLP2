import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects04() {
  const codeString = `package br.com.ifgoiano.exe4;

  import java.util.Scanner;
  
  public class Teste {
  
    private static int valorA;
    private static int valorB;
  
    public static void main(String[] args) {
  
      try (Scanner scanner = new Scanner(System.in)) {
  
        int valorA;
        int valorB;
  
        System.out.println("Digite o valor de A: ");
        valorA = (scanner.nextInt());
        System.out.println("Digite o valor de B: ");
        valorB = (scanner.nextInt());
  
        Teste novoValor = new Teste();
        novoValor.setValorA(valorB);
        novoValor.setValorB(valorA);
  
        System.out.println("Os valores invertidos são: A= " + getValorA() + " e B = " + getValorB());
      }
    }
  
    public static int getValorB() {
      return valorB;
    }
  
    public void setValorB(int valorB) {
      Teste.valorB = valorB;
    }
  
    public static int getValorA() {
      return valorA;
    }
  
    public void setValorA(int valorA) {
      Teste.valorA = valorA;
    }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe05" onclick="return check()">
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
              4. Ler dois valores inteiros para as variáveis A e B, efetuar a troca dos valores de
              modo que a variável A passe a possuir o valor da variável B, e a variável B passe a
              possuir o valor da variável A. Apresentar os valores trocados.
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

export default Projects04;
