import { useTranslation } from "react-i18next";

export default function ServiceList() {
  const { t } = useTranslation();
  return [
    [
      { header: t("servicesPage.serviceList.geodesy.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.geodesy.subHeader1") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader2") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader3") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader4") },
          { subhead: t("servicesPage.serviceList.geodesy.subHeader5") },
        ],
      },
    ],
    [
      { header: t("servicesPage.serviceList.projecting.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.projecting.subHeader1") },
          { subhead: t("servicesPage.serviceList.projecting.subHeader2") },
          { subhead: t("servicesPage.serviceList.projecting.subHeader3") },
          { subhead: t("servicesPage.serviceList.projecting.subHeader4") },
          { subhead: t("servicesPage.serviceList.projecting.subHeader5") },
        ],
      },
    ],
    [
      { header: t("servicesPage.serviceList.storms.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.storms.subHeader1") },
          { subhead: t("servicesPage.serviceList.storms.subHeader2") },
          { subhead: t("servicesPage.serviceList.storms.subHeader3") },
          { subhead: t("servicesPage.serviceList.storms.subHeader4") },
          { subhead: t("servicesPage.serviceList.storms.subHeader5") },
        ],
      },
    ],
    [
      { header: t("servicesPage.serviceList.agro.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.agro.subHeader1") },
          { subhead: t("servicesPage.serviceList.agro.subHeader2") },
          { subhead: t("servicesPage.serviceList.agro.subHeader3") },
          { subhead: t("servicesPage.serviceList.agro.subHeader4") },
        ],
      },
    ],
    [
      { header: t("servicesPage.serviceList.consult.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.consult.subHeader1") },
          { subhead: t("servicesPage.serviceList.consult.subHeader2") },
          { subhead: t("servicesPage.serviceList.consult.subHeader3") },
          { subhead: t("servicesPage.serviceList.consult.subHeader4") },
          { subhead: t("servicesPage.serviceList.consult.subHeader5") },
        ],
      },
    ],
    [
      { header: t("servicesPage.serviceList.programming.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.programming.subHeader1") },
          { subhead: t("servicesPage.serviceList.programming.subHeader2") },
          { subhead: t("servicesPage.serviceList.programming.subHeader3") },
          { subhead: t("servicesPage.serviceList.programming.subHeader4") },
        ],
      },
    ],
    [
      { header: t("servicesPage.serviceList.cadastro.header") },
      {
        subHeaders: [
          { subhead: t("servicesPage.serviceList.cadastro.subHeader1") },
          { subhead: t("servicesPage.serviceList.cadastro.subHeader2") },
          { subhead: t("servicesPage.serviceList.cadastro.subHeader3") },
          { subhead: t("servicesPage.serviceList.cadastro.subHeader4") },
        ],
      },
    ],
    
  ];
}
