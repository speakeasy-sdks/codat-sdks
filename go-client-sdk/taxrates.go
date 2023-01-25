package sdk

import (
	"context"
	"fmt"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/utils"
	"net/http"
)

type TaxRates struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTaxRates(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TaxRates {
	return &TaxRates{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetCompaniesCompanyIDDataTaxRates - Gets the latest tax rates for a given company.
func (s *TaxRates) GetCompaniesCompanyIDDataTaxRates(ctx context.Context, request operations.GetCompaniesCompanyIDDataTaxRatesRequest) (*operations.GetCompaniesCompanyIDDataTaxRatesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/taxRates", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDDataTaxRatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsTaxRatePagedResponseModel
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsTaxRatePagedResponseModel = out
		}
	}

	return res, nil
}

// GetCompaniesCompanyIDDataTaxRatesTaxRateID - Gets the specified tax rate for a given company.
func (s *TaxRates) GetCompaniesCompanyIDDataTaxRatesTaxRateID(ctx context.Context, request operations.GetCompaniesCompanyIDDataTaxRatesTaxRateIDRequest) (*operations.GetCompaniesCompanyIDDataTaxRatesTaxRateIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/companies/{companyId}/data/taxRates/{taxRateId}", request.PathParams)

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

	res := &operations.GetCompaniesCompanyIDDataTaxRatesTaxRateIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CodatDataContractsDatasetsTaxRate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CodatDataContractsDatasetsTaxRate = out
		}
	}

	return res, nil
}
