import Card from "@mui/material/Card";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";
import projectsTableData from "layouts/tables/data/projectsTableData";
import Icon from "@mui/material/Icon";

function Tables() {
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Card>
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
                  done
                </Icon>
                <SuiTypography variant="button" fontWeight="regular" color="text">
                  &nbsp;<strong>36 feitos</strong>
                </SuiTypography>
              </SuiBox>
            </SuiBox>
          </SuiBox>
          <SuiBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SuiBox>
        </Card>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Tables;
