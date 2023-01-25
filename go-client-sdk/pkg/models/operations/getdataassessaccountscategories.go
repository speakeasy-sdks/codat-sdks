package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetDataAssessAccountsCategoriesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetDataAssessAccountsCategoriesRequest struct {
	Security GetDataAssessAccountsCategoriesSecurity
}

type GetDataAssessAccountsCategoriesResponse struct {
	CodatAssessDataContractsAccountCategoriesAccountCategories []shared.CodatAssessDataContractsAccountCategoriesAccountCategory
	ContentType                                                string
	StatusCode                                                 int64
}
