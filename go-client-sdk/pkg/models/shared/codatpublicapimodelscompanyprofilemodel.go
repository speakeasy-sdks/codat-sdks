package shared

type CodatPublicAPIModelsCompanyProfileModel struct {
	AlertAuthHeader    *string  `json:"alertAuthHeader,omitempty"`
	APIKey             *string  `json:"apiKey,omitempty"`
	ConfirmCompanyName *bool    `json:"confirmCompanyName,omitempty"`
	IconURL            *string  `json:"iconUrl,omitempty"`
	LogoURL            *string  `json:"logoUrl,omitempty"`
	Name               *string  `json:"name,omitempty"`
	RedirectURL        *string  `json:"redirectUrl,omitempty"`
	WhiteListUrls      []string `json:"whiteListUrls,omitempty"`
}
