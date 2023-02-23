package shared

// CodatPublicAPIModelsRulesAlertModelPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatPublicAPIModelsRulesAlertModelPagedResponseModel struct {
	Links        *CodatPublicAPIModelsRulesAlertModelPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int                                                        `json:"pageNumber,omitempty"`
	PageSize     *int                                                        `json:"pageSize,omitempty"`
	Results      []CodatPublicAPIModelsRulesAlertModel                       `json:"results,omitempty"`
	TotalResults *int                                                        `json:"totalResults,omitempty"`
}
