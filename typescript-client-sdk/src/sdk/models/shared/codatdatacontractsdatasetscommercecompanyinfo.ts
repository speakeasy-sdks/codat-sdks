import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommerceAccountBalance } from "./codatdatacontractsdatasetscommerceaccountbalance";
import { CodatDataContractsDatasetsCommerceAddress } from "./codatdatacontractsdatasetscommerceaddress";
import { CodatDataContractsDatasetsCommercePhone } from "./codatdatacontractsdatasetscommercephone";
import { CodatDataContractsDatasetsCommerceWebLink } from "./codatdatacontractsdatasetscommerceweblink";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommerceCompanyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceAccountBalance })
  @Expose({ name: "accountBalances" })
  @Type(() => CodatDataContractsDatasetsCommerceAccountBalance)
  accountBalances?: CodatDataContractsDatasetsCommerceAccountBalance[];

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceAddress })
  @Expose({ name: "addresses" })
  @Type(() => CodatDataContractsDatasetsCommerceAddress)
  addresses?: CodatDataContractsDatasetsCommerceAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "commercePlatformRef" })
  commercePlatformRef?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommercePhone })
  @Expose({ name: "phoneNumbers" })
  @Type(() => CodatDataContractsDatasetsCommercePhone)
  phoneNumbers?: CodatDataContractsDatasetsCommercePhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsCommerceWebLink })
  @Expose({ name: "webLinks" })
  @Type(() => CodatDataContractsDatasetsCommerceWebLink)
  webLinks?: CodatDataContractsDatasetsCommerceWebLink[];
}