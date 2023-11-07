import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";
import RequestIcon from "@mui/icons-material/RequestQuote";
import { useState } from "react";
import {
  Book,
  Man2,
  Report,
  ReportGmailerrorredSharp,
  ReportOffOutlined,
  ReportOutlined,
  RequestPage,
  RequestPageRounded,
  RequestQuote,
  RequestQuoteTwoTone,
  Search,
  SignpostOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fabClasses } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import myIcon from "./logo/ju_logo.svg";
const categories = [
  {
    id: "Manage E-Library",
    children: [
      {
        id: "Book Database",
        icon: <DnsRoundedIcon />,
        itemLink: "/dashboard/bookdatabase",
        active: false,
      },
      {
        id: "Book Request",
        icon: <RequestIcon />,
        itemLink: "/dashboard/bookrequest",
        active: false,
      },

      {
        id: "Issue Book",
        icon: <Book />,
        itemLink: "/dashboard/issuebook",
        active: true,
      },
      {
        id: "Search Book",
        icon: <Search />,
        itemLink: "/dashboard/searchbook",
        active: false,
      },
      {
        id: "Student Details",
        icon: <Man2 />,
        itemLink: "/dashboard/studentdetails",
        active: false,   
      },
      {
        id: "Book Return",
        icon: <ReportOutlined />,
        itemLink: "/dashboard/studentreport",
      },
    ],
  },
  {
    id: "Account Manager",
    children: [
      {
        id: "Change Name",
        icon: <SettingsIcon />,
        itemLink: "/dashbaard/changename",
        active: false,
      },
      {
        id: "Change Password",
        icon: <TimerIcon />,
        itemLink: "/dashboard/changepassword",
        active: false,
      },
      {
        id: "Change ID",
        icon: <PhonelinkSetupIcon />,
        itemLink: "/dashboard/changeid",
        active: false,
      },
      {
        id: "Sign Out",
        icon: <SignpostOutlined />,
        itemLink: "/",
        active: false,
      },
    ],
  },
];
const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};
export default function Navigator(props) {
  const { ...other } = props;
  const [active, setActive] = useState(false);
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Librarian Panel
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Homepage</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, itemLink }) => (
              <ListItem disablePadding key={childId}>
                <Link to={itemLink} style={{ textDecoration: "none" }}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
