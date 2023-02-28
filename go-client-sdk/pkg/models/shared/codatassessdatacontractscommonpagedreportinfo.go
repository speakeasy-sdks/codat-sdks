package shared

import (
	"time"
)

type CodatAssessDataContractsCommonPagedReportInfo struct {
	CompanyName   *string    `json:"companyName,omitempty"`
	GeneratedDate *time.Time `json:"generatedDate,omitempty"`
	PageNumber    *int       `json:"pageNumber,omitempty"`
	PageSize      *int       `json:"pageSize,omitempty"`
	ReportName    *string    `json:"reportName,omitempty"`
	TotalResults  *int       `json:"totalResults,omitempty"`
}
