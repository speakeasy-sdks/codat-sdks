package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type CommerceDisputes struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommerceDisputes(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CommerceDisputes {
	return &CommerceDisputes{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputes - Gets the latest commerce disputes for a company, with pagination
func (s *CommerceDisputes) GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputes(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/commerce-disputes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsCommerceDisputePagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsCommerceDisputePagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeID - Gets the specified commerce dispute for a given company
func (s *CommerceDisputes) GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeID(ctx context.Context, request operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDRequest) (*operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/data/commerce-disputes/{disputeId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsCommerceDispute
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsCommerceDispute = out
		}
	}

	return res, nil
}
