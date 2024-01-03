import Button from '@/src/components/common/Button';
import Modal from '@/src/components/common/Modal';

const Home = () => {
    return (
        <>
            <Modal
                title='Modal Title'
                buttonContent={
                    <>
                        <Button onClick={() => {}}>취소</Button>
                        <Button onClick={() => {}}>저장</Button>
                    </>
                }
            >
                <div>This is Modal Content</div>
            </Modal>
        </>
    );
};

export default Home;
