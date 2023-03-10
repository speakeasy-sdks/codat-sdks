package shared

type CodatDataContractsDatasetsCommerceServiceCharge struct {
	Description   *string                                                    `json:"description,omitempty"`
	Quantity      *int32                                                     `json:"quantity,omitempty"`
	TaxAmount     *float64                                                   `json:"taxAmount,omitempty"`
	TaxPercentage *float64                                                   `json:"taxPercentage,omitempty"`
	Taxes         []CodatDataContractsDatasetsCommerceTaxComponentAllocation `json:"taxes,omitempty"`
	TotalAmount   *float64                                                   `json:"totalAmount,omitempty"`
	Type          *CodatDataContractsDatasetsCommerceServiceChargeTypeEnum   `json:"type,omitempty"`
}
