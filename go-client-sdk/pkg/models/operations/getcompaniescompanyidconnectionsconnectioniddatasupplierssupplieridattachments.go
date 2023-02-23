package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
	SupplierID   string `pathParam:"style=simple,explode=false,name=supplierId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsResponse struct {
	CodatDataContractsDatasetsAttachmentsDataset *shared.CodatDataContractsDatasetsAttachmentsDataset
	ContentType                                  string
	StatusCode                                   int
}
