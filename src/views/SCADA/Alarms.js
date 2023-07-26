import React, { useState, useEffect } from "react";
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
} from "reactstrap";
import { useTranslation } from "react-i18next";

const MAX_ENTRIES = 100; // Maximum number of entries to display

function Alarms() {
  const { t } = useTranslation();

  const [rtAlarms, setRtAlarms] = useState([]);
  const [reachedMaxEntries, setReachedMaxEntries] = useState(false);
  // Realtime data simulation
  useEffect(() => {
    let interval;

    if (!reachedMaxEntries) {
      interval = setInterval(() => {
        const newEntry = {
          id: Math.floor(Math.random() * 1000000), // Generate an integer ID
          timestamp: new Date().toLocaleString(),
          message: t("newAlarmEntry"),
        };

        setRtAlarms((prevAlarms) => {
          const updatedAlarms = [newEntry, ...prevAlarms];

          if (updatedAlarms.length > MAX_ENTRIES) {
            updatedAlarms.slice(0, MAX_ENTRIES);
            setReachedMaxEntries(true);
            clearInterval(interval);
          }

          return updatedAlarms;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [reachedMaxEntries, t]);

  const handleDeleteEntry = (id) => {
    setRtAlarms((prevAlarms) => prevAlarms.filter((entry) => entry.id !== id));
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12" md="12">
            <Card
              className="card-tasks"
              style={{
                height: "800px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardHeader>
                <CardTitle tag="h4">
                  {t("alarmsTitle")} ({rtAlarms.length})
                </CardTitle>
              </CardHeader>
              <CardBody style={{ flex: 1, overflowY: "auto" }}>
                <div className="table-full-width">
                  <Table>
                    <thead>
                      <tr>
                        <th>{t("idHeader")}</th>
                        <th>{t("timestampHeader")}</th>
                        <th>{t("messageHeader")}</th>
                        <th>{t("acknowledgeHeader")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rtAlarms.map((task) => (
                        <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.timestamp}</td>
                          <td>{task.message}</td>
                          <td className="td-actions text-left">
                            <Button
                              color="link"
                              id={`tooltip${task.id}`}
                              title=""
                              type="button"
                              onClick={() => handleDeleteEntry(task.id)}
                            >
                              <i className="tim-icons icon-simple-remove" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target={`tooltip${task.id}`}
                              placement="right"
                            >
                              {t("acknowledgeTooltip")}
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Alarms;
