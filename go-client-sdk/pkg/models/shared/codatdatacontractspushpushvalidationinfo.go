package shared

type CodatDataContractsPushPushValidationInfo struct {
	Information []CodatDataContractsPushPushFieldValidation `json:"information,omitempty"`
	Warnings    []CodatDataContractsPushPushFieldValidation `json:"warnings,omitempty"`
}
