type perPageType = {
    name: string | number;
    value: string | number;
};

export interface PaginationProps {
    total?: undefined | number;
    limit?: undefined | number;
    page?: number;
    setPage?: any;
    handleChangePage?: (page: number) => void | undefined;
    onCheckedBtn?: any;
    isPerPage: boolean;
    perPageList: perPageType[];
}
