import SVG from 'react-inlinesvg';
import { ImgUploadProps } from './interface';
import * as S from './style';

const ImgUpload = ({
    width = '480px',
    height = '270px',
    className,
    value,
    name,
    file,
    onChange,
    onClick,
    isError = false,
}: ImgUploadProps) => {
    return (
        <S.ImgUploadContainer
            width={width}
            height={height}
            className={className}
            isError={isError}
        >
            {file && !isError ? (
                <label htmlFor='file-change' className='file-change'>
                    <SVG src='/svg/img-icon.svg' />
                </label>
            ) : (
                <label htmlFor='file-upload' className='file-upload' />
            )}
            <input
                type='file'
                value={value}
                id={file ? 'file-change' : 'file-upload'}
                name={name}
                onClick={onClick}
                onChange={onChange}
            />
            {file && <img src={file} alt='preview-img' />}
        </S.ImgUploadContainer>
    );
};

export default ImgUpload;
