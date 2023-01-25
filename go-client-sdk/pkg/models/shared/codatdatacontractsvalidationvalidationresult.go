package shared

type CodatDataContractsValidationValidationResult struct {
	Errors   []CodatDataContractsValidationValidationItem `json:"errors,omitempty"`
	Warnings []CodatDataContractsValidationValidationItem `json:"warnings,omitempty"`
}
