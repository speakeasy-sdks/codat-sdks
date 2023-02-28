package shared

type CodatPublicAPIModelsPlatformCredentialsPlatformSourceModel struct {
	DataProvidedBy         *CodatPublicAPIModelsPlatformCredentialsDataProvidedByEnum                   `json:"dataProvidedBy,omitempty"`
	DatatypeFeatures       []CodatPublicAPIModelsPlatformCredentialsDatatypeFeatures                    `json:"datatypeFeatures,omitempty"`
	Enabled                *bool                                                                        `json:"enabled,omitempty"`
	IntegrationID          *string                                                                      `json:"integrationId,omitempty"`
	IsBeta                 *bool                                                                        `json:"isBeta,omitempty"`
	IsOfflineConnector     *bool                                                                        `json:"isOfflineConnector,omitempty"`
	Key                    *string                                                                      `json:"key,omitempty"`
	LinkedConnectionsCount *int                                                                         `json:"linkedConnectionsCount,omitempty"`
	LogoURL                *string                                                                      `json:"logoUrl,omitempty"`
	Name                   *string                                                                      `json:"name,omitempty"`
	SourceID               *string                                                                      `json:"sourceId,omitempty"`
	SourceType             *CodatPublicAPIModelsPlatformCredentialsSourceTypeEnum                       `json:"sourceType,omitempty"`
	SupportedEnvironments  *CodatPublicAPIModelsPlatformCredentialsIntegrationSupportedEnvironmentsEnum `json:"supportedEnvironments,omitempty"`
	TotalConnectionsCount  *int                                                                         `json:"totalConnectionsCount,omitempty"`
}
