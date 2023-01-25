package shared

type CodatDataContractsDatasetsBillPaymentLineLink struct {
	Amount       *float64                                          `json:"amount,omitempty"`
	CurrencyRate *float64                                          `json:"currencyRate,omitempty"`
	ID           *string                                           `json:"id,omitempty"`
	Type         CodatDataContractsDatasetsBillPaymentLinkTypeEnum `json:"type"`
}
