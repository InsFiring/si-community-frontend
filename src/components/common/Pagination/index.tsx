import { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import BasicSelect from '../BasicSelect';
import SquareButton from '../SquareButton';
import { PaginationProps } from './interface';
import * as S from './style';

const Pagination = ({
    total,
    limit,
    page = 1,
    setPage,
    onCheckedBtn,
    isPerPage = false,
    perPageList,
    handleChangePage,
}: PaginationProps) => {
    const numPages = total && limit ? Math?.ceil(total / limit) : 0;

    useEffect(() => {
        if (numPages === undefined || null || NaN) {
            return;
        }
    }, [numPages]);

    useEffect(() => {
        if (handleChangePage) {
            handleChangePage(page);
        }
    }, [handleChangePage, page]);
    return (
        <S.PaginationContainer>
            {isPerPage && (
                <div className='per-page-content'>
                    <BasicSelect
                        selectData={perPageList}
                        name='genre'
                        value={limit}
                        onChange={async (
                            event: React.ChangeEvent<HTMLSelectElement>,
                        ) => {}}
                    ></BasicSelect>
                </div>
            )}

            <div className='pagination-content'>
                <SquareButton
                    onClick={() => {
                        setPage(page - 1);
                        onCheckedBtn();
                    }}
                    disabled={page === 1}
                    className='prev-btn'
                >
                    <SVG src='/svg/page-prev.svg' />
                </SquareButton>

                {Array(numPages)
                    ?.fill(null)
                    ?.map((_: any, idx: number) => (
                        <SquareButton
                            key={idx + 1}
                            onClick={() => {
                                setPage(idx + 1);
                                onCheckedBtn();
                            }}
                            className={
                                idx + 1 === page ? 'btn-num-active' : 'btn-num'
                            }
                            active={idx + 1 === page}
                        >
                            {idx + 1}
                        </SquareButton>
                    ))}

                <SquareButton
                    onClick={() => {
                        onCheckedBtn();
                        setPage(page + 1);
                    }}
                    disabled={page === numPages}
                    className='next-btn'
                >
                    <SVG src='/svg/page-next.svg' />
                </SquareButton>
            </div>
        </S.PaginationContainer>
    );
};

export default Pagination;
