package shared

type CodatAssessDataContractsFinancialsMetricsMetricPeriodError struct {
	Details map[string][]string                                                 `json:"details,omitempty"`
	Message *string                                                             `json:"message,omitempty"`
	Type    *CodatAssessDataContractsFinancialsMetricsMetricPeriodErrorTypeEnum `json:"type,omitempty"`
}
