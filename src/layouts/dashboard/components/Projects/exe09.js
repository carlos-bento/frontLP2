import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects09() {
  const codeString = `package br.com.ifgoiano.exe9;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              float C, N, salario, E = 0;
              char p = 'N';
  
              while (p == 'N' || p == 'n') {
  
                  System.out.printf("Informe o codigo: ");
                  C = ler.nextFloat();
  
                  System.out.printf("Informe o numero de horas: ");
                  N = ler.nextFloat();
  
                  if (N >= 50) {
                      salario = 10 * N;
                      E = 20 * (N - 50);
                  } else {
                      salario = 10 * N;
                  }
  
                  System.out.printf(
                          "Trabalhador codigo %.0f recebeu um salario de R$ %.2f e um salario excedente de R$ %.2f\n", C,
                          salario, E);
  
                  String ver;
  
                  System.out.printf("Deseja encerrar o programa? (S)sim ou (N)nao \n");
                  ver = ler.next();
  
                  p = ver.charAt(0);
  
              }
          }
  
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe10" onclick="return check()">
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
              9. Faça um programa que leia as variáveis C e N, sendo respectivamente código e número
              de horas trabalhadas de um operário. Calcule o salário, tendo que ele ganha R$ 10,00
              por hora. Quando o número de horas exceder a 50, calcule o excesso de pagamento
              armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
              trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
              excedente. O programa só deve parar de rodar quando o usuário responder “S” na
              seguinte pergunta: “Deseja encerrar o programa?
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

export default Projects09;
