import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects36() {
  const codeString = `package br.com.ifgoiano.exe36;

  public class Teste {
  
      public static void main(String[] args) {
  
          AutomovelAVenda a = new AutomovelAVenda("","FORD","FOCUS",2006,35000);
          MotocicletaAVenda m = new MotocicletaAVenda("","HONDA","GC150",2012,7500);
  
          a.vendido();
          m.vendido();
      }
  }`;

  const codeString2 = `package br.com.ifgoiano.exe36;

  public class VeiculoAVenda {
  
      String tipo, marca, modelo;
      int ano;
      double precoDeVenda;
  
      public VeiculoAVenda(String tipo, String marca, String modelo, int ano, double precoDeVenda) {
          this.tipo = tipo;
          this.marca = marca;
          this.modelo = modelo;
          this.ano = ano;
          this.precoDeVenda = precoDeVenda;
      }
  
      public String getTipo() {
          return tipo;
      }
  
      public String getMarca() {
          return marca;
      }
  
      public String getModelo() {
          return modelo;
      }
  
      public int getAno() {
          return ano;
      }
  
      public double getPrecoDeVenda() {
          return precoDeVenda;
      }
  
      public void setTipo(String tipo) {
          this.tipo = tipo;
      }
  
      public void setMarca(String marca) {
          this.marca = marca;
      }
  
      public void setModelo(String modelo) {
          this.modelo = modelo;
      }
  
      public void setAno(int ano) {
          this.ano = ano;
      }
  
      public void setPrecoDeVenda(double precoDeVenda) {
          this.precoDeVenda = precoDeVenda;
      }
  
      public interface situacaoVeiculo{
          void vendido();
      }
  
  
  }`;

  const codeString3 = `package br.com.ifgoiano.exe36;

  public class AutomovelAVenda extends VeiculoAVenda implements VeiculoAVenda.situacaoVeiculo {
  
  
      public AutomovelAVenda(String tipo, String marca, String modelo, int ano, double precoDeVenda) {
          super(tipo, marca, modelo, ano, precoDeVenda);
  
          this.tipo = "Automovel";
      }
  
      public void vendido(){
          System.out.printf("O veiculo do tipo "+this.tipo+" feito pela "+marca+" modelo "+modelo+" e ano "+ano+"foi vendido por R$"+precoDeVenda);
      }
  
  
  }`;

  const codeString4 = `package br.com.ifgoiano.exe36;

  public class MotocicletaAVenda extends VeiculoAVenda implements VeiculoAVenda.situacaoVeiculo {
  
      public MotocicletaAVenda(String tipo, String marca, String modelo, int ano, double precoDeVenda) {
          super(tipo, marca, modelo, ano, precoDeVenda);
          this.tipo = "Motocicleta";
      }
  
      public void vendido(){
          System.out.printf("A moto do tipo "+this.tipo+" feito pela "+marca+" modelo "+modelo+" e ano "+ano+"foi vendido por R$"+precoDeVenda);
      }
  
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/profile" onclick="return check()">
        finalizar corre????o
      </SuiButton>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <SuiBox>
          <SuiTypography variant="h6" gutterBottom>
            Exerc??cios
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
              &nbsp;<strong>Teste de c??digo</strong>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Card>
        {" "}
        <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          <SuiBox>
            <SuiTypography variant="h6" gutterBottom>
              36. Escreva uma classe VeiculoAVenda que represente informa????es b??sicas sobre um
              ve??culo gen??rico que esteja ?? venda, com o tipo, marca, modelo, ano e precoDeVenda. ???
              Escreva uma classe AutomovelAVenda que herde de VeiculoAVenda e que inicialize o campo
              tipo com o valor ???Autom??vel???; ??? Escreva uma classe MotocicletaAVenda que herde de
              VeiculoAVenda e que inicialize o campo tipo com o valor ???Motocicleta???. ??? Implemente um
              m??todo vendido que mostre o tipo e o valor de venda do ve??culo. Use polimorfismo para
              personalizar a mensagem de retorno desse m??todo para cada tipo de ve??culo. ??? Crie os
              construtores nas classes filhas de forma a atribuir atributos pr??prios e herdados. ???
              Dispare uma exce????o caso sejam informados valores inv??lidos na inicializa????o dos
              atributos
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
              <SuiBox alignItems="center" lineHeight={0}>
                <SuiTypography variant="button" fontWeight="regular" color="text">
                  <SyntaxHighlighter
                    showLineNumbers="true"
                    wrapLongLines="true"
                    language="javascript"
                    style={coldarkCold}
                  >
                    {codeString3}
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
                    {codeString4}
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

export default Projects36;
