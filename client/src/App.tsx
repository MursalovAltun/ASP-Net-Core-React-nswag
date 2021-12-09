import React, { useState } from 'react';
import './App.css';
import { createMuiTheme, Snackbar, styled, Toolbar } from "@material-ui/core";
import { deepOrange, deepPurple, lightBlue, orange } from "@material-ui/core/colors";
import {
  getCollapseBtn,
  getContent,
  getContentBasedScheme,
  getCozyScheme,
  getDefaultScheme,
  getDrawerSidebar,
  getFixedScheme,
  getHeader,
  getMuiTreasuryScheme,
  getSidebarContent,
  getSidebarTrigger,
  getStandardScheme,
  Root,
} from "@mui-treasury/layout";
import HeaderEx from "./features/layout/Header";
import NavContentEx from "./features/layout/NavContent";
import NavHeaderEx from "./features/layout/NavHeader";
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import TodoList from "./features/todo/TodoList";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);

const history = createBrowserHistory();

function App() {
  const [darkState, setDarkState] = useState(true);

  const handleThemeChange = () => {
    console.log("test jenkins1");
    setDarkState(!darkState);
  };

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });
  const presets: any = {
    createDefaultLayout: getDefaultScheme(),
    createStandardLayout: getStandardScheme(),
    createFixedLayout: getFixedScheme(),
    createContentBasedLayout: getContentBasedScheme(),
    createCozyLayout: getCozyScheme(),
    createMuiTreasuryLayout: getMuiTreasuryScheme()
  };

  const [preset] = useState("createStandardLayout");

  return (
    <Router history={history}>
      <Snackbar/>
      <Root scheme={presets[preset]} theme={darkTheme}>
        {({ state: { sidebar } }) => (
          <>
            <Header>
              <Toolbar>
                <SidebarTrigger sidebarId="primarySidebar"/>
                <HeaderEx darkState={darkState} setDarkState={setDarkState} handleThemeChange={handleThemeChange}/>
              </Toolbar>
            </Header>
            <DrawerSidebar sidebarId="primarySidebar">
              <SidebarContent>
                <NavHeaderEx collapsed={sidebar.primarySidebar.collapsed}/>
                <NavContentEx/>
              </SidebarContent>
              <CollapseBtn/>
            </DrawerSidebar>
            <Content>
              <Switch>
                <Route path="/todos">
                  <TodoList />
                </Route>
              </Switch>
            </Content>
          </>
        )}
      </Root>
    </Router>
  );
}

export default App;
