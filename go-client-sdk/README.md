# Codat Go SDK

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-sdks/codat-sdks/go-client-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
    "github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                APIKeyAuth: shared.SchemeAPIKeyAuth{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsRequest{
        Security: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsSecurity{
            CodatLogin: &shared.SchemeCodatLogin{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsPathParams{
            CompanyID: "sit",
            ConnectionID: "voluptas",
        },
        QueryParams: operations.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsQueryParams{
            OrderBy: "culpa",
            Page: 501233450539197794,
            PageSize: 3390393562759376202,
            Query: "dolor",
        },
    }
    
    res, err := s.AccountTransactions.GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactions(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CodatDataContractsDatasetsAccountTransactionPagedResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### AccountTransactions

* `GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactions` - Gets the account transactions for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataAccountTransactionsAccountTransactionID` - Gets the specified account transaction for a given company and connection.

### Accounts

* `GetCompaniesCompanyIDDataAccounts` - Gets the latest chart of accounts for a company
* `GetCompaniesCompanyIDDataAccountsAccountID` - Gets a single account corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushAccounts` - Posts an individual account for a given company.

### Assess

* `GetCompaniesCompanyIDReportsEnhancedBalanceSheetAccounts` - Gets a list of accounts with account categories per statement period, specific to balance sheet
* `GetCompaniesCompanyIDReportsEnhancedCashFlowTransactions` - Gets a list of banking transactions and their categories.
* `GetCompaniesCompanyIDReportsEnhancedProfitAndLossAccounts` - Gets a list of accounts with account categories per statement period, specific to profit and loss
* `GetDataAssessAccountsCategories` - Gets a list of all the Codat standard categories.
* `GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityDetails` - Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
* `GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegrityStatus` - Gets match status for a given company and datatype.
* `GetDataCompaniesCompanyIDAssessDataTypesDataTypeDataIntegritySummaries` - Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
* `GetDataCompaniesCompanyIDAssessExcel` - Returns the status of the latest report requested.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountingMetricsMarketing` - Gets the marketing metrics from an accounting source for a given company, over one or more periods of time.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategories` - Get account categories (suggested and confirmed) for a company connection.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategories` - Gets the suggested and/or confirmed category for a specific account.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsCustomerRetention` - Gets the customer retention metrics for a specific company connection, over one or more periods of time.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsLifetimeValue` - Gets the lifetime value metric for a specific company connection, over one or more periods of time.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsOrders` - Gets the order information for a specific company connection, over one or more periods of time.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRefunds` - Gets the refunds information for a specific company connection, over one or more periods of time.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessCommerceMetricsRevenue` - Gets the revenue and revenue growth for a specific company connection, over one or more periods of time.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedBalanceSheet` - Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessEnhancedProfitAndLoss` - Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessFinancialMetrics` - Gets all the available financial metrics for a given company, over one or more periods.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsMrr` - Gets key metrics for subscription revenue.
* `GetDataCompaniesCompanyIDConnectionsConnectionIDAssessSubscriptionsProcess` - Gets key metrics for subscription revenue.
* `PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsCategories` - Updates the categories for all or a batch of accounts for a specific connection.
* `PatchDataCompaniesCompanyIDConnectionsConnectionIDAssessAccountsAccountIDCategories` - Updates or removes the confirmed category of a specific account.
* `PostDataCompaniesCompanyIDAssessExcel` - Request an Excel report for download.
* `PostDataCompaniesCompanyIDAssessExcelDownload` - Download the Excel report to a local drive.

### BankAccounts

* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccounts` - Gets the list of bank accounts for a given connection
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountID` - Gets the bank account with a given ID
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankAccountsAccountIDBankTransactions` - Gets bank transactions for a given bank account ID
* `GetCompaniesCompanyIDConnectionsConnectionIDOptionsBankAccountsAccountIDBankTransactions` - Gets the options of pushing bank account transactions.
* `GetCompaniesCompanyIDDataBankAccountsAccountID` - Gets the bank account for given account ID.
* `GetCompaniesCompanyIDDataBankAccountsAccountIDTransactions` - Gets the latest bank transactions for given account ID and company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccounts` - Posts a new bank account to the accounting package for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsAccountIDBankTransactions` - Posts bank transactions to the accounting package for a given company.
* `PutCompaniesCompanyIDConnectionsConnectionIDPushBankAccountsBankAccountID` - Posts an updated bank account to the accounting package for a given company.

### BankingAccountBalances

* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountBalances` - Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

### BankingAccounts

* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccounts` - Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holding
the accounts.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingAccountsAccountID` - Gets a specified bank account for a given company

### BankingTransactionCategories

* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategories` - Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction
activity.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryID` - Gets a specified bank transaction category for a given company

### BankingTransactions

* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactions` - Gets a list of transactions incurred by a bank account.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionsTransactionID` - Gets a specified bank transaction for a given company
* `GetCompaniesCompanyIDDataBankingTransactions` - Gets a list of transactions incurred by a company across all bank accounts.

### BillCreditNotes

* `GetCompaniesCompanyIDDataBillCreditNotes` - Gets a list of all bill credit notes for a company, with pagination
* `GetCompaniesCompanyIDDataBillCreditNotesBillCreditNoteID` - Gets a single billCreditNote corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotes` - Posts a new billCreditNote to the accounting package for a given company.
* `PutCompaniesCompanyIDConnectionsConnectionIDPushBillCreditNotesBillCreditNoteID` - Posts an updated billCreditNote to the accounting package for a given company.

### BillPayments

* `GetCompaniesCompanyIDDataBillPayments` - Gets the latest billPayments for a company, with pagination
* `GetCompaniesCompanyIDDataBillPaymentsBillPaymentID`
* `PostCompaniesCompanyIDConnectionsConnectionIDPushBillPayments` - Posts a new bill payment to the accounting package for a given company.

### Bills

* `GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachments`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentID`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataBillsBillIDAttachmentsAttachmentIDDownload`
* `GetCompaniesCompanyIDDataBills` - Gets the latest bills for a company, with pagination
* `GetCompaniesCompanyIDDataBillsBillID`
* `PostCompaniesCompanyIDConnectionsConnectionIDPushBills` - Posts a new bill to the accounting package for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushBillsBillIDAttachments`
* `PutCompaniesCompanyIDConnectionsConnectionIDPushBillsBillID` - Posts an updated bill to the accounting package for a given company.

### CommerceCustomers

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomers` - Gets the latest commerce customers for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersCustomerID` - Gets the specified commerce customer for a given company

### CommerceDisputes

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputes` - Gets the latest commerce disputes for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceDisputesDisputeID` - Gets the specified commerce dispute for a given company

### CommerceInfo

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceInfo` - Gets the latest basic info for a commerce company.

### CommerceLocations

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocations` - Gets the latest commerce locations for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsLocationID` - Gets the specified commerce location for a given company

### CommerceOrders

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrders` - Gets the latest commerce orders for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersOrderID` - Gets the specified commerce order for a given company

### CommercePaymentMethods

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethods` - Gets a list of all payment methods from a data connection
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentMethodsPaymentMethodID` - Gets the details of an individual payment method.

### CommercePayments

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePayments` - Gets the latest commerce payments for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommercePaymentsPaymentID` - Gets the specified commerce payment for a given company

### CommerceProductCategories

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategories` - Gets the latest commerce product categories for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductCategoriesProductID` - Gets the specified commerce product category for a given company

### CommerceProducts

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProducts` - Gets the latest commerce products for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceProductsProductID` - Gets the specified commerce product for a given company

### CommerceTransactions

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactions` - Gets the latest commerce transactions for a company, with pagination
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsTransactionID` - Gets the specified commerce transaction for a given company

### Companies

* `DeleteCompaniesCompanyID` - Deletes a company, this is not reversible.
* `GetCompanies` - Fetch a list of all companies metadata with accounting links on the Codat platform
* `GetCompaniesCompanyID` - Fetch metadata on a single company.
* `GetCompaniesCompanyIDSettings` - Fetch settings on a single company.
* `GetCompaniesCompanyIDSyncSettings`
* `PostCompanies` - Initiate the process of onboarding a new company on the Codat platform
* `PostCompaniesCompanyIDSyncSettings`
* `PutCompaniesCompanyID` - Update a company with a new name
* `PutCompaniesCompanyIDSettings` - Update settings on a single company.

### Connection

* `DeleteCompaniesCompanyIDConnectionsConnectionID` - Disconnect and delete a data source from a company
* `GetCompaniesCompanyIDConnections` - Retrieve all data sources connected to a single company, including their connection statuses
* `GetCompaniesCompanyIDConnectionsConnectionID` - Retrieve a single data source connected to a single company, including its connection status
* `GetCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccounts` - Get BankFeed BankAccounts for a single data source connected to a single company.
* `PatchCompaniesCompanyIDConnectionsConnectionID` - Disconnect a data source from a company
* `PatchCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccountsBankAccountID` - Update a single BankFeed BankAccount for a single data source connected to a single company.
* `PostCompaniesCompanyIDConnections` - Connect a data source to a company
* `PutCompaniesCompanyIDConnectionsConnectionIDAuthorization` - Put authorization information for a single data source connected to a single company.
* `PutCompaniesCompanyIDConnectionsConnectionIDConnectionInfoBankFeedAccounts` - Put BankFeed BankAccounts for a single data source connected to a single company.

### CreditNotes

* `GetCompaniesCompanyIDDataCreditNotes` - Gets a list of all credit notes for a company, with pagination
* `GetCompaniesCompanyIDDataCreditNotesCreditNoteID` - Gets a single creditNote corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushCreditNotes`
* `PutCompaniesCompanyIDConnectionsConnectionIDPushCreditNotesCreditNoteID` - Posts an updated credit note to the accounting package for a given company.

### Customers

* `GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachments`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentID`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataCustomersCustomerIDAttachmentsAttachmentIDDownload`
* `GetCompaniesCompanyIDDataCustomers` - Gets the latest customers for a company, with pagination
* `GetCompaniesCompanyIDDataCustomersCustomerID` - Gets a single customer corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushCustomers` - Posts an individual customer for a given company.
* `PutCompaniesCompanyIDConnectionsConnectionIDPushCustomersCustomerID` - Posts an updated customer for a given company.

### Data

* `GetCompaniesCompanyIDDataHistory` - Fetch a list of all data snapshots captured for a company
* `GetCompaniesCompanyIDDataHistoryDatasetID` - Fetch metadata on a single data synchronisation
* `PostCompaniesCompanyIDDataAll` - Initiates the process of capturing a new data snapshot for a company
* `PostCompaniesCompanyIDDataQueueDataType` - Initiates the process of capturing a data snapshot of a specified type for a company

### DataStatus

* `GetCompaniesCompanyIDDataStatus`

### DataTypes

* `GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptions` - Gets all available push options for the given data type
* `GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPost` - Gets the POST push options for the given data type
* `GetCompaniesCompanyIDConnectionsConnectionIDDataTypesDataTypeOptionsPut` - Gets the PUT push options for the given data type

### DatasetLogs

* `GetCompaniesCompanyIDDataDatasetLogsDatasetID` - Gets dataset messages for a given dataset

### DirectCosts

* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCosts` - Gets the direct costs for the company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostID` - Gets the specified direct cost for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachments` - Gets all attachments for the specified direct cost for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentID` - Gets the specified direct cost attachment for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectCostsDirectCostIDAttachmentsAttachmentIDDownload` - Downloads an attachment for the specified direct cost for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCosts` - Posts a new direct cost to the accounting package for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushDirectCostsDirectCostIDAttachment` - Posts a new direct cost attachment for a given company.

### DirectIncomes

* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomes` - Gets the direct incomes for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeID` - Gets the specified direct income for a given company and connection.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachments` - Gets all attachments for the specified direct income for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentID` - Gets the specified direct income attachment for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataDirectIncomesDirectIncomeIDAttachmentsAttachmentIDDownload` - Downloads an attachment for the specified direct income for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomes` - Posts a new direct income to the accounting package for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushDirectIncomesDirectIncomeIDAttachment` - Posts a new direct income attachment for a given company.

### Files

* `GetCompaniesCompanyIDFiles` - View all files uploaded by a specified company
* `GetCompaniesCompanyIDFilesDownload` - Download all files for a company. You can specify a date to download specific files for.
* `PostCompaniesCompanyIDConnectionsConnectionIDFiles` - Upload files for a company

### Financials

* `GetCompaniesCompanyIDDataFinancialsBalanceSheet` - Gets the latest balance sheet for a company.
* `GetCompaniesCompanyIDDataFinancialsCashFlowStatement` - Gets the latest cash flow statement for a company.
* `GetCompaniesCompanyIDDataFinancialsProfitAndLoss` - Gets the latest profit and loss for a company.

### Info

* `GetCompaniesCompanyIDDataInfo` - Gets the latest basic info for a company.
* `PostCompaniesCompanyIDDataInfo` - Initiates the process of synchronising basic info for a company

### Integrations

* `DeleteIntegrationsCredentialsPlatformKey` - Delete credentials used to authenticate with an accounting platform
* `GetIntegrations`
* `GetIntegrationsBankSettings`
* `GetIntegrationsCredentialsPlatformKey` - Fetch credentials required to authenticate with an accounting platform.
* `GetIntegrationsPlatformKey`
* `GetIntegrationsPlatformKeyBranding`
* `PutIntegrationsBankSettings`
* `PutIntegrationsCredentialsPlatformKey` - Update credentials required to authenticate with an accounting platform
* `PutIntegrationsPlatformKeyEnabled`

### Invoices

* `GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachments`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentID`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataInvoicesInvoiceIDAttachmentsAttachmentIDDownload`
* `GetCompaniesCompanyIDDataInvoices` - Gets the latest invoices for a company, with pagination
* `GetCompaniesCompanyIDDataInvoicesInvoiceID`
* `GetCompaniesCompanyIDDataInvoicesInvoiceIDPdf`
* `PostCompaniesCompanyIDConnectionsConnectionIDPushInvoices` - Posts a new invoice to the accounting package for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceIDAttachment`
* `PutCompaniesCompanyIDConnectionsConnectionIDPushInvoicesInvoiceID` - Posts an updated invoice to the accounting package for a given company.

### Items

* `GetCompaniesCompanyIDDataItems` - Gets the items for a given company.
* `GetCompaniesCompanyIDDataItemsItemID` - Gets the specified item for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushItems` - Posts a new item to the accounting package for a given company.

### JournalEntries

* `GetCompaniesCompanyIDDataJournalEntries` - Gets the latest journal entries for a company, with pagination
* `GetCompaniesCompanyIDDataJournalEntriesJournalEntryID` - Gets a single JournalEntry corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushJournalEntries` - Posts a new journalEntry to the accounting package for a given company.

### Journals

* `GetCompaniesCompanyIDDataJournals` - Gets the latest journals for a company, with pagination
* `GetCompaniesCompanyIDDataJournalsJournalID` - Gets a single journal corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushJournals` - Posts a new journal to the accounting package for a given company.

### Metrics

* `GetMetricsCompanies`

### PaymentMethods

* `GetCompaniesCompanyIDDataPaymentMethods` - Gets the payment methods for a given company.
* `GetCompaniesCompanyIDDataPaymentMethodsPaymentMethodID` - Gets the specified payment method for a given company.

### Payments

* `GetCompaniesCompanyIDDataPayments` - Gets the latest payments for a company, with pagination
* `GetCompaniesCompanyIDDataPaymentsPaymentID`
* `PostCompaniesCompanyIDConnectionsConnectionIDPushPayments` - Posts a new payment to the accounting package for a given company.

### Profile

* `GetProfile` - Fetch your organisations company profile
* `GetProfileSyncSettings`
* `PostProfileSyncSettings`
* `PutProfile` - Update your organisations company profile
* `PutProfileAPIKey` - Refresh the existing API key for your clients.
* `PutProfileSyncSettingsDataType`

### PurchaseOrders

* `GetCompaniesCompanyIDDataPurchaseOrders`
* `GetCompaniesCompanyIDDataPurchaseOrdersPurchaseOrderID`
* `PostCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrders` - Posts a new purchase order to the accounting package for a given company.
* `PutCompaniesCompanyIDConnectionsConnectionIDPushPurchaseOrdersPurchaseOrderID` - Posts an updated purchase order to the accounting package for a given company.

### Push

* `GetCompaniesCompanyIDConnectionsConnectionIDOptionsDataType` - Gets the push options for the given data type
* `GetCompaniesCompanyIDPush` - Gets paged push operation records
* `GetCompaniesCompanyIDPushPushOperationKey` - Gets a single push operation record

### Reports

* `GetCompaniesCompanyIDReportsAgedCreditor` - Gets the aged creditor report for a company.
* `GetCompaniesCompanyIDReportsAgedCreditorAvailable`
* `GetCompaniesCompanyIDReportsAgedDebtor` - Gets the aged debtor report for a company.
* `GetCompaniesCompanyIDReportsAgedDebtorAvailable`
* `GetCompaniesCompanyIDReportsEvents`

### Rules

* `DeleteRulesRuleID`
* `GetRules` - Fetch a list of rules
* `GetRulesAlerts`
* `GetRulesAlertsAlertID`
* `GetRulesRuleID`
* `GetRulesRuleIDAlerts`
* `PostRules` - Subscribe to a rule
* `PutRulesRuleID`

### SalesOrders

* `GetCompaniesCompanyIDDataSalesOrders`
* `GetCompaniesCompanyIDDataSalesOrdersSalesOrderID`

### Settings

* `GetSettings` - Fetch your settings
* `GetSettingsIntegrationsIntegrationID` - Fetch your organisations integration settings
* `PatchSettings` - Update your settings
* `PatchSettingsIntegrationsIntegrationID` - Update your organisations integration settings

### Suppliers

* `GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachments`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentID`
* `GetCompaniesCompanyIDConnectionsConnectionIDDataSuppliersSupplierIDAttachmentsAttachmentIDDownload`
* `GetCompaniesCompanyIDDataSuppliers` - Gets the latest suppliers for a company, with pagination
* `GetCompaniesCompanyIDDataSuppliersSupplierID` - Gets a single supplier corresponding to the supplied Id
* `PostCompaniesCompanyIDConnectionsConnectionIDPushSuppliers`
* `PutCompaniesCompanyIDConnectionsConnectionIDPushSuppliersSupplierID`

### TaxRates

* `GetCompaniesCompanyIDDataTaxRates` - Gets the latest tax rates for a given company.
* `GetCompaniesCompanyIDDataTaxRatesTaxRateID` - Gets the specified tax rate for a given company.

### TrackingCategories

* `GetCompaniesCompanyIDDataTrackingCategories` - Gets the latest tracking categories for a given company.
* `GetCompaniesCompanyIDDataTrackingCategoriesTrackingCategoryID` - Gets the specified tracking categories for a given company.

### Transfers

* `GetCompaniesCompanyIDConnectionsConnectionIDDataTransfers` - Gets the transfers for a given company.
* `GetCompaniesCompanyIDConnectionsConnectionIDDataTransfersTransferID` - Gets the specified transfer for a given company.
* `PostCompaniesCompanyIDConnectionsConnectionIDPushTransfers` - Posts a new transfer to the accounting package for a given company.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
