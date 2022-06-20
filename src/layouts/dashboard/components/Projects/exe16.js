import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects16() {
  const codeString = `package br.com.ifgoiano.exe16;

  import java.util.Scanner;
  
  public class Teste {
    public static void main(String[] args) {
      try (Scanner scanner = new Scanner(System.in)) {
  
        int candidatasInscritas = 10;
        int candidatasAptas = 0;
        String[] nome = new String[candidatasInscritas];
        int[] idade = new int[candidatasInscritas];
  
        for (int x = 0; x < candidatasInscritas; x++) {
          System.out.print("Digite o nome da candidata numero " + (x + 1) + ": ");
          nome[x] = scanner.nextLine();
          System.out.print("Digite a idade da candidata numero " + (x + 1) + ": ");
          idade[x] = Integer.parseInt(scanner.nextLine());
  
          if (idade[x] >= 18 && idade[x] <= 20) {
            candidatasAptas++;
          }
        }
  
        String[] nomeCandidatasAptas = new String[candidatasAptas];
        int[] idadeCandidatasAptas = new int[candidatasAptas];
        int y = 0;
  
        for (int x = 0; x < candidatasInscritas; x++) {
          if (idade[x] >= 18 && idade[x] <= 20) {
            nomeCandidatasAptas[y] = nome[x];
            idadeCandidatasAptas[y] = idade[x];
            y++;
          }
        }
  
        for (int x = 0; x < candidatasAptas; x++) {
          System.out.println("\nCandidata apta numero " + (x + 1) + ": ");
          System.out.printf("Nome: %s\nIdade: %d\n", nomeCandidatasAptas[x], idadeCandidatasAptas[x]);
        }
  
        if (candidatasAptas == 0) {
          System.out.println("\nNao existem candidatas aptas para esta campanha");
        }
  
      } catch (NumberFormatException e) {
        e.printStackTrace();
      }
  
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe17" onclick="return check()">
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
              16. Uma agência de publicidade precisa encontrar uma modelo que tenha idade entre 18 e
              20 anos para participar de uma campanha. Foram inscritas 10 candidatas, fornecendo
              nome e idade. Tais informações foram armazenadas em 2 vetores distintos. Faça um
              programa que imprima o vetor que contém os nomes das candidatas aptas a concorrer a
              uma vaga para a campanha.
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

export default Projects16;
