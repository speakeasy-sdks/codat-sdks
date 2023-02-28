import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsPaymentPagedResponseHrefModel } from "./codatdatacontractsdatasetspaymentpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsPaymentPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsPaymentPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsPaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsPaymentPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsPaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsPaymentPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsPaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsPaymentPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsPaymentPagedResponseHrefModel;
}