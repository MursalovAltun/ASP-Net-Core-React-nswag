import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";
import { Link } from 'react-router-dom';

const list = [
  {
    primaryText: "Todos",
    icon: "folder",
    link: 'todos',
  }
];
const NavContentEx = () => (
  <List>
    {list.map(({ primaryText, icon, link }, i) => (
      <Link to={link} key={link}>
        <ListItem selected={i === 0} button>
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      </Link>
    ))}
    <Divider style={{ margin: "12px 0" }}/>
    <ListItem button>
      <ListItemIcon>
        <Icon>settings</Icon>
      </ListItemIcon>
      <ListItemText
        primary={"Settings & account"}
        primaryTypographyProps={{ noWrap: true }}
      />
    </ListItem>
  </List>
);

NavContentEx.propTypes = {};
NavContentEx.defaultProps = {};

export default NavContentEx;
