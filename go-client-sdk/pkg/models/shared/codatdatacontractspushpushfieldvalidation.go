package shared

type CodatDataContractsPushPushFieldValidation struct {
	Details string  `json:"details"`
	Field   string  `json:"field"`
	Ref     *string `json:"ref,omitempty"`
}
