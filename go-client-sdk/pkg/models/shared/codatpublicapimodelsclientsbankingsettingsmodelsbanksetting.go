package shared

type CodatPublicAPIModelsClientsBankingSettingsModelsBankSetting struct {
	BankIntegrations []CodatPublicAPIModelsClientsBankingSettingsModelsBankIntegration `json:"bankIntegrations,omitempty"`
	Name             *string                                                           `json:"name,omitempty"`
	SourceGUID       *string                                                           `json:"sourceGuid,omitempty"`
}
