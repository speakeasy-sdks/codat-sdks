package shared

type CodatStandardReportingContractsReportError struct {
	Details map[string][]string                                 `json:"details,omitempty"`
	Message *string                                             `json:"message,omitempty"`
	Type    *CodatStandardReportingContractsReportErrorTypeEnum `json:"type,omitempty"`
}
