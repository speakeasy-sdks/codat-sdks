import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel } from "./codatdatacontractsdatasetsbillpaymentpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatDataContractsDatasetsBillPaymentPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel)
  current?: CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel)
  next?: CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel)
  previous?: CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel)
  self?: CodatDataContractsDatasetsBillPaymentPagedResponseHrefModel;
}