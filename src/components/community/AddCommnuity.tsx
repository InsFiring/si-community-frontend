import { communityApi } from '@/src/api/community';
import useInput from '@/src/hooks/useInput';
import { userInfoState } from '@/src/store/user/state';
import { GET_COMMUNITIES_QUERY_KEY } from '@/src/utility/constants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Ratings } from '../../utility/index';
import Button from '../common/Button';
import RadioButton from '../common/RadioButton';
import TextInput from '../common/TextInput';
import Textarea from '../common/Textarea';
import * as S from './style';

const AddCommunity = () => {
    const userInfoData = useRecoilValue(userInfoState);
    const queryClient = useQueryClient();
    const { form, setForm, onChangeInput } = useInput({
        title: '',
        company: '',
        contents: '',
        ratings: Ratings || 0,
        nickname: '',
    });

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
            },
        },
    );

    useEffect(() => {});

    return (
        <S.AddCommunityContainer>
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
        </S.AddCommunityContainer>
    );
};

export default AddCommunity;
