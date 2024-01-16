import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import Textarea from '@/src/components/common/Textarea';
import useInput from '@/src/hooks/useInput';
import * as S from './style';
const Community = () => {
    const { form, setForm, onChangeInput } = useInput({
        title: '',
        explanation: '',
    });

    return (
        <S.CommunityContainer>
            <b>Community</b>

            {/* 게시글 등록 ( 컴포넌트 나눌 예정 ) */}
            <form action=''>
                <TextInput
                    name='title'
                    value={form.title}
                    label='제목'
                    isError={false}
                    className='title'
                    onChange={onChangeInput}
                />
                <Textarea
                    label='내용 입력'
                    name='explanation'
                    isError={false}
                    className='explanation'
                    value={form.explanation}
                    onChange={onChangeInput}
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
