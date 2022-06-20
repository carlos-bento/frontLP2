import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects24() {
  const codeString = `package br.com.ifgoiano.exe24;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              float catAdj, catOpo;
  
              System.out.printf("Digite o cateto adjacente:");
              catAdj = ler.nextFloat();
  
              System.out.printf("Digite o cateto oposto:");
              catOpo = ler.nextFloat();
  
              CalcHipotenusa hip = new CalcHipotenusa();
              hip.setCalcHipotenusa(catAdj, catOpo);
              System.out.printf("A Hipotenusa e %f:", hip.getCalcHipotenusa());
          }
      }
  }`;

  const codeString2 = `package br.com.ifgoiano.exe24;

  import static java.lang.Math.sqrt;
  
  public class CalcHipotenusa {
  
      double hipotenusa;
  
      public CalcHipotenusa() {
  
      }
  
      public void setCalcHipotenusa(float a, float b){
          hipotenusa = sqrt((a*a) + (b*b));
      }
  
      public double getCalcHipotenusa(){
          return hipotenusa;
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe25" onclick="return check()">
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
              24. Escreva um programa que calcule e retorne o valor da hipotenusa através de um
              método.
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
              <SuiBox alignItems="center" lineHeight={0}>
                <SuiTypography variant="button" fontWeight="regular" color="text">
                  <SyntaxHighlighter
                    showLineNumbers="true"
                    wrapLongLines="true"
                    language="javascript"
                    style={coldarkCold}
                  >
                    {codeString2}
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

export default Projects24;
