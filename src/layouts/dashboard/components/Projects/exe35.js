import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects35() {
  const codeString = `package br.com.ifgoiano.exe35;

  import java.util.ArrayList;
  
  public class Teste {
  
      public static void main(String[] args) {
          ArrayList<Pessoa> pessoas = new ArrayList<>();
          Aluno aluno = new Aluno();
          Professor professor = new Professor();
          Professor professor2 = new Professor();
  
          aluno.setNome("João");
          aluno.setSobreNome("Silva");
          aluno.setMatricula(123);
  
          professor.setNome("Maria");
          professor.setSobreNome("Antunes");
          professor.setDisciplina("Java");
  
          //professor.setNome ( "João" );
          professor2.setNome ( "Cléber" );
          professor2.setSobreNome ( "Rafael" );
          professor2.setDisciplina ( "Banco de Dados" );
  
          if (aluno.getNome().equals(professor.getNome())) {
              System.out.println("Não é permitido ter duas pessoas com nomes iguais!");
          }else{
              pessoas.add(aluno);
              pessoas.add(professor);
              pessoas.add(professor2);
              contaPessoas(pessoas);
          }
  
  
      }
  
      public static void contaPessoas(ArrayList<Pessoa> p){
          for (Pessoa pessoa : p) {
              if (pessoa instanceof Aluno) {
                  System.out.printf ( "A pessoa %s é Aluno\n", pessoa.getNome ( ) );
              } else if (pessoa instanceof Professor) {
                  System.out.printf ( "A pessoa %s é Professor\n", pessoa.getNome ( ) );
              }
          }
      }
  
  }`;

  const codeString2 = `package br.com.ifgoiano.exe35;

  public abstract class Pessoa {
  
      private String nome;
      private String sobreNome;
  
      public String getNome() {
          return nome;
      }
  
      public void setNome(String nome) {
          this.nome = nome;
      }
  
      public String getSobreNome() {
          return sobreNome;
      }
  
      public void setSobreNome(String sobreNome) {
          this.sobreNome = sobreNome;
      }
  }`;

  const codeString3 = `package br.com.ifgoiano.exe35;

  public class Professor extends Pessoa {
  
      private String disciplina;
  
      public String getDisciplina() {
          return disciplina;
      }
  
      public void setDisciplina(String disciplina) {
          this.disciplina = disciplina;
      }
  }`;

  const codeString4 = `package br.com.ifgoiano.exe35;

  public class Aluno extends Pessoa {
  
      private int matricula;
  
      public int getMatricula() {
          return matricula;
      }
  
      public void setMatricula(int matricula) {
          this.matricula = matricula;
      }
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe36" onclick="return check()">
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
              35. Usando o diagrama de classes do exercício anterior, crie uma classe de testes que
              contenha uma lista capaz de receber tanto alunos como professores. Faça com que essa
              lista não aceite pessoas com o mesmo nome. Percorra essa lista e mostre quais dos
              objetos são alunos e quais são professores.
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

export default Projects35;
