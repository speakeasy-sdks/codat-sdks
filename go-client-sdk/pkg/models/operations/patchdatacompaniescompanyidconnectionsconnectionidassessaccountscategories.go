package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesRequest struct {
	PathParams PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesPathParams
	Request    *shared.CodatAssessDataContractsAccountCategoriesPatchAccountCategoriesModel `request:"mediaType=application/json"`
	Security   PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesSecurity
}

type PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategoriesResponse struct {
	CodatAssessDataContractsAccountCategoriesAccountCategoriesModels []shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel
	ContentType                                                      string
	StatusCode                                                       int64
}
