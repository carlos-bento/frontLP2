import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Projects09 from "./Projects/exe09";

function Exe09() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects09 />
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Exe09;
