import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects27() {
  const codeString = `package br.com.ifgoiano.exe27;

  import java.util.Random;
  import java.util.Scanner;
  
  public class Teste {
  
      public static void main(String[] args) {
  
          Scanner ler = new Scanner(System.in);
          int k, i, j, cont = 0, maior;
          int mat[][]= new int[10][10];
          Random gerador = new Random();
  
          //Gerar 100 numeros inteiros na matriz
          System.out.printf("Numero gerado na matriz:\n");//Verificar
          for(i=0;i<10;i++){
              for(j=0;j<10;j++){
                  mat[i][j] = gerador.nextInt(10);
                  System.out.printf("%d\n", mat[i][j]);//Verificar
  
              }
          }
  
          System.out.printf("Quando numeros deseja consultar: ");
          k = ler.nextInt();
  
          int vet[] = new int[k];
  
          for(i=0;i<k;i++){
              vet[i]=0;
          }
  
          //Percorrer a matriz k vezes para recuperar os k maiores, preenchendo com -1 os maiores ja encontrados
          while(cont<k){
  
              maior = mat[0][0];
  
              for(i=0;i<10;i++){
                  for(j=0;j<10;j++){
                      if(mat[i][j] > maior){
                          maior = mat[i][j];
                      }
                  }
              }
  
              for(i=0;i<10;i++){
                  for(j=0;j<10;j++){
                      if(mat[i][j] == maior){
                          mat[i][j] = -1;
                      }
                  }
              }
  
              vet[cont] = maior;
              cont++;
          }
  
          System.out.printf("Os %d maiores sao:\n", k);
  
          for(i=0;i<k;i++){
              System.out.printf("%d\n", vet[i]);
          }
  
  
  
      }
  
  }`;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe28" onclick="return check()">
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
              27. Escreva um programa Java para encontrar os 𝑘 maiores elementos em um determinado
              array multidimensional. Os elementos na matriz podem estar em qualquer ordem e 𝑘 deve
              ser informado pelo usuário.
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

export default Projects27;
