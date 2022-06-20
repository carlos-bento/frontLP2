import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark, coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import SuiButton from "components/SuiButton";

function Projects() {
  const codeString = `class Exemplo {  
    public static void main(String args[]) {  
       System.out.println("Hello World");     
    }  
 }  `;

  return (
    <Card>
      <SuiButton color="info" href="/dashboard/exe01" onclick="return check()">
        iniciar correção
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
              <div>Apresentação do Dashboard:</div>
              <div>
                Aqui será apresentado o enunciado do exercício. Logo abaixo, o código produzido pelo
                nosso grupo será exibido conforme o exemplo. Logo acima, também é possível utilizar
                o botão para passar para o próximo exercício.
              </div>
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
                  <strong>
                    <SyntaxHighlighter
                      showLineNumbers="true"
                      showInlineLineNumbers="true"
                      wrapLongLines="true"
                      lineProps={{ style: { flexWrap: "wrap" } }}
                      // customStyle={{ width: "calc(100vw - 50px)" }}
                      language="javascript"
                      style={coldarkDark}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </strong>
                </SuiTypography>
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>
      </Card>
    </Card>
  );
}

export default Projects;
