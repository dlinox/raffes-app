import type { DataTableRequestDTO } from "@/core/types/DataTable.types";

const DATATABLE_REQUEST_DEFAULT: DataTableRequestDTO = {
  page: 1,
  itemsPerPage: 10,
  query: {},
  filters: {},
  sortBy: [],
  search: null,
};

export { DATATABLE_REQUEST_DEFAULT };
