import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsContactRef } from "./codatdatacontractsdatasetscontactref";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsFromAccount } from "./codatdatacontractsdatasetsfromaccount";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { CodatDataContractsDatasetsToAccount } from "./codatdatacontractsdatasetstoaccount";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";


export class CodatDataContractsDatasetsTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactRef" })
  contactRef?: CodatDataContractsDatasetsContactRef;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=depositedRecordRefs", elemType: CodatDataContractsDatasetsRecordRef })
  depositedRecordRefs?: CodatDataContractsDatasetsRecordRef[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: CodatDataContractsDatasetsFromAccount;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=supplementalData" })
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: CodatDataContractsDatasetsToAccount;

  @SpeakeasyMetadata({ data: "json, name=trackingCategoryRefs", elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  trackingCategoryRefs?: CodatDataContractsDatasetsTrackingCategoryRef[];
}