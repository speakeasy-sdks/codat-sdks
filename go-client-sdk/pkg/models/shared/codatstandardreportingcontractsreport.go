package shared

type CodatStandardReportingContractsReport struct {
	Dimensions []CodatStandardReportingContractsIDimension  `json:"dimensions,omitempty"`
	Errors     []CodatStandardReportingContractsReportError `json:"errors,omitempty"`
	Measures   []CodatStandardReportingContractsMeasure     `json:"measures,omitempty"`
	ReportData []CodatStandardReportingContractsReportData  `json:"reportData,omitempty"`
	ReportInfo map[string]string                            `json:"reportInfo,omitempty"`
}
