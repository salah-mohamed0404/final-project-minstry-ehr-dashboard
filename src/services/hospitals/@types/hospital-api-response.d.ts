interface HospitalApiResponseBase {
   status: string;
   message: string;
}

interface HospitalApiResponse<TData> extends HospitalApiResponseBase {
   data: TData;
}

interface HospitalApiResponseWithPagination<TData>
   extends HospitalApiResponseBase {
   data: { meta: HospitalApiMeta; items: TData };
}
