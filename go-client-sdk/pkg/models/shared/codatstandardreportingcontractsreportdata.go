package shared

type CodatStandardReportingContractsReportData struct {
	Components           []CodatStandardReportingContractsReportData         `json:"components,omitempty"`
	Dimension            *int                                                `json:"dimension,omitempty"`
	DimensionDisplayName *string                                             `json:"dimensionDisplayName,omitempty"`
	Item                 *int                                                `json:"item,omitempty"`
	ItemDisplayName      *string                                             `json:"itemDisplayName,omitempty"`
	Measures             []CodatStandardReportingContractsIReportDataMeasure `json:"measures,omitempty"`
}
