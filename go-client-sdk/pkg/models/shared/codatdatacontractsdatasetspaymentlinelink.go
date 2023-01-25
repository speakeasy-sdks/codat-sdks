package shared

type CodatDataContractsDatasetsPaymentLineLink struct {
	Amount       *float64                                      `json:"amount,omitempty"`
	CurrencyRate *float64                                      `json:"currencyRate,omitempty"`
	ID           *string                                       `json:"id,omitempty"`
	Type         CodatDataContractsDatasetsPaymentLinkTypeEnum `json:"type"`
}
