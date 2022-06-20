import Grid from "@mui/material/Grid";
import SuiBox from "components/SuiBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Projects33 from "./Projects/exe33";

function Exe33() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <Projects33 />
          </Grid>
        </Grid>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Exe33;
