import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatAssessDataContractsCommonPagedReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedDate" })
  generatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=reportName" })
  reportName?: string;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}