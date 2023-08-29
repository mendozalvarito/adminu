import { IconHome, Icon360, IconAlignBoxLeftBottom } from "@tabler/icons-vue";

export default [
  { nameUrl: "/dashboard", title: "Principal", icon: IconHome},
  { nameUrl: "/dashboard", title: "Secundario", icon: Icon360},
  { nameUrl: "/dashboard", title: "Dropdown", icon: IconAlignBoxLeftBottom},
];

var x = [
  { nameUrl: "/dashboard", title: "Principal", icon: IconHome, subMenu: null },
  { nameUrl: "/dashboard", title: "Secundario", icon: Icon360, subMenu: null },
  { nameUrl: "", title: "Dropdown", icon: IconAlignBoxLeftBottom, subMenu: [
    {nameUrl: "/dashboard", title: "one", icon: IconHome,},
    {nameUrl: "/dashboard", title: "two", icon: IconHome,},
  ] },
];
