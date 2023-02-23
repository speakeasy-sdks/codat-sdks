import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceAccountBalance } from "./codatdatacontractsdatasetscommerceaccountbalance";
import { CodatDataContractsDatasetsCommerceAddress } from "./codatdatacontractsdatasetscommerceaddress";
import { CodatDataContractsDatasetsCommercePhone } from "./codatdatacontractsdatasetscommercephone";
import { CodatDataContractsDatasetsCommerceWebLink } from "./codatdatacontractsdatasetscommerceweblink";


export class CodatDataContractsDatasetsCommerceCompanyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountBalances", elemType: CodatDataContractsDatasetsCommerceAccountBalance })
  accountBalances?: CodatDataContractsDatasetsCommerceAccountBalance[];

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: CodatDataContractsDatasetsCommerceAddress })
  addresses?: CodatDataContractsDatasetsCommerceAddress[];

  @SpeakeasyMetadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=commercePlatformRef" })
  commercePlatformRef?: string;

  @SpeakeasyMetadata({ data: "json, name=companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: CodatDataContractsDatasetsCommercePhone })
  phoneNumbers?: CodatDataContractsDatasetsCommercePhone[];

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: CodatDataContractsDatasetsCommerceWebLink })
  webLinks?: CodatDataContractsDatasetsCommerceWebLink[];
}