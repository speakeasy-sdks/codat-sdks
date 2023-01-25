import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataContractsResponsesHalLink } from "./codatdatacontractsresponseshallink";
import { CodatDataIntegrityContractsDetailsTransactionDetails } from "./codatdataintegritycontractsdetailstransactiondetails";



export class CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: CodatDataContractsResponsesHalLink })
  links?: Record<string, CodatDataContractsResponsesHalLink>;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatDataIntegrityContractsDetailsTransactionDetails })
  results?: CodatDataIntegrityContractsDetailsTransactionDetails[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults: number;
}
