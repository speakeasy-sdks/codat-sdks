import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsPhone } from "./codatdatacontractsdatasetsphone";
import { CodatDataContractsDatasetsWebLink } from "./codatdatacontractsdatasetsweblink";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsCompanyDataset extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountingPlatformRef" })
  accountingPlatformRef?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsAddress })
  @Expose({ name: "addresses" })
  @Type(() => CodatDataContractsDatasetsAddress)
  addresses?: CodatDataContractsDatasetsAddress[];

  @SpeakeasyMetadata()
  @Expose({ name: "baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "financialYearStartDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  financialYearStartDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "ledgerLockDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  ledgerLockDate?: Date;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsPhone })
  @Expose({ name: "phoneNumbers" })
  @Type(() => CodatDataContractsDatasetsPhone)
  phoneNumbers?: CodatDataContractsDatasetsPhone[];

  @SpeakeasyMetadata()
  @Expose({ name: "registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "taxNumber" })
  taxNumber?: string;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsWebLink })
  @Expose({ name: "webLinks" })
  @Type(() => CodatDataContractsDatasetsWebLink)
  webLinks?: CodatDataContractsDatasetsWebLink[];
}