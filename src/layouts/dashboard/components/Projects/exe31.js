import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects31() {
  const codeString = `package br.com.ifgoiano.exe31;

  import java.util.Scanner;
  
  public class Teste {
    public static void main(String[] args) {
      try (Scanner scanner = new Scanner(System.in)) {
        Caneta[] canetas = new Caneta[50];
        int opcoes, quantidadeCanetas = 0;
  
        do {
          System.out.println(
              "Escolha uma das opcoes:\n\t1: Cadastrar caneta\n\t2: Exibir todas as canetas\n\t3: Exibir quantidade de canetas cadastradas\n\t4: Consultar quantidade de canetas de uma determinada cor (digitada pelo usuário)\n\t0: Encerrar programa");
          opcoes = Integer.parseInt(scanner.nextLine());
  
          switch (opcoes) {
            case 1:
              if (quantidadeCanetas >= 50) {
                System.out.println("Limite de 50 canetas atingido");
              } else {
                String marca, cor;
                int tamanho;
                System.out.print("Digite a marca da caneta: ");
                marca = scanner.nextLine();
                System.out.print("Digite a cor da caneta: ");
                cor = scanner.nextLine();
                System.out.print("Digite o tamanho da caneta: ");
                tamanho = Integer.parseInt(scanner.nextLine());
                canetas[quantidadeCanetas] = new Caneta(marca, cor, tamanho);
                quantidadeCanetas++;
              }
              break;
            case 2:
              for (int x = 0; x < quantidadeCanetas; x++) {
                System.out.print("Caneta cadastrada numero " + (x + 1) + ":");
                System.out.print(canetas[x].toString());
              }
              break;
            case 3:
              System.out.println("Quantidade de canetas cadastradas: " + quantidadeCanetas);
              break;
            case 4:
              String corProcurada;
              System.out.print("Digite a cor de caneta a ser buscada: ");
              corProcurada = scanner.nextLine();
              for (int x = 0; x < quantidadeCanetas; x++) {
                if (corProcurada.equals(canetas[x].getCor())) {
                  System.out.println(canetas[x].toString());
                }
              }
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

  const codeString2 = `package br.com.ifgoiano.exe31;

  public class Caneta {
  
    private String marca, cor;
    private int tamanho;
  
    public Caneta() {
    }
  
    public Caneta(String marca, String cor, int tamanho) {
      this.marca = marca;
      this.cor = cor;
      this.tamanho = tamanho;
    }
  
    // getters
    public String getMarca() {
      return this.marca;
    }
  
    public String getCor() {
      return this.cor;
    }
  
    public int getTamanho() {
      return this.tamanho;
    }
  
    // setters
    public void setMarca(String marca) {
      this.marca = marca;
    }
  
    public void setCor(String cor) {
      this.cor = cor;
    }
  
    public void setTamanho(int tamanho) {
      this.tamanho = tamanho;
    }
  
    // toString
    public String toString() {
      return "\n\tMarca: " + this.marca + "\n\tCor: " + this.cor + "\n\tTamanho: " + this.tamanho + "\n\n";
    }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe32" onclick="return check()">
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
              31. Implementar uma classe Caneta que deve possuir como características marca, cor e
              tamanho. Nesta classe devem ser implementados os métodos construtores, getters,
              setters e toString. Em uma outra classe chamada Teste deverá ser criado uma lista para
              armazenar no máximo 50 objetos do tipo Caneta. No programa deve ser possível: ●
              Cadastrar caneta ● Exibir todas as canetas ● Exibir quantidade de canetas cadastradas
              ● Consultar quantidade de canetas de uma determinada cor (digitada pelo usuário)
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

export default Projects31;
