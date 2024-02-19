import { communityApi } from '@/src/api/community';
import Button from '@/src/components/common/Button';
import RadioButton from '@/src/components/common/RadioButton';
import TextInput from '@/src/components/common/TextInput';
import Textarea from '@/src/components/common/Textarea';
import useInput from '@/src/hooks/useInput';
import { userInfoState } from '@/src/store/user/state';
import { DummyData } from '@/src/utility';
import { GET_COMMUNITIES_QUERY_KEY } from '@/src/utility/constants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Ratings } from '../../utility/index';
import * as S from './style';
const Community = () => {
    const { form, setForm, onChangeInput } = useInput({
        title: '',
        company: '',
        contents: '',
        ratings: Ratings,
        nickname: '',
    });
    const userInfoData = useRecoilValue(userInfoState);
    const queryClient = useQueryClient();

    const [page, setPage] = useState<number>(1);

    const { isLoading: getCommunityListLoading, data: getCommunityList } =
        useQuery<any>(
            [GET_COMMUNITIES_QUERY_KEY],
            async () => {
                try {
                    const requestData = {
                        page: page,
                        offset: 10,
                    };

                    const res = await communityApi.getCommunityList(
                        requestData,
                    );

                    console.log('fetchCommunities', res);
                    return res;
                } catch (error) {
                    console.error('Error fetching communities:', error);
                }
            },
            {},
        );

    const onChangeRadioButton = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;

        const result = form.ratings.map((item: any, idx: number) => {
            if (Number(item.value) === Number(value)) {
                return {
                    ...item,
                    checked: !item.checked,
                };
            }
            return {
                ...item,
                checked: false,
            };
        });

        setForm({
            ...form,
            ratings: result,
        });
    };

    const { mutate: addCommunityMutation } = useMutation(
        async () => {
            try {
                const result = {
                    ...form,
                    nickname: userInfoData.nickname,
                    ratings: Number(
                        form.ratings.find((rat: any) => rat.checked)?.value,
                    ),
                };

                const data = await communityApi.postAddCommunity(result);

                console.log('data', data);

                return data;
            } catch (err) {
                console.log('err', err);
            }
        },
        {
            onError: (error: any) => {
                console.log('error : ', error);
            },
            onSuccess: () => {
                console.log('onSuccess');

                queryClient.invalidateQueries([GET_COMMUNITIES_QUERY_KEY]);

                setForm({
                    title: '',
                    company: '',
                    contents: '',
                    ratings: Ratings,
                    nickname: '',
                });

                // todo: 리스트 데이터 받는 코드 필요
                console.log('getCommunityList', getCommunityList);
            },
        },
    );

    // const [communityList, setCommunityList] = useState<any[]>([]);

    // todo : 첫 랜더링 시 리스트 데이터 담는 코드 필요
    // useEffect(() => {
    //     if (DummyData.length !== 0) {
    //         setCommunityList(DummyData);
    //     }
    // }, []);

    return (
        <S.CommunityContainer>
            <b>Community</b>

            {/* 게시글 리스트 조회 ( test작업 ) */}
            {DummyData?.length !== 0 ? (
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

            {/* 게시글 등록 ( 컴포넌트 나눌 예정 ) */}
            <form
                action='post'
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    addCommunityMutation();
                }}
            >
                <TextInput
                    name='title'
                    value={form.title}
                    label='제목'
                    isError={false}
                    className='title'
                    onChange={onChangeInput}
                />
                <TextInput
                    name='company'
                    value={form.company}
                    label='회사'
                    isError={false}
                    className='company'
                    onChange={onChangeInput}
                />
                <Textarea
                    label='내용 입력'
                    name='contents'
                    isError={false}
                    className='contents'
                    value={form.contents}
                    onChange={onChangeInput}
                />
                <RadioButton
                    radioList={form?.ratings || []}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeRadioButton(e)
                    }
                />
                <div className='btn-container'>
                    <Button onClick={() => {}}>취소</Button>
                    <Button type='submit' onClick={() => {}}>
                        등록
                    </Button>
                </div>
            </form>
        </S.CommunityContainer>
    );
};

export default Community;
