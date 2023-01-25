package shared

type CodatDataContractsPushPushOption struct {
	Description string                                      `json:"description"`
	DisplayName string                                      `json:"displayName"`
	Options     []CodatDataContractsPushPushOptionChoice    `json:"options,omitempty"`
	Properties  map[string]CodatDataContractsPushPushOption `json:"properties,omitempty"`
	Rel         *string                                     `json:"rel,omitempty"`
	Required    bool                                        `json:"required"`
	Type        CodatDataContractsPushOptionTypeEnum        `json:"type"`
	Validation  *CodatDataContractsPushPushValidationInfo   `json:"validation,omitempty"`
}
