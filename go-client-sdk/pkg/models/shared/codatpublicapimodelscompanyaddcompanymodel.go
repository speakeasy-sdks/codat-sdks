package shared

type CodatPublicAPIModelsCompanyAddCompanyModel struct {
	Description  *string `json:"description,omitempty"`
	Name         string  `json:"name"`
	PlatformType *string `json:"platformType,omitempty"`
}
