import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects13() {
  const codeString = `package br.com.ifgoiano.exe13;
  
  public class Teste {
    public static void main(String[] args) {
  
      int graos = 1;
      double graosTabuleiro = 1, casasTabuleiro = 64;
  
      for (int x = 1; x < casasTabuleiro; x++) {
        graosTabuleiro = graosTabuleiro * 2;
        graos += graosTabuleiro;
      }
  
      System.out.println("A quantidade de graos eh: " + graos);
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe14" onclick="return check()">
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
              13. Uma rainha requisitou os serviços de um monge. O monge indagou à rainha se o
              pagamento poderia ser feito com grãos de trigo dispostos em um tabuleiro de xadrez, de
              tal forma que o primeiro quadro deveria conter apenas um grão e os quadros
              subseqüentes, o dobro do quadro anterior. Faça um programa, usando laços de repetição,
              para calcular o número de grãos que o monge esperava receber.
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

export default Projects13;
