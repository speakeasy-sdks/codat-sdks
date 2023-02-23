package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/utils"
	"net/http"
)

type purchaseOrders struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newPurchaseOrders(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *purchaseOrders {
	return &purchaseOrders{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

func (s *purchaseOrders) GetCompaniesCompanyIDDataPurchaseOrders(ctx context.Context, request operations.GetCompaniesCompanyIDDataPurchaseOrdersRequest) (*operations.GetCompaniesCompanyIDDataPurchaseOrdersResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/purchaseOrders", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	if err := utils.PopulateQueryParams(ctx, req, request.QueryParams); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDDataPurchaseOrdersResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsPurchaseOrderPagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsPurchaseOrderPagedResponseModel = out
		}
	}

	return res, nil
}

func (s *purchaseOrders) GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderID(ctx context.Context, request operations.GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDRequest) (*operations.GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/purchaseOrders/{purchaseOrderId}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderIDResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsPurchaseOrder
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsPurchaseOrder = out
		}
	}

	return res, nil
}

// PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrders - Posts a new purchase order to the accounting package for a given company.
func (s *purchaseOrders) PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrders(ctx context.Context, request operations.PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersRequest) (*operations.PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	if err := utils.PopulateQueryParams(ctx, req, request.QueryParams); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsPurchaseOrderPushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsPurchaseOrderPushOperation = out
		}
	}

	return res, nil
}

// PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderID - Posts an updated purchase order to the accounting package for a given company.
func (s *purchaseOrders) PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderID(ctx context.Context, request operations.PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDRequest) (*operations.PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/connections/{connectionId}/push/purchaseOrders/{purchaseOrderId}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	if err := utils.PopulateQueryParams(ctx, req, request.QueryParams); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderIDResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsPurchaseOrderPushOperation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsPurchaseOrderPushOperation = out
		}
	}

	return res, nil
}
