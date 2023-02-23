package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PostCompaniesCompanyIDDataQueueDataTypePathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
	DataType  string `pathParam:"style=simple,explode=false,name=dataType"`
}

type PostCompaniesCompanyIDDataQueueDataTypeQueryParams struct {
	ConnectionID *string `queryParam:"style=form,explode=true,name=connectionId"`
}

type PostCompaniesCompanyIDDataQueueDataTypeSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PostCompaniesCompanyIDDataQueueDataTypeRequest struct {
	PathParams  PostCompaniesCompanyIDDataQueueDataTypePathParams
	QueryParams PostCompaniesCompanyIDDataQueueDataTypeQueryParams
	Security    PostCompaniesCompanyIDDataQueueDataTypeSecurity
}

type PostCompaniesCompanyIDDataQueueDataTypeResponse struct {
	CodatPublicAPIModelsDataDataSet *shared.CodatPublicAPIModelsDataDataSet
	ContentType                     string
	StatusCode                      int
}
