import { communityApi } from '@/src/api/community';
import Button from '@/src/components/common/Button';
import AddCommunity from '@/src/components/community/AddCommnuity';
import { commonLoadingState } from '@/src/store/common/state';
import { DummyData } from '@/src/utility';
import { GET_COMMUNITIES_QUERY_KEY } from '@/src/utility/constants';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CommunityListProps } from './interface';
import * as S from './style';
const Community = () => {
    const queryClient = useQueryClient();
    const [communityList, setCommunityList] = useState<CommunityListProps[]>(
        [],
    );
    const [type, setType] = useState<string>('list');
    const [page, setPage] = useState<number>(1);

    const loading = useRecoilValue(commonLoadingState);
    const setLoading = useSetRecoilState(commonLoadingState);

    const { isLoading: getCommunityListLoading, data: getCommunityList } =
        useQuery<any>(
            [GET_COMMUNITIES_QUERY_KEY],
            async () => {
                setLoading(getCommunityListLoading);
                try {
                    const requestData = {
                        page: page,
                        offset: 10,
                    };

                    const res = await communityApi.getCommunityList(
                        requestData,
                    );

                    setLoading(false);

                    return res;
                } catch (error) {
                    console.error('Error fetching communities:', error);
                    setLoading(false);
                }
            },
            {},
        );

    // todo : 첫 랜더링 시 번쩍거리는 이슈 해결할 것!
    useEffect(() => {
        if (communityList.length === 0) {
            setCommunityList(getCommunityList);
        }
    }, []);

    return (
        <S.CommunityContainer>
            <b>Community</b>
            <Button
                onClick={() => {
                    setType('add');
                }}
            >
                게시글 작성
            </Button>
            {/* 게시글 리스트 조회 ( test작업 ) */}
            {communityList?.length !== 0 ? (
                <ul className='community-list-container'>
                    {DummyData?.map((data, idx) => (
                        <li key={idx}>
                            <b>{data.id}</b>
                            <span>{data.nickname}</span>
                            <b>{data.company}</b>
                            <p>{data.contents}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>no data</p>
            )}
            {type === 'add' && <AddCommunity />}
        </S.CommunityContainer>
    );
};

export default Community;
