import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects11() {
  const codeString = `package br.com.ifgoiano.exe11;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner sc = new Scanner(System.in)) {
              String sair = "";
  
              while (!(sair).equalsIgnoreCase("S")) {
                  recebeIndice();
                  System.out.println("Deseja sair? (S para sair e N para não)");
                  sair = sc.next();
              }
          }
  
      }
  
      public static void recebeIndice() {
          try {
              try (Scanner sc = new Scanner(System.in)) {
                  System.out.println("Digite o índice de poluíção medido:");
                  Double indice = sc.nextDouble();
                  verificaIndice(indice);
              }
          } catch (Exception e) {
              System.out.println("Erro: o valor digitado deve ser um número! Erro: " + e.getMessage());
              recebeIndice();
          }
      }
  
      public static void verificaIndice(Double indice) {
  
          if (indice >= 0.3 && indice < 0.4) {
              System.out.println("Indústrias do primeiro grupo devem suspender atividades!");
          } else if (indice >= 0.4 && indice < 0.5) {
              System.out.println("Indústrias do primeiro e do segundo grupo devem suspender atividades!");
          } else if (indice >= 0.5) {
              System.out.println("Indústrias de todos os grupos devem suspender atividades!");
          } else {
              System.out.println("Não há necessidade de suspensão de atividades!");
          }
  
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe12" onclick="return check()">
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
              11. A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
              indústrias que são altamente poluentes do meio ambiente. O índice de poluição
              aceitável varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1° grupo
              são intimadas a suspenderem suas atividades, se o índice crescer para 0,4 as
              indústrias do 1°o e 2° grupo são intimadas a suspenderem suas atividades, se o índice
              atingir 0,5 todos os grupos devem ser notificados a paralisarem suas atividades. Faça
              um programa que leia o índice de poluição medido e emita a notificação adequada aos
              diferentes grupos de empresas. O algoritmo só deve parar de rodar quando o usuário
              responder S na seguinte pergunta: Deseja encerrar o programa?
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

export default Projects11;
