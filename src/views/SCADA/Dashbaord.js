import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table,
  Button,
  UncontrolledTooltip,
  Row,
  Col,
  TabContent,
  TabPane,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card>
              <CardHeader>
                <Navbar expand="md" className="navbar-nav">
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "tab1" })}
                        onClick={() => toggleTab("tab1")}
                        activeClassName="active"
                      >
                        {t("telemetersMeasurands")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "tab2" })}
                        onClick={() => toggleTab("tab2")}
                      >
                        {t("telemetersIdication")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "tab3" })}
                        onClick={() => toggleTab("tab3")}
                      >
                        {t("telemetersMeasurands")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "tab4" })}
                        onClick={() => toggleTab("tab4")}
                      >
                        {t("telemetersMeasurands")}
                      </NavLink>
                    </NavItem>
                    {/* Add more tabs as needed */}
                  </Nav>
                </Navbar>
              </CardHeader>
              <CardBody>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="tab1">
                    {/* Add content for tab 1 */}
                    <h4>{t("tab1ContentTitle")}</h4>
                    <p>{t("tab1ContentDescription")}</p>
                    <Button color="info">{t("tab1ButtonLabel")}</Button>
                  </TabPane>
                  <TabPane tabId="tab2">
                    {/* Add content for tab 2 */}
                    <h4>{t("tab2ContentTitle")}</h4>
                    <p>{t("tab2ContentDescription")}</p>
                    <Button color="info">{t("tab2ButtonLabel")}</Button>
                  </TabPane>
                  <TabPane tabId="tab3">
                    {/* Add content for tab 3 */}
                    <h4>{t("tab3ContentTitle")}</h4>
                    <p>{t("tab3ContentDescription")}</p>
                    <Button color="info">{t("tab3ButtonLabel")}</Button>
                  </TabPane>
                  <TabPane tabId="tab4">
                    {/* Add content for tab 4 */}
                    <h4>{t("tab4ContentTitle")}</h4>
                    <p>{t("tab4ContentDescription")}</p>
                    <Button color="info">{t("tab4ButtonLabel")}</Button>
                  </TabPane>
                  {/* Add more TabPanes as needed for additional tabs */}
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
