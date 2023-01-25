package shared

import (
	"time"
)

type CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo struct {
	CompanyName   *string    `json:"companyName,omitempty"`
	Currency      *string    `json:"currency,omitempty"`
	GeneratedDate *time.Time `json:"generatedDate,omitempty"`
	ReportName    *string    `json:"reportName,omitempty"`
}
