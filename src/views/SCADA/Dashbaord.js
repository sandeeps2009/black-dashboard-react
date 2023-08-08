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
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10; // Number of entries to display per page

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  // 1. Define the array of data for the table (50 random data)
  const tableData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    tagNo: `Tag ${index + 1}`,
    tagName: `Tag ${index + 1}`,
    description: `Description ${index + 1}`,
    type: `Type ${index + 1}`,
  }));

  // 2. Calculate total number of pages
  const totalPages = Math.ceil(tableData.length / entriesPerPage);

  // 3. Get the current entries for the current page
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = tableData.slice(indexOfFirstEntry, indexOfLastEntry);

  // 4. Handle navigation to the previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 5. Handle navigation to the next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  // 7. Define the number of page numbers to show before and after the ellipsis
  const MAX_PAGE_NUMBERS = 3;

  // 8. Function to generate page number links
  const renderPageNumbers = () => {
    // Calculate the start and end page numbers for the current set of page links
    let startPage = Math.max(currentPage - MAX_PAGE_NUMBERS, 1);
    let endPage = Math.min(startPage + 2 * MAX_PAGE_NUMBERS, totalPages);

    // If the start page is less than 1, adjust the end page accordingly
    if (startPage <= 1) {
      endPage = Math.min(2 * MAX_PAGE_NUMBERS + 1, totalPages);
    }

    // If the end page is greater than the total pages, adjust the start page accordingly
    if (endPage >= totalPages) {
      startPage = Math.max(totalPages - 2 * MAX_PAGE_NUMBERS, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          size="sm"
          onClick={() => setCurrentPage(i)}
          color={currentPage === i ? "info" : "link pagination-link-button"}
        >
          {i}
        </Button>
      );
    }

    // Add ellipsis before the start page if needed
    if (startPage > 1) {
      pageNumbers.unshift(<span key="ellipsisStart"> {" ... "} </span>);
    }

    // Add ellipsis after the end page if needed
    if (endPage < totalPages) {
      pageNumbers.push(<span key="ellipsisEnd">{" ... "} </span>);
    }

    return pageNumbers;
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
                        {t("computedMeasurands")}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({ active: activeTab === "tab4" })}
                        onClick={() => toggleTab("tab4")}
                      >
                        {t("computedIdication")}
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </CardHeader>
              <CardBody style={{ flex: 1, overflowY: "auto" }}>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="tab1">
                    {/* 1. Title */}
                    <h4 className="text-center">
                      {" "}
                      {t("telemetersMeasurands")}
                    </h4>

                    {/* 2. Button "New" */}
                    <Button className="animation-on-hover" color="info">
                      {t("new")}
                    </Button>

                    {/* 3. Search Input */}
                    <div className="float-right">
                      <input
                        type="text"
                        className="search-entry"
                        placeholder="Search"
                      />
                    </div>

                    {/* 4. Table */}
                    <Table>
                      <thead className="text-primary">
                        <tr>
                          <th> {t("tagNo")}</th>
                          <th> {t("tagName")}</th>
                          <th>{t("description")}</th>
                          <th>{t("type")}</th>
                          <th>{t("Action")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* 5. Use map to render table rows */}
                        {currentEntries.map((data) => (
                          <tr key={data.id}>
                            <td>{data.tagNo}</td>
                            <td>{data.tagName}</td>
                            <td>{data.description}</td>
                            <td>{data.type}</td>
                            <td className="td-actions text-left">
                              <Button color="link" className="icon-button-view">
                                <i className="tim-icons icon-alert-circle-exc" />
                              </Button>
                              <Button color="link" className="icon-button-edit">
                                <i className="tim-icons icon-pencil" />
                              </Button>
                              <Button
                                color="link"
                                className="icon-button-delete"
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    {/* 6. Pagination */}
                    <div className="d-flex justify-content-between ma">
                      <div>
                        <Button
                          color="info"
                          className="btn-simple"
                          onClick={handlePreviousPage}
                        >
                          {t("previous")}
                        </Button>
                        {/* 7. Generate page number links */}
                        {renderPageNumbers()}
                        <Button
                          color="info"
                          className="btn-simple"
                          onClick={handleNextPage}
                        >
                          {t("next")}
                        </Button>
                      </div>
                      <div>
                        {t("showing")} {indexOfFirstEntry + 1} {t("to")}{" "}
                        {Math.min(indexOfLastEntry, tableData.length)} {t("of")}{" "}
                        {tableData.length} {t("entries")}
                      </div>
                    </div>
                  </TabPane>

                  <TabPane tabId="tab2">
                    {/* Add content for tab 2 */}
                    <h4>{t("tab1ContentTitle")}</h4>
                    <p>{t("tab1ContentDescription")}</p>
                    <Button color="info">{t("tab1ButtonLabel")}</Button>
                  </TabPane>
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
