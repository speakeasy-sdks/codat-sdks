import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillItem } from "./codatdatacontractsdatasetsbillitem";
import { CodatDataContractsDatasetsInvoiceItem } from "./codatdatacontractsdatasetsinvoiceitem";
import { CodatDataContractsDatasetsItemStatusEnum } from "./codatdatacontractsdatasetsitemstatusenum";
import { CodatDataContractsDatasetsItemTypeEnum } from "./codatdatacontractsdatasetsitemtypeenum";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";


export class CodatDataContractsDatasetsItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billItem" })
  billItem?: CodatDataContractsDatasetsBillItem;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItem" })
  invoiceItem?: CodatDataContractsDatasetsInvoiceItem;

  @SpeakeasyMetadata({ data: "json, name=isBillItem" })
  isBillItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInvoiceItem" })
  isInvoiceItem: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemStatus" })
  itemStatus: CodatDataContractsDatasetsItemStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CodatDataContractsDatasetsItemTypeEnum;
}