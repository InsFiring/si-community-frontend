import Button from '@/src/components/common/Button';
import TextInput from '@/src/components/common/TextInput';
import Textarea from '@/src/components/common/Textarea';
import useInput from '@/src/hooks/useInput';
import { DummyData } from '@/src/utility';
import * as S from './style';
const Community = () => {
    const { form, setForm, onChangeInput } = useInput({
        title: '',
        explanation: '',
    });

    // const [communityList, setCommunityList] = useState<any[]>([]);

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
