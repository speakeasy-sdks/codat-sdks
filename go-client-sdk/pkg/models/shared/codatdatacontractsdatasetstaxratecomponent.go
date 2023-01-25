package shared

type CodatDataContractsDatasetsTaxRateComponent struct {
	IsCompound bool     `json:"isCompound"`
	Name       *string  `json:"name,omitempty"`
	Rate       *float64 `json:"rate,omitempty"`
}
