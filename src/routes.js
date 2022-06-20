import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import CustomerSupport from "examples/Icons/CustomerSupport";
import Exe01 from "layouts/dashboard/components/exe01";
import Exe02 from "layouts/dashboard/components/exe02";
import Exe03 from "layouts/dashboard/components/exe03";
import Exe04 from "layouts/dashboard/components/exe04";
import Exe05 from "layouts/dashboard/components/exe05";
import Exe06 from "layouts/dashboard/components/exe06";
import Exe07 from "layouts/dashboard/components/exe07";
import Exe08 from "layouts/dashboard/components/exe08";
import Exe09 from "layouts/dashboard/components/exe09";
import Exe10 from "layouts/dashboard/components/exe10";
import Exe11 from "layouts/dashboard/components/exe11";
import Exe12 from "layouts/dashboard/components/exe12";
import Exe13 from "layouts/dashboard/components/exe13";
import Exe14 from "layouts/dashboard/components/exe14";
import Exe15 from "layouts/dashboard/components/exe15";
import Exe16 from "layouts/dashboard/components/exe16";
import Exe17 from "layouts/dashboard/components/exe17";
import Exe18 from "layouts/dashboard/components/exe18";
import Exe19 from "layouts/dashboard/components/exe19";
import Exe20 from "layouts/dashboard/components/exe20";
import Exe21 from "layouts/dashboard/components/exe21";
import Exe22 from "layouts/dashboard/components/exe22";
import Exe23 from "layouts/dashboard/components/exe23";
import Exe24 from "layouts/dashboard/components/exe24";
import Exe25 from "layouts/dashboard/components/exe25";
import Exe26 from "layouts/dashboard/components/exe26";
import Exe27 from "layouts/dashboard/components/exe27";
import Exe28 from "layouts/dashboard/components/exe28";
import Exe29 from "layouts/dashboard/components/exe29";
import Exe30 from "layouts/dashboard/components/exe30";
import Exe31 from "layouts/dashboard/components/exe31";
import Exe32 from "layouts/dashboard/components/exe32";
import Exe33 from "layouts/dashboard/components/exe33";
import Exe34 from "layouts/dashboard/components/exe34";
import Exe35 from "layouts/dashboard/components/exe35";
import Exe36 from "layouts/dashboard/components/exe36";

const routes = [
  {
    type: "collapse",
    name: "Tabela de exercícios",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Área de testes",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  { type: "title", title: "Grupo", key: "group-pages" },
  {
    type: "collapse",
    name: "Integrantes",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },

  {
    key: "dashboard/exe01",
    route: "/dashboard/exe01",
    component: <Exe01 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe02",
    route: "/dashboard/exe02",
    component: <Exe02 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe03",
    route: "/dashboard/exe03",
    component: <Exe03 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe04",
    route: "/dashboard/exe04",
    component: <Exe04 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe05",
    route: "/dashboard/exe05",
    component: <Exe05 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe06",
    route: "/dashboard/exe06",
    component: <Exe06 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe07",
    route: "/dashboard/exe07",
    component: <Exe07 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe08",
    route: "/dashboard/exe08",
    component: <Exe08 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe09",
    route: "/dashboard/exe09",
    component: <Exe09 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe10",
    route: "/dashboard/exe10",
    component: <Exe10 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe11",
    route: "/dashboard/exe11",
    component: <Exe11 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe12",
    route: "/dashboard/exe12",
    component: <Exe12 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe13",
    route: "/dashboard/exe13",
    component: <Exe13 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe14",
    route: "/dashboard/exe14",
    component: <Exe14 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe15",
    route: "/dashboard/exe15",
    component: <Exe15 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe16",
    route: "/dashboard/exe16",
    component: <Exe16 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe17",
    route: "/dashboard/exe17",
    component: <Exe17 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe18",
    route: "/dashboard/exe18",
    component: <Exe18 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe19",
    route: "/dashboard/exe19",
    component: <Exe19 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe20",
    route: "/dashboard/exe20",
    component: <Exe20 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe21",
    route: "/dashboard/exe21",
    component: <Exe21 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe22",
    route: "/dashboard/exe22",
    component: <Exe22 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe23",
    route: "/dashboard/exe23",
    component: <Exe23 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe24",
    route: "/dashboard/exe24",
    component: <Exe24 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe25",
    route: "/dashboard/exe25",
    component: <Exe25 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe26",
    route: "/dashboard/exe26",
    component: <Exe26 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe27",
    route: "/dashboard/exe27",
    component: <Exe27 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe28",
    route: "/dashboard/exe28",
    component: <Exe28 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe29",
    route: "/dashboard/exe29",
    component: <Exe29 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe30",
    route: "/dashboard/exe30",
    component: <Exe30 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe31",
    route: "/dashboard/exe31",
    component: <Exe31 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe32",
    route: "/dashboard/exe32",
    component: <Exe32 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe33",
    route: "/dashboard/exe33",
    component: <Exe33 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe34",
    route: "/dashboard/exe34",
    component: <Exe34 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe35",
    route: "/dashboard/exe35",
    component: <Exe35 />,
    noCollapse: true,
  },
  {
    key: "dashboard/exe36",
    route: "/dashboard/exe36",
    component: <Exe36 />,
    noCollapse: true,
  },
];

export default routes;
