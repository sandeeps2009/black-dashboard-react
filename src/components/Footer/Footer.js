import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container fluid>
        <div className="copyright">
          © {new Date().getFullYear()} {t("CDAC")}. {t("AllRightsReserved")}
        </div>
        <div className="copyright">{t("DesignedAndDeveloped")}</div>
      </Container>
    </footer>
  );
}

export default Footer;
