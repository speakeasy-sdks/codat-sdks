package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetDataAssessAccountsCategoriesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetDataAssessAccountsCategoriesRequest struct {
	Security GetDataAssessAccountsCategoriesSecurity
}

type GetDataAssessAccountsCategoriesResponse struct {
	CodatAssessDataContractsAccountCategoriesAccountCategories []shared.CodatAssessDataContractsAccountCategoriesAccountCategory
	ContentType                                                string
	StatusCode                                                 int
}
