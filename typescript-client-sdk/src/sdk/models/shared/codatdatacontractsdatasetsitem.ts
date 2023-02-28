import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillItem } from "./codatdatacontractsdatasetsbillitem";
import { CodatDataContractsDatasetsInvoiceItem } from "./codatdatacontractsdatasetsinvoiceitem";
import { CodatDataContractsDatasetsItemStatusEnum } from "./codatdatacontractsdatasetsitemstatusenum";
import { CodatDataContractsDatasetsItemTypeEnum } from "./codatdatacontractsdatasetsitemtypeenum";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { Expose, Transform, Type } from "class-transformer";


export class CodatDataContractsDatasetsItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billItem" })
  @Type(() => CodatDataContractsDatasetsBillItem)
  billItem?: CodatDataContractsDatasetsBillItem;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invoiceItem" })
  @Type(() => CodatDataContractsDatasetsInvoiceItem)
  invoiceItem?: CodatDataContractsDatasetsInvoiceItem;

  @SpeakeasyMetadata()
  @Expose({ name: "isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "itemStatus" })
  itemStatus: CodatDataContractsDatasetsItemStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CodatDataContractsDatasetsMetadata)
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "modifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  modifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceModifiedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: CodatDataContractsDatasetsItemTypeEnum;
}