import loadingData from '@assets/jsons/comm_loading.json';
import clsx from 'clsx';
import Lottie from 'lottie-react';

/**
 * loading 컴포넌트
 * 부모 element에 relative 속성이 있으면 화면 전체를 덮어서 로딩 컴포넌트 등장
 * @returns {JSX.Element}
 */
export default function LoadingLottie({ hasDim = true }: { hasDim?: boolean }): JSX.Element {
    return (
        <div
            className={clsx(
                'pointer-events-none absolute left-0 top-0 grid h-full w-full cursor-default place-items-center',
                hasDim ? 'bg-black bg-opacity-20' : 'bg-transparent'
            )}
        >
            <div className='box-border h-[70px] w-[70px] overflow-hidden rounded-[20px] bg-white bg-opacity-80 p-5'>
                <Lottie animationData={loadingData} autoplay loop />
            </div>
        </div>
    );
}
