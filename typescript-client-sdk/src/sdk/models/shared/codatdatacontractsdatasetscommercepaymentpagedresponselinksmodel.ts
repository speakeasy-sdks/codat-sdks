import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel } from "./codatdatacontractsdatasetscommercepaymentpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsCommercePaymentPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsCommercePaymentPagedResponseHrefModel;
}