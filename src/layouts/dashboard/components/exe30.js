import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Projects30 from "./Projects/exe30";

function Exe30() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects30 />
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Exe30;
