package shared

type CodatAssessDataContractsFinancialsMetricsMetric struct {
	Errors     []CodatAssessDataContractsFinancialsMetricsMetricError   `json:"errors,omitempty"`
	Key        *CodatAssessDataContractsFinancialsMetricsMetricKeyEnum  `json:"key,omitempty"`
	MetricUnit *CodatAssessDataContractsFinancialsMetricsMetricUnitEnum `json:"metricUnit,omitempty"`
	Name       *string                                                  `json:"name,omitempty"`
	Periods    []CodatAssessDataContractsFinancialsMetricsMetricPeriod  `json:"periods,omitempty"`
}
