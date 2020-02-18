import React from "react";
import "./App.css";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Dropdown } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import data from "../src/content.json";
const text = data.text;

const { Header, Footer, Sider, Content } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="Oi">
        Configurações
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="Oi">
        Segurança
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="Oi">
        Sair
      </a>
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "#000000", padding: 4 }}>
          <Dropdown overlay={menu}>
            <Avatar icon="user" style={{ float: "right", marginRight: 43 }} />
          </Dropdown>
          <Title level={4} style={{ color: "white" }}>
            ❤ ReactJS Control Pannel
          </Title>
        </Header>
        <Layout>
          <Sider
            breakpoint="sm"
            collapsedWidth="80"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            style={{ background: "#FFF", marginTop: 53 }}
          >
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <SubMenu
                title={
                  <span>
                    <Icon type="home" />
                    <span>Menu 1</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Sub Menu 1" />
                <Menu.ItemGroup title="Sub Menu 2" />
                <Menu.ItemGroup title="Sub Menu 3" />
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Menu 2</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Sub Menu 1" />
                <Menu.ItemGroup title="Sub Menu 2" />
                <Menu.ItemGroup title="Sub Menu 3" />
              </SubMenu>
              <SubMenu
                title={
                  <span>
                    <Icon type="github" />
                    <span>Menu 3</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="Sub Menu 1" />
                <Menu.ItemGroup title="Sub Menu 2" />
                <Menu.ItemGroup title="Sub Menu 3" />
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 24, minHeight: 1000 }}>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
              </div>
            </Content>
            <Footer
              style={{
                background: "#f6f6f6",
                padding: 8,
                textAlign: "center"
              }}
            >
              <b> ❤ ReactJS </b>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
