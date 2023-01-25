package shared

import (
	"time"
)

type CodatAssessDataContractsCommonPagedReportInfo struct {
	CompanyName   *string    `json:"companyName,omitempty"`
	GeneratedDate *time.Time `json:"generatedDate,omitempty"`
	PageNumber    *int32     `json:"pageNumber,omitempty"`
	PageSize      *int32     `json:"pageSize,omitempty"`
	ReportName    *string    `json:"reportName,omitempty"`
	TotalResults  *int32     `json:"totalResults,omitempty"`
}
