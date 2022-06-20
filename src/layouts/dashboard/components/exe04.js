import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Projects04 from "./Projects/exe04";

function Exe04() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects04 />
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Exe04;
