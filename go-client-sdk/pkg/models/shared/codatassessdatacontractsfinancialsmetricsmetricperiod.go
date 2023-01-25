package shared

import (
	"time"
)

type CodatAssessDataContractsFinancialsMetricsMetricPeriod struct {
	Errors   []CodatAssessDataContractsFinancialsMetricsMetricPeriodError `json:"errors,omitempty"`
	FromDate *time.Time                                                   `json:"fromDate,omitempty"`
	Inputs   []CodatAssessDataContractsFinancialsMetricsMetricPeriodInput `json:"inputs,omitempty"`
	ToDate   *time.Time                                                   `json:"toDate,omitempty"`
	Value    *float64                                                     `json:"value,omitempty"`
}
