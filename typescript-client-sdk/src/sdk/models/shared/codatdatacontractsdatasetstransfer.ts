import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsContactRef } from "./codatdatacontractsdatasetscontactref";
import { CodatDataContractsDatasetsDataInterfacesSupplementalData } from "./codatdatacontractsdatasetsdatainterfacessupplementaldata";
import { CodatDataContractsDatasetsFromAccount } from "./codatdatacontractsdatasetsfromaccount";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsRecordRef } from "./codatdatacontractsdatasetsrecordref";
import { CodatDataContractsDatasetsToAccount } from "./codatdatacontractsdatasetstoaccount";
import { CodatDataContractsDatasetsTrackingCategoryRef } from "./codatdatacontractsdatasetstrackingcategoryref";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "contactRef" })
  @Type(() => CodatDataContractsDatasetsContactRef)
  contactRef?: CodatDataContractsDatasetsContactRef;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  date?: Date;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsRecordRef })
  @Expose({ name: "depositedRecordRefs" })
  @Type(() => CodatDataContractsDatasetsRecordRef)
  depositedRecordRefs?: CodatDataContractsDatasetsRecordRef[];

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  @Type(() => CodatDataContractsDatasetsFromAccount)
  from?: CodatDataContractsDatasetsFromAccount;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "supplementalData" })
  @Type(() => CodatDataContractsDatasetsDataInterfacesSupplementalData)
  supplementalData?: CodatDataContractsDatasetsDataInterfacesSupplementalData;

  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  @Type(() => CodatDataContractsDatasetsToAccount)
  to?: CodatDataContractsDatasetsToAccount;

  @SpeakeasyMetadata({ elemType: CodatDataContractsDatasetsTrackingCategoryRef })
  @Expose({ name: "trackingCategoryRefs" })
  @Type(() => CodatDataContractsDatasetsTrackingCategoryRef)
  trackingCategoryRefs?: CodatDataContractsDatasetsTrackingCategoryRef[];
}