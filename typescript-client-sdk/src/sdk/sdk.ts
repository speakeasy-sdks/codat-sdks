import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { AccountTransactions } from "./accounttransactions";
import { Assess } from "./assess";
import { BankAccounts } from "./bankaccounts";
import { BankingAccountBalances } from "./bankingaccountbalances";
import { BankingAccounts } from "./bankingaccounts";
import { BankingTransactionCategories } from "./bankingtransactioncategories";
import { BankingTransactions } from "./bankingtransactions";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { CommerceCustomers } from "./commercecustomers";
import { CommerceDisputes } from "./commercedisputes";
import { CommerceInfo } from "./commerceinfo";
import { CommerceLocations } from "./commercelocations";
import { CommerceOrders } from "./commerceorders";
import { CommercePaymentMethods } from "./commercepaymentmethods";
import { CommercePayments } from "./commercepayments";
import { CommerceProductCategories } from "./commerceproductcategories";
import { CommerceProducts } from "./commerceproducts";
import { CommerceTransactions } from "./commercetransactions";
import { Companies } from "./companies";
import { Connection } from "./connection";
import { CreditNotes } from "./creditnotes";
import { Customers } from "./customers";
import { Data } from "./data";
import { DatasetLogs } from "./datasetlogs";
import { DataStatus } from "./datastatus";
import { DataTypes } from "./datatypes";
import { DirectCosts } from "./directcosts";
import { DirectIncomes } from "./directincomes";
import { Files } from "./files";
import { Financials } from "./financials";
import { Info } from "./info";
import { Integrations } from "./integrations";
import { Invoices } from "./invoices";
import { Items } from "./items";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { Metrics } from "./metrics";
import { Security } from "./models/shared";
import { PaymentMethods } from "./paymentmethods";
import { Payments } from "./payments";
import { Profile } from "./profile";
import { PurchaseOrders } from "./purchaseorders";
import { Push } from "./push";
import { Reports } from "./reports";
import { Rules } from "./rules";
import { SalesOrders } from "./salesorders";
import { Settings } from "./settings";
import { Suppliers } from "./suppliers";
import { TaxRates } from "./taxrates";
import { TrackingCategories } from "./trackingcategories";
import { Transfers } from "./transfers";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.codat.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public accountTransactions: AccountTransactions;
  public accounts: Accounts;
  public assess: Assess;
  public bankAccounts: BankAccounts;
  public bankingAccountBalances: BankingAccountBalances;
  public bankingAccounts: BankingAccounts;
  public bankingTransactionCategories: BankingTransactionCategories;
  public bankingTransactions: BankingTransactions;
  public billCreditNotes: BillCreditNotes;
  public billPayments: BillPayments;
  public bills: Bills;
  public commerceCustomers: CommerceCustomers;
  public commerceDisputes: CommerceDisputes;
  public commerceInfo: CommerceInfo;
  public commerceLocations: CommerceLocations;
  public commerceOrders: CommerceOrders;
  public commercePaymentMethods: CommercePaymentMethods;
  public commercePayments: CommercePayments;
  public commerceProductCategories: CommerceProductCategories;
  public commerceProducts: CommerceProducts;
  public commerceTransactions: CommerceTransactions;
  public companies: Companies;
  public connection: Connection;
  public creditNotes: CreditNotes;
  public customers: Customers;
  public data: Data;
  public dataStatus: DataStatus;
  public dataTypes: DataTypes;
  public datasetLogs: DatasetLogs;
  public directCosts: DirectCosts;
  public directIncomes: DirectIncomes;
  public files: Files;
  public financials: Financials;
  public info: Info;
  public integrations: Integrations;
  public invoices: Invoices;
  public items: Items;
  public journalEntries: JournalEntries;
  public journals: Journals;
  public metrics: Metrics;
  public paymentMethods: PaymentMethods;
  public payments: Payments;
  public profile: Profile;
  public purchaseOrders: PurchaseOrders;
  public push: Push;
  public reports: Reports;
  public rules: Rules;
  public salesOrders: SalesOrders;
  public settings: Settings;
  public suppliers: Suppliers;
  public taxRates: TaxRates;
  public trackingCategories: TrackingCategories;
  public transfers: Transfers;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "2.1.1";
  private _genVersion = "1.5.3";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.accountTransactions = new AccountTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.assess = new Assess(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankAccounts = new BankAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankingAccountBalances = new BankingAccountBalances(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankingAccounts = new BankingAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankingTransactionCategories = new BankingTransactionCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankingTransactions = new BankingTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billCreditNotes = new BillCreditNotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billPayments = new BillPayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bills = new Bills(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceCustomers = new CommerceCustomers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceDisputes = new CommerceDisputes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceInfo = new CommerceInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceLocations = new CommerceLocations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceOrders = new CommerceOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commercePaymentMethods = new CommercePaymentMethods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commercePayments = new CommercePayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceProductCategories = new CommerceProductCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceProducts = new CommerceProducts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.commerceTransactions = new CommerceTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.companies = new Companies(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connection = new Connection(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.creditNotes = new CreditNotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customers = new Customers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.data = new Data(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataStatus = new DataStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataTypes = new DataTypes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.datasetLogs = new DatasetLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.directCosts = new DirectCosts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.directIncomes = new DirectIncomes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.financials = new Financials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.info = new Info(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.integrations = new Integrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoices = new Invoices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.items = new Items(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.journalEntries = new JournalEntries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.journals = new Journals(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.metrics = new Metrics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentMethods = new PaymentMethods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payments = new Payments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.profile = new Profile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.purchaseOrders = new PurchaseOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.push = new Push(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.reports = new Reports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rules = new Rules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.salesOrders = new SalesOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settings = new Settings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.suppliers = new Suppliers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.taxRates = new TaxRates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.trackingCategories = new TrackingCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transfers = new Transfers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}