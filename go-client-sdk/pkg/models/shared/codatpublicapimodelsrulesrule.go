package shared

type CodatPublicAPIModelsRulesRule struct {
	CompanyID *string                             `json:"companyId,omitempty"`
	ID        string                              `json:"id"`
	Notifiers *CodatPublicAPIModelsRulesNotifiers `json:"notifiers,omitempty"`
	Type      string                              `json:"type"`
}
