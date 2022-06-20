import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects06() {
  const codeString = `package br.com.ifgoiano.exe6;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
          try (Scanner receber = new Scanner(System.in)) {
  
              int a = 0, b = 0, c = 0;
              int menorValor = 0;
              int maiorValor = 0;
              int checar = 0; // inicializando variavel
  
              System.out.println("Verificando valores");
  
              System.out.println("Digite um valor para A:");
              a = receber.nextInt();
              if (a <= 0) {
                  System.out.println("Digite um valor para A que seja maior do que 0:");
                  a = receber.nextInt();
              }
  
              System.out.println("Digite um valor para B:");
              b = receber.nextInt();
              if (b <= 0) {
                  System.out.println("Digite um valor para B que seja maior do que 0:");
                  b = receber.nextInt();
              }
  
              System.out.println("Digite um valor para C:");
              c = receber.nextInt();
              if (c <= 0) {
                  System.out.println("Digite um valor para C que seja maior do que 0:");
                  c = receber.nextInt();
              }
  
              int[] valor = { a, b, c };
              menorValor = valor[0];
              maiorValor = valor[0];
  
              for (int i = 0; i < valor.length; i++) {
                  checar += valor[i];
  
                  if (menorValor > valor[i])
                      menorValor = valor[i];
  
                  if (maiorValor < valor[i])
                      maiorValor = valor[i];
  
              }
  
              System.out.println("Maior valor multiplicado pelo o menor valor: " + maiorValor * menorValor);
              System.out.println("Maior valor divido pelo menor valor: " + maiorValor / menorValor);
  
          }
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe07" onclick="return check()">
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
              6. Escrever um programa declarando três variáveis do tipo inteiro (a, b e c). Ler um
              valor maior que zero para cada variável (se o valor digitado não é válido, mostrar
              mensagem e ler novamente). Exibe o menor lido multiplicado pelo maior e o maior valor
              dividido pelo menor.
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

export default Projects06;
