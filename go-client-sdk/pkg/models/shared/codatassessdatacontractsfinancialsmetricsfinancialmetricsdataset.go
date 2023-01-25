package shared

type CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet struct {
	Currency   *string                                                        `json:"currency,omitempty"`
	Errors     []CodatAssessDataContractsFinancialsMetricsMetricDataSetError  `json:"errors,omitempty"`
	Metrics    []CodatAssessDataContractsFinancialsMetricsMetric              `json:"metrics,omitempty"`
	PeriodUnit *CodatAssessDataContractsFinancialsMetricsMetricPeriodUnitEnum `json:"periodUnit,omitempty"`
}
