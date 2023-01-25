package shared

type CodatPublicAPIModelsRulesNotifiers struct {
	Emails  []string `json:"emails,omitempty"`
	Webhook *string  `json:"webhook,omitempty"`
}
