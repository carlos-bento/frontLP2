import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects34() {
  const codeString = `package br.com.ifgoiano.exe34;

  import java.io.FileInputStream;
  import java.io.IOException;
  import java.io.ObjectInputStream;
  
  public class Teste implements java.io.Serializable {
    String nome, sobrenome;
  
    public Teste(String nome, String sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    public String getNome() {
      return this.nome;
    }
  
    public String getSobrenome() {
      return this.sobrenome;
    }
  
    public void setNome(String nome) {
      this.nome = nome;
    }
  
    public void setSobrenome(String sobrenome) {
      this.sobrenome = sobrenome;
    }
  
    public static void main(String[] args) {
      Teste e = null;
      try {
        FileInputStream fileIn = new FileInputStream("C:/Windows/Temp/testeArquivo");
        ObjectInputStream in = new ObjectInputStream(fileIn);
        e = (Teste) in.readObject();
        in.close();
        fileIn.close();
      } catch (IOException i) {
        i.printStackTrace();
        return;
      } catch (ClassNotFoundException c) {
        System.out.println("A classe Teste nao foi encontrada");
        c.printStackTrace();
        return;
      }
  
      System.out.println("Desserializando...");
      System.out.println("get nome: " + e.getNome());
      System.out.println("get sobrenome: " + e.getSobrenome());
  
    }
  }`;

  const codeString2 = `package br.com.ifgoiano.exe34;

  public class Professor extends Teste {
    private String disciplina;
  
    public Professor(String nome, String sobrenome, String disciplina) {
      super(nome, sobrenome);
      this.disciplina = disciplina;
    }
  
    public String getDisciplina() {
      return this.disciplina;
    }
  
    public void setDisciplina(String disciplina) {
      this.disciplina = disciplina;
    }
  }`;

  const codeString3 = `package br.com.ifgoiano.exe34;

  public class Aluno extends Teste {
    private int matricula;
  
    public Aluno(String nome, String sobrenome, int matricula) {
      super(nome, sobrenome);
      this.matricula = matricula;
    }
  
    public int getMatricula() {
      return this.matricula;
    }
  
    public void setMatricula(int matricula) {
      this.matricula = matricula;
    }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe35" onclick="return check()">
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
              34. Implemente as classes representadas no diagrama abaixo e crie uma classe de testes
              para instanciar os objetos das classes e exibir seus dados no console. Exibir as
              informações de cada instância usando o método toString da sua classe. Crie uma
              instância da classe Aluno, serialize-a e salve como arquivo físico em uma pasta do
              computador.
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
            </Card>
          </SuiBox>
        </SuiBox>
      </Card>
    </Card>
  );
}

export default Projects34;
