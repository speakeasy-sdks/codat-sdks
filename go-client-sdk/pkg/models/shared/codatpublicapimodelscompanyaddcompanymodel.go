package shared

type CodatPublicAPIModelsCompanyAddCompanyModel struct {
	Name         string  `json:"name"`
	PlatformType *string `json:"platformType,omitempty"`
}
