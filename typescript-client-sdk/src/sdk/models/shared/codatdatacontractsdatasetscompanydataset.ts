import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsAddress } from "./codatdatacontractsdatasetsaddress";
import { CodatDataContractsDatasetsPhone } from "./codatdatacontractsdatasetsphone";
import { CodatDataContractsDatasetsWebLink } from "./codatdatacontractsdatasetsweblink";


export class CodatDataContractsDatasetsCompanyDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountingPlatformRef" })
  accountingPlatformRef?: string;

  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: CodatDataContractsDatasetsAddress })
  addresses?: CodatDataContractsDatasetsAddress[];

  @SpeakeasyMetadata({ data: "json, name=baseCurrency" })
  baseCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=companyLegalName" })
  companyLegalName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contractVersion" })
  contractVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=financialYearStartDate" })
  financialYearStartDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ledgerLockDate" })
  ledgerLockDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=phoneNumbers", elemType: CodatDataContractsDatasetsPhone })
  phoneNumbers?: CodatDataContractsDatasetsPhone[];

  @SpeakeasyMetadata({ data: "json, name=registrationNumber" })
  registrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUrls" })
  sourceUrls?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=taxNumber" })
  taxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=webLinks", elemType: CodatDataContractsDatasetsWebLink })
  webLinks?: CodatDataContractsDatasetsWebLink[];
}