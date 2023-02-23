# Codat Node SDK

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @codatio/codat-ts
```

### Yarn

```bash
yarn add @codatio/codat-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@codatio/codat-ts";
import { GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRequest, GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsResponse } from "@codatio/codat-ts/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(withSecurity(
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsRequest = {
  security: {
    apiKeyAuth: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  },
  pathParams: {
    companyId: "unde",
    connectionId: "deserunt",
  },
  queryParams: {
    orderBy: "porro",
    page: 844266,
    pageSize: 602763,
    query: "vero",
  },
};

sdk.accountTransactions.getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions(req).then((res: GetCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accountTransactions

* `getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactions` - Gets the account transactions for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataAccountTransactionsAccountTransactionId` - Gets the specified account transaction for a given company and connection.

### accounts

* `getCompaniesCompanyIdDataAccounts` - Gets the latest chart of accounts for a company
* `getCompaniesCompanyIdDataAccountsAccountId` - Gets a single account corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushAccounts` - Posts an individual account for a given company.

### assess

* `getCompaniesCompanyIdReportsEnhancedBalanceSheetAccounts` - Gets a list of accounts with account categories per statement period, specific to balance sheet
* `getCompaniesCompanyIdReportsEnhancedCashFlowTransactions` - Gets a list of banking transactions and their categories.
* `getCompaniesCompanyIdReportsEnhancedProfitAndLossAccounts` - Gets a list of accounts with account categories per statement period, specific to profit and loss
* `getDataAssessAccountsCategories` - Gets a list of all the Codat standard categories.
* `getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetails` - Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.
* `getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityStatus` - Gets match status for a given company and datatype.
* `getDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummaries` - Gets match summary for a given company and datatype, optionally restricted by a Codat query string.
* `getDataCompaniesCompanyIdAssessExcel` - Returns the status of the latest report requested.
* `getDataCompaniesCompanyIdAssessExcelDownload` - Download the Excel report to a local drive.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketing` - Gets the marketing metrics from an accounting source for a given company, over one or more periods of time.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories` - Get account categories (suggested and confirmed) for a company connection.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories` - Gets the suggested and/or confirmed category for a specific account.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsCustomerRetention` - Gets the customer retention metrics for a specific company connection, over one or more periods of time.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsLifetimeValue` - Gets the lifetime value metric for a specific company connection, over one or more periods of time.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsOrders` - Gets the order information for a specific company connection, over one or more periods of time.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefunds` - Gets the refunds information for a specific company connection, over one or more periods of time.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenue` - Gets the revenue and revenue growth for a specific company connection, over one or more periods of time.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedBalanceSheet` - Gets a fully categorized balance sheet statement for a given company, over one or more period(s).
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessEnhancedProfitAndLoss` - Gets a fully categorized profit and loss statement for a given company, over one or more period(s).
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetrics` - Gets all the available financial metrics for a given company, over one or more periods.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsMrr` - Gets key metrics for subscription revenue.
* `getDataCompaniesCompanyIdConnectionsConnectionIdAssessSubscriptionsProcess` - Gets key metrics for subscription revenue.
* `patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategories` - Updates the categories for all or a batch of accounts for a specific connection.
* `patchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategories` - Updates or removes the confirmed category of a specific account.
* `postDataCompaniesCompanyIdAssessExcel` - Request an Excel report for download.
* `postDataCompaniesCompanyIdAssessExcelDownload` - Download the Excel report to a local drive.

### bankAccounts

* `getCompaniesCompanyIdConnectionsConnectionIdDataBankAccounts` - Gets the list of bank accounts for a given connection
* `getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountId` - Gets the bank account with a given ID
* `getCompaniesCompanyIdConnectionsConnectionIdDataBankAccountsAccountIdBankTransactions` - Gets bank transactions for a given bank account ID
* `getCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactions` - Gets the options of pushing bank account transactions.
* `getCompaniesCompanyIdDataBankAccountsAccountId` - Gets the bank account for given account ID.
* `getCompaniesCompanyIdDataBankAccountsAccountIdTransactions` - Gets the latest bank transactions for given account ID and company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushBankAccounts` - Posts a new bank account to the accounting package for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactions` - Posts bank transactions to the accounting package for a given company.
* `putCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountId` - Posts an updated bank account to the accounting package for a given company.

### bankingAccountBalances

* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountBalances` - Gets a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

### bankingAccounts

* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccounts` - Gets a list of all bank accounts of the SMB, with rich data like balances, account numbers and institutions holding
the accounts.
* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingAccountsAccountId` - Gets a specified bank account for a given company

### bankingTransactionCategories

* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategories` - Gets a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction
activity.
* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionCategoriesTransactionCategoryId` - Gets a specified bank transaction category for a given company

### bankingTransactions

* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactions` - Gets a list of transactions incurred by a bank account.
* `getCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionId` - Gets a specified bank transaction for a given company
* `getCompaniesCompanyIdDataBankingTransactions` - Gets a list of transactions incurred by a company across all bank accounts.

### billCreditNotes

* `getCompaniesCompanyIdDataBillCreditNotes` - Gets a list of all bill credit notes for a company, with pagination
* `getCompaniesCompanyIdDataBillCreditNotesBillCreditNoteId` - Gets a single billCreditNote corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotes` - Posts a new billCreditNote to the accounting package for a given company.
* `putCompaniesCompanyIdConnectionsConnectionIdPushBillCreditNotesBillCreditNoteId` - Posts an updated billCreditNote to the accounting package for a given company.

### billPayments

* `getCompaniesCompanyIdDataBillPayments` - Gets the latest billPayments for a company, with pagination
* `getCompaniesCompanyIdDataBillPaymentsBillPaymentId`
* `postCompaniesCompanyIdConnectionsConnectionIdPushBillPayments` - Posts a new bill payment to the accounting package for a given company.

### bills

* `getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachments`
* `getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentId`
* `getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownload`
* `getCompaniesCompanyIdDataBills` - Gets the latest bills for a company, with pagination
* `getCompaniesCompanyIdDataBillsBillId`
* `postCompaniesCompanyIdConnectionsConnectionIdPushBills` - Posts a new bill to the accounting package for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachments`
* `putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillId` - Posts an updated bill to the accounting package for a given company.

### commerceCustomers

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomers` - Gets the latest commerce customers for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceCustomersCustomerId` - Gets the specified commerce customer for a given company

### commerceDisputes

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputes` - Gets the latest commerce disputes for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceDisputesDisputeId` - Gets the specified commerce dispute for a given company

### commerceInfo

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceInfo` - Gets the latest basic info for a commerce company.

### commerceLocations

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocations` - Gets the latest commerce locations for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceLocationsLocationId` - Gets the specified commerce location for a given company

### commerceOrders

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrders` - Gets the latest commerce orders for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceOrdersOrderId` - Gets the specified commerce order for a given company

### commercePaymentMethods

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethods` - Gets a list of all payment methods from a data connection
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentMethodsPaymentMethodId` - Gets the details of an individual payment method.

### commercePayments

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommercePayments` - Gets the latest commerce payments for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommercePaymentsPaymentId` - Gets the specified commerce payment for a given company

### commerceProductCategories

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategories` - Gets the latest commerce product categories for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductCategoriesProductId` - Gets the specified commerce product category for a given company

### commerceProducts

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProducts` - Gets the latest commerce products for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceProductsProductId` - Gets the specified commerce product for a given company

### commerceTransactions

* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactions` - Gets the latest commerce transactions for a company, with pagination
* `getCompaniesCompanyIdConnectionsConnectionIdDataCommerceTransactionsTransactionId` - Gets the specified commerce transaction for a given company

### companies

* `deleteCompaniesCompanyId` - Deletes a company, this is not reversible.
* `getCompanies` - Fetch a list of all companies metadata with accounting links on the Codat platform
* `getCompaniesCompanyId` - Fetch metadata on a single company.
* `getCompaniesCompanyIdSettings` - Fetch settings on a single company.
* `getCompaniesCompanyIdSyncSettings`
* `postCompanies` - Initiate the process of onboarding a new company on the Codat platform
* `postCompaniesCompanyIdSyncSettings`
* `putCompaniesCompanyId` - Update a company with a new name and optional description
* `putCompaniesCompanyIdSettings` - Update settings on a single company.

### connection

* `deleteCompaniesCompanyIdConnectionsConnectionId` - Disconnect and delete a data source from a company
* `getCompaniesCompanyIdConnections` - Retrieve all data sources connected to a single company, including their connection statuses
* `getCompaniesCompanyIdConnectionsConnectionId` - Retrieve a single data source connected to a single company, including its connection status
* `getCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts` - Get BankFeed BankAccounts for a single data source connected to a single company.
* `patchCompaniesCompanyIdConnectionsConnectionId` - Disconnect a data source from a company
* `patchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountId` - Update a single BankFeed BankAccount for a single data source connected to a single company.
* `postCompaniesCompanyIdConnections` - Connect a data source to a company
* `putCompaniesCompanyIdConnectionsConnectionIdAuthorization` - Put authorization information for a single data source connected to a single company.
* `putCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccounts` - Put BankFeed BankAccounts for a single data source connected to a single company.

### creditNotes

* `getCompaniesCompanyIdDataCreditNotes` - Gets a list of all credit notes for a company, with pagination
* `getCompaniesCompanyIdDataCreditNotesCreditNoteId` - Gets a single creditNote corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushCreditNotes`
* `putCompaniesCompanyIdConnectionsConnectionIdPushCreditNotesCreditNoteId` - Posts an updated credit note to the accounting package for a given company.

### customers

* `getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachments`
* `getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentId`
* `getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownload`
* `getCompaniesCompanyIdDataCustomers` - Gets the latest customers for a company, with pagination
* `getCompaniesCompanyIdDataCustomersCustomerId` - Gets a single customer corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushCustomers` - Posts an individual customer for a given company.
* `putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerId` - Posts an updated customer for a given company.

### data

* `getCompaniesCompanyIdDataHistory` - Fetch a list of all data snapshots captured for a company
* `getCompaniesCompanyIdDataHistoryDatasetId` - Fetch metadata on a single data synchronisation
* `postCompaniesCompanyIdDataAll` - Initiates the process of capturing a new data snapshot for a company
* `postCompaniesCompanyIdDataQueueDataType` - Initiates the process of capturing a data snapshot of a specified type for a company

### dataStatus

* `getCompaniesCompanyIdDataStatus`

### dataTypes

* `getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptions` - Gets all available push options for the given data type
* `getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPOST` - Gets the POST push options for the given data type
* `getCompaniesCompanyIdConnectionsConnectionIdDataTypesDataTypeOptionsPUT` - Gets the PUT push options for the given data type

### datasetLogs

* `getCompaniesCompanyIdDataDatasetLogsDatasetId` - Gets dataset messages for a given dataset

### directCosts

* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectCosts` - Gets the direct costs for the company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostId` - Gets the specified direct cost for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachments` - Gets all attachments for the specified direct cost for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentId` - Gets the specified direct cost attachment for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownload` - Downloads an attachment for the specified direct cost for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushDirectCosts` - Posts a new direct cost to the accounting package for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachment` - Posts a new direct cost attachment for a given company.

### directIncomes

* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomes` - Gets the direct incomes for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeId` - Gets the specified direct income for a given company and connection.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachments` - Gets all attachments for the specified direct income for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentId` - Gets the specified direct income attachment for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownload` - Downloads an attachment for the specified direct income for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomes` - Posts a new direct income to the accounting package for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachment` - Posts a new direct income attachment for a given company.

### files

* `getCompaniesCompanyIdFiles` - View all files uploaded by a specified company
* `getCompaniesCompanyIdFilesDownload` - Download all files for a company. You can specify a date to download specific files for.
* `postCompaniesCompanyIdConnectionsConnectionIdFiles` - Upload files for a company

### financials

* `getCompaniesCompanyIdDataFinancialsBalanceSheet` - Gets the latest balance sheet for a company.
* `getCompaniesCompanyIdDataFinancialsCashFlowStatement` - Gets the latest cash flow statement for a company.
* `getCompaniesCompanyIdDataFinancialsProfitAndLoss` - Gets the latest profit and loss for a company.

### info

* `getCompaniesCompanyIdDataInfo` - Gets the latest basic info for a company.
* `postCompaniesCompanyIdDataInfo` - Initiates the process of synchronising basic info for a company

### integrations

* `deleteIntegrationsCredentialsPlatformKey` - Delete credentials used to authenticate with an accounting platform
* `getIntegrations`
* `getIntegrationsBankSettings`
* `getIntegrationsCredentialsPlatformKey` - Fetch credentials required to authenticate with an accounting platform.
* `getIntegrationsPlatformKey`
* `getIntegrationsPlatformKeyBranding`
* `putIntegrationsBankSettings`
* `putIntegrationsCredentialsPlatformKey` - Update credentials required to authenticate with an accounting platform
* `putIntegrationsPlatformKeyEnabled`

### invoices

* `getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachments`
* `getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentId`
* `getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownload`
* `getCompaniesCompanyIdDataInvoices` - Gets the latest invoices for a company, with pagination
* `getCompaniesCompanyIdDataInvoicesInvoiceId`
* `getCompaniesCompanyIdDataInvoicesInvoiceIdPdf`
* `postCompaniesCompanyIdConnectionsConnectionIdPushInvoices` - Posts a new invoice to the accounting package for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachment`
* `putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceId` - Posts an updated invoice to the accounting package for a given company.

### items

* `getCompaniesCompanyIdDataItems` - Gets the items for a given company.
* `getCompaniesCompanyIdDataItemsItemId` - Gets the specified item for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushItems` - Posts a new item to the accounting package for a given company.

### journalEntries

* `getCompaniesCompanyIdDataJournalEntries` - Gets the latest journal entries for a company, with pagination
* `getCompaniesCompanyIdDataJournalEntriesJournalEntryId` - Gets a single JournalEntry corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushJournalEntries` - Posts a new journalEntry to the accounting package for a given company.

### journals

* `getCompaniesCompanyIdDataJournals` - Gets the latest journals for a company, with pagination
* `getCompaniesCompanyIdDataJournalsJournalId` - Gets a single journal corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushJournals` - Posts a new journal to the accounting package for a given company.

### metrics

* `getMetricsCompanies`

### paymentMethods

* `getCompaniesCompanyIdDataPaymentMethods` - Gets the payment methods for a given company.
* `getCompaniesCompanyIdDataPaymentMethodsPaymentMethodId` - Gets the specified payment method for a given company.

### payments

* `getCompaniesCompanyIdDataPayments` - Gets the latest payments for a company, with pagination
* `getCompaniesCompanyIdDataPaymentsPaymentId`
* `postCompaniesCompanyIdConnectionsConnectionIdPushPayments` - Posts a new payment to the accounting package for a given company.

### profile

* `getProfile` - Fetch your organisations company profile
* `getProfileSyncSettings`
* `postProfileSyncSettings`
* `putProfile` - Update your organisations company profile
* `putProfileApiKey` - Refresh the existing API key for your clients.
* `putProfileSyncSettingsDataType`

### purchaseOrders

* `getCompaniesCompanyIdDataPurchaseOrders`
* `getCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderId`
* `postCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrders` - Posts a new purchase order to the accounting package for a given company.
* `putCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderId` - Posts an updated purchase order to the accounting package for a given company.

### push

* `getCompaniesCompanyIdConnectionsConnectionIdOptionsDataType` - Gets the push options for the given data type
* `getCompaniesCompanyIdPush` - Gets paged push operation records
* `getCompaniesCompanyIdPushPushOperationKey` - Gets a single push operation record

### reports

* `getCompaniesCompanyIdReportsAgedCreditor` - Gets the aged creditor report for a company.
* `getCompaniesCompanyIdReportsAgedCreditorAvailable`
* `getCompaniesCompanyIdReportsAgedDebtor` - Gets the aged debtor report for a company.
* `getCompaniesCompanyIdReportsAgedDebtorAvailable`
* `getCompaniesCompanyIdReportsEvents`

### rules

* `deleteRulesRuleId`
* `getRules` - Fetch a list of rules
* `getRulesAlerts`
* `getRulesAlertsAlertId`
* `getRulesRuleId`
* `getRulesRuleIdAlerts`
* `postRules` - Subscribe to a rule
* `putRulesRuleId`

### salesOrders

* `getCompaniesCompanyIdDataSalesOrders`
* `getCompaniesCompanyIdDataSalesOrdersSalesOrderId`

### settings

* `getSettings` - Fetch your settings
* `getSettingsIntegrationsIntegrationId` - Fetch your organisations integration settings
* `patchSettings` - Update your settings
* `patchSettingsIntegrationsIntegrationId` - Update your organisations integration settings

### suppliers

* `getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachments`
* `getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentId`
* `getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownload`
* `getCompaniesCompanyIdDataSuppliers` - Gets the latest suppliers for a company, with pagination
* `getCompaniesCompanyIdDataSuppliersSupplierId` - Gets a single supplier corresponding to the supplied Id
* `postCompaniesCompanyIdConnectionsConnectionIdPushSuppliers`
* `putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierId`

### taxRates

* `getCompaniesCompanyIdDataTaxRates` - Gets the latest tax rates for a given company.
* `getCompaniesCompanyIdDataTaxRatesTaxRateId` - Gets the specified tax rate for a given company.

### trackingCategories

* `getCompaniesCompanyIdDataTrackingCategories` - Gets the latest tracking categories for a given company.
* `getCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryId` - Gets the specified tracking categories for a given company.

### transfers

* `getCompaniesCompanyIdConnectionsConnectionIdDataTransfers` - Gets the transfers for a given company.
* `getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferId` - Gets the specified transfer for a given company.
* `postCompaniesCompanyIdConnectionsConnectionIdPushTransfers` - Posts a new transfer to the accounting package for a given company.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
