import React from "react";
import "./App.css";
import { Layout, Avatar, Menu, Icon, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import data from "../src/content.json";
const text = data.text;

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ background: "#f6f6f6", padding: 8 }}>
          <Avatar src="./assets/avatar.png" style={{ float: "right" }} />
          <Title level={3}>Meu Painel</Title>
        </Header>
        <Layout>
          <Sider style={{ background: "#f6f6f6" }}>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item>Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="home" />
                    <span>Visão Geral</span>
                  </span>
                }
              >
                <Menu.ItemGroup title="About" />
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 24, minHeight: 480 }}>
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
