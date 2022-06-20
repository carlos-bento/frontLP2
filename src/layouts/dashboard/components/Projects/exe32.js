import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects32() {
  const codeString = `package br.com.ifgoiano.exe32;

  import java.util.Scanner;
  
  public class Teste {
    public static void main(String[] args) {
      try (Scanner scanner = new Scanner(System.in)) {
        int limiteLampada = 30, quantidadeLampada = 0, opcoes;
        Lampada[] lampadas = new Lampada[limiteLampada];
        do {
          System.out.println(
              "Digite uma das seguntes opções:\n\t1: Cadastrar lampadas\n\t2: Exibir todas as lampadas\n\t3: Exibir quantidade de lampadas cadastradas\n\t4: Consultar quantidade de lampadas de uma determinada potência\n\t5: Exibir os dados das lampadas com preço menor do que o preço medio das lampadas cadastradas\n\t6: Exibir a quantidade de lampadas acesas e apagadas\n\t0: Encerrar programa");
          opcoes = Integer.parseInt(scanner.nextLine());
          switch (opcoes) {
            case 1:
              if (quantidadeLampada >= limiteLampada) {
                System.out.println("O numero maximo de lampadas cadastradas eh 30");
              } else {
                String tipo, cor, marca;
                int voltagem;
                boolean status;
                double preco, potencia;
  
                System.out.print("Digite o tipo da lampada(led, fluorescente,...): ");
                tipo = scanner.nextLine();
                System.out.print("Digite a cor da lampada: ");
                cor = scanner.nextLine();
                System.out.print("Digite a marca da lampada: ");
                marca = scanner.nextLine();
                System.out.print("Digite a voltagem da lampada: ");
                voltagem = Integer.parseInt(scanner.nextLine());
                System.out.print("Digite o preco da lampada: ");
                preco = Double.parseDouble(scanner.nextLine());
                System.out.print("Digite a potencia da lampada: ");
                potencia = Double.parseDouble(scanner.nextLine());
  
                lampadas[quantidadeLampada] = new Lampada(tipo, voltagem, cor, marca, preco, potencia, false);
                quantidadeLampada++;
              }
              break;
            case 2:
              for (int x = 0; x < quantidadeLampada; x++) {
                System.out.println(lampadas[x].toString());
              }
              break;
            case 3:
              System.out.println("Quantidade de lampadas cadastradas: " + quantidadeLampada);
              break;
            case 4:
              System.out.print("Insira a potencia a ser buscada: ");
              double potenciaBuscada = Double.parseDouble(scanner.nextLine());
              int quantidadeEncontrada = 0;
              for (int x = 0; x < quantidadeLampada; x++) {
                if (lampadas[x].getPotencia() == potenciaBuscada) {
                  quantidadeEncontrada++;
                }
              }
              System.out
                  .println("Existem " + quantidadeEncontrada + " lampadas com a potencia " + potenciaBuscada);
              break;
            case 5:
              double mediaPreco = 0;
              int x;
              for (x = 0; x < quantidadeLampada; x++) {
                mediaPreco += lampadas[x].getPreco();
              }
              mediaPreco = mediaPreco / x;
              for (int y = 0; y < quantidadeLampada; y++) {
                double precoAtual = lampadas[y].getPreco();
                if (precoAtual < mediaPreco) {
                  System.out.println(lampadas[y].toString());
                }
              }
              break;
            case 6:
              int lampadasAcesas = 0, lampadasApagadas = 0;
              for (x = 0; x < quantidadeLampada; x++) {
                if (lampadas[x].getStatus())
                  lampadasAcesas++;
                else
                  lampadasApagadas++;
              }
              System.out.println("Quantidade de lampadas acesas: " + lampadasAcesas
                  + "\nQuantidade de lampadas apagadas: " + lampadasApagadas);
              break;
            case 0:
              break;
            default:
              System.out.println("Essa opcao nao existe. Escolha uma opcao de 1 a 4, ou digite 0 para sair.");
          }
        } while (opcoes != 0);
      } catch (NumberFormatException e) {
        e.printStackTrace();
      }
    }
  }`;

  const codeString2 = `package br.com.ifgoiano.exe32;

  public class Lampada {
    private String tipo, cor, marca;
    private int voltagem;
    private double preco, potencia;
    private boolean status;
  
    public Lampada() {
    }
  
    public Lampada(String tipo, int voltagem, String cor, String marca, double preco, double potencia, boolean status) {
      this.tipo = tipo;
      this.voltagem = voltagem;
      this.cor = cor;
      this.marca = marca;
      this.preco = preco;
      this.potencia = potencia;
      this.status = status;
    }
  
    public String toString() {
      String texto = "Lâmpada:";
      texto += "\n\tTipo: " + this.tipo;
      texto += "\n\tVoltagem: " + this.voltagem;
      texto += "\n\tCor: " + this.cor;
      texto += "\n\tMarca: " + this.marca;
      texto += "\n\tPreco: " + this.preco;
      texto += "\n\tPotência: " + this.potencia;
      texto += "\n\tStatus: " + this.status;
      return texto;
    }
  
    public void acender() {
      setStatus(true);
    }
  
    public void apagar() {
      setStatus(false);
    }
  
    public String getTipo() {
      return this.tipo;
    }
  
    public int getVoltagem() {
      return this.voltagem;
    }
  
    public String getCor() {
      return this.cor;
    }
  
    public String getMarca() {
      return this.marca;
    }
  
    public double getPreco() {
      return this.preco;
    }
  
    public double getPotencia() {
      return this.potencia;
    }
  
    public boolean getStatus() {
      return this.status;
    }
  
    // setters
    public void setTipo(String tipo) {
      this.tipo = tipo;
    }
  
    public void setVoltagem(int voltagem) {
      this.voltagem = voltagem;
    }
  
    public void setCor(String cor) {
      this.cor = cor;
    }
  
    public void setMarca(String marca) {
      this.marca = marca;
    }
  
    public void setPreco(double preco) {
      this.preco = preco;
    }
  
    public void setPotencia(double potencia) {
      this.potencia = potencia;
    }
  
    public void setStatus(boolean status) {
      this.status = status;
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe33" onclick="return check()">
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
              32. Implementar uma classe Lampada que deve possuir como características tipo (led,
              fluorescente,...), voltagem, cor, marca, preço, potência, status (boolean). Nesta
              classe devem ser implementados os métodos construtores, getters, setters, toString,
              acender e apagar. Em uma outra classe chamada Teste deverá ser criado uma lista para
              armazenar 30 objetos do tipo Lampada. No programa deve ser possível: ● Cadastrar
              lâmpada ● Exibir todas as lâmpadas ● Exibir quantidade de lâmpadas cadastradas ●
              Consultar quantidade de lâmpadas de uma determinada potência (digitada pelo usuário) ●
              Exibir os dados das lâmpadas com preço menor do que o preço médio das lâmpadas
              cadastradas ● Exibir a quantidade de lâmpadas acesas e apagadas
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

export default Projects32;
