import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsMetadata } from "./codatdatacontractsdatasetsmetadata";
import { CodatDataContractsDatasetsPaymentMethodStatusEnum } from "./codatdatacontractsdatasetspaymentmethodstatusenum";
import { CodatDataContractsDatasetsPaymentMethodTypeEnum } from "./codatdatacontractsdatasetspaymentmethodtypeenum";


export class CodatDataContractsDatasetsPaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CodatDataContractsDatasetsMetadata;

  @SpeakeasyMetadata({ data: "json, name=modifiedDate" })
  modifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceModifiedDate" })
  sourceModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatDataContractsDatasetsPaymentMethodStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CodatDataContractsDatasetsPaymentMethodTypeEnum;
}