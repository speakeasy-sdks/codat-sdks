package shared

type CodatAssessDataContractsFinancialsMetricsMetricError struct {
	Details map[string][]string                                           `json:"details,omitempty"`
	Message *string                                                       `json:"message,omitempty"`
	Type    *CodatAssessDataContractsFinancialsMetricsMetricErrorTypeEnum `json:"type,omitempty"`
}
