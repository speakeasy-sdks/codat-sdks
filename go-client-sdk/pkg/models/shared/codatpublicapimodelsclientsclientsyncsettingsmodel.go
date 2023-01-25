package shared

type CodatPublicAPIModelsClientsClientSyncSettingsModel struct {
	ClientID          *string                                            `json:"clientId,omitempty"`
	OverridesDefaults *bool                                              `json:"overridesDefaults,omitempty"`
	Settings          []CodatPublicAPIModelsSyncSettingsSyncSettingModel `json:"settings,omitempty"`
}
