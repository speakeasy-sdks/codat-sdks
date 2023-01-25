package shared

// CodatPublicAPIModelsRulesAlertModelPagedResponseModel
// Used to represent what can be returned by an endpoint that supports paging.
// Usable with the [ProducesResponseType] attribute on a controller action.
type CodatPublicAPIModelsRulesAlertModelPagedResponseModel struct {
	Links        *CodatPublicAPIModelsRulesAlertModelPagedResponseLinksModel `json:"_links,omitempty"`
	PageNumber   *int32                                                      `json:"pageNumber,omitempty"`
	PageSize     *int32                                                      `json:"pageSize,omitempty"`
	Results      []CodatPublicAPIModelsRulesAlertModel                       `json:"results,omitempty"`
	TotalResults *int32                                                      `json:"totalResults,omitempty"`
}
