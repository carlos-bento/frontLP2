import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects33() {
  const codeString = `package br.com.ifgoiano.exe33;

  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          try (Scanner ler = new Scanner(System.in)) {
              int dia = 0, mes = 0, ano = 0;
              Data d = new Data();
              boolean validar = false;
  
              while (validar == false) {
  
                  System.out.printf("Digite o dia: ");
                  dia = ler.nextInt();
  
                  System.out.printf("Digite o mes: ");
                  mes = ler.nextInt();
  
                  System.out.printf("Digite o ano: ");
                  ano = ler.nextInt();
  
                  validar = d.isValidarData(dia, mes, ano);
  
                  if (validar == false) {
                      System.out.printf("Data invalida\n");
                  }
  
              }
  
              d.setDia(dia);
              d.setMes(mes);
              d.setAno(ano);
              System.out.printf("" + d.toString());
          }
      }
  
  }`;

  const codeString2 = `package br.com.ifgoiano.exe33;

  public class Data {
  
      private int dia, mes, ano;
  
      public Data(int dia, int mes, int ano) {
          this.dia = dia;
          this.mes = mes;
          this.ano = ano;
      }
  
      public Data() {
  
      }
  
      public void setDia(int dia) {
          this.dia = dia;
      }
  
      public void setMes(int mes) {
          this.mes = mes;
      }
  
      public void setAno(int ano) {
          this.ano = ano;
      }
  
      public int getDia() {
          return dia;
      }
  
      public int getMes() {
          return mes;
      }
  
      public int getAno() {
          return ano;
      }
  
      public boolean isValidarData(int dia, int mes, int ano) {
  
          if ((mes == 1) || (mes == 3) || (mes == 5) || (mes == 7) || (mes == 8) || (mes == 10) || (mes == 12)) {
              if ((dia < 01) || (dia > 31)) {
                  return false;
              }
          } else
  
          if ((mes == 4) || (mes == 6) || (mes == 9) || (mes == 11)) {
              if ((dia < 01) || (dia > 30)) {
                  return false;
              }
          } else
  
          if ((mes == 02)) {
              if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
                  if ((dia < 01) || (dia > 29)) {
                      return false;
                  }
              } else {
                  if ((dia < 01) || (dia > 28)) {
                      return false;
                  }
              }
          }
          if ((mes > 12))
              return false;
  
          return true;
      }
  
      public String toString() {
          if (this.mes == 1) {
              return dia + "/Janeiro/" + ano;
          }
          if (this.mes == 2) {
              return dia + "/Fereveiro/" + ano;
          }
          if (this.mes == 3) {
              return dia + "/Março/" + ano;
          }
          if (this.mes == 4) {
              return dia + "/Abril/" + ano;
          }
          if (this.mes == 5) {
              return dia + "/Maio/" + ano;
          }
          if (this.mes == 6) {
              return dia + "/Junho/" + ano;
          }
          if (this.mes == 7) {
              return dia + "/Julho/" + ano;
          }
          if (this.mes == 8) {
              return dia + "/Agosto/" + ano;
          }
          if (this.mes == 9) {
              return dia + "/Setembro/" + ano;
          }
          if (this.mes == 10) {
              return dia + "/Outubro/" + ano;
          }
          if (this.mes == 11) {
              return dia + "/Novembro/" + ano;
          }
          if (this.mes == 12) {
              return dia + "/Dezembro/" + ano;
          } else {
              return "Data inválida";
          }
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe34" onclick="return check()">
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
              33. Implementar uma classe Data que deve possuir como características os atributos
              dia, mês e ano (todas do tipo inteiro). Nesta classe além dos métodos construtores,
              getters, setters e toString, deverá ser implementado o método validarData (int, int,
              int): boolean que deverá disparar uma exceção caso as informações passadas por
              parâmetros sejam inválidas. Este método deverá inclusive verificar se é ano bissexto.
              O método toString deverá retornar uma string no seguinte formato “dia/mês/ano”, como
              por exemplo “05/março/2015”
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

export default Projects33;
