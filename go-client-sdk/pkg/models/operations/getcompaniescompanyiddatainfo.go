package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataInfoPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataInfoSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataInfoRequest struct {
	PathParams GetCompaniesCompanyIDDataInfoPathParams
	Security   GetCompaniesCompanyIDDataInfoSecurity
}

type GetCompaniesCompanyIDDataInfoResponse struct {
	CodatDataContractsDatasetsCompanyDataset *shared.CodatDataContractsDatasetsCompanyDataset
	ContentType                              string
	StatusCode                               int
}
