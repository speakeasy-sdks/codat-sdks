package shared

type CodatDataContractsDatasetsCommerceAccountBalance struct {
	Available *float64 `json:"available,omitempty"`
	Currency  *string  `json:"currency,omitempty"`
	Pending   *float64 `json:"pending,omitempty"`
	Reserved  *float64 `json:"reserved,omitempty"`
}
