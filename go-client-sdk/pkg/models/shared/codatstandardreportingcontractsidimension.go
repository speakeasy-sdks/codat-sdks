package shared

type CodatStandardReportingContractsIDimension struct {
	DisplayName *string                                         `json:"displayName,omitempty"`
	Index       *int32                                          `json:"index,omitempty"`
	Items       []CodatStandardReportingContractsIDimensionItem `json:"items,omitempty"`
	Type        *string                                         `json:"type,omitempty"`
}
