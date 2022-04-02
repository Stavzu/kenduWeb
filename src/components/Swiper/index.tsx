import styled from "@emotion/styled";
import React, {
    ElementType,
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
} from "react";
import SwiperCore, {
    A11y,
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
    Scrollbar,
    SwiperOptions,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]);

interface SliderPaginationProps {
    readonly className: string;
}

const Paginator = styled.div<SliderPaginationProps>`
    width: 100%;
    margin: 1.6rem 0 3.2rem;

    .swiper-pagination-bullet {
        background: pink;
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 1.6rem;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &:focus {
            outline: none;
        }
    }

    .swiper-pagination-bullet-active {
        background: red;

        &:focus {
            outline: none;
        }
    }
`;

interface SliderProps {
    readonly list: any;
    readonly hp?: boolean;
    readonly Component: ElementType;
    readonly sliderParams: SwiperOptions;
    readonly onPaginationMove?: (args: {
        reachedEnd: boolean;
        reachedBeginning: boolean;
    }) => void;
    readonly comingSoon?: boolean;
    readonly specialBanner?: React.ReactNode;
}

interface SliderPaginationProps {
    readonly className: string;
}

// TODO what need to be check
const SliderPagination: FunctionComponent<SliderPaginationProps> = ({
    className,
}) => <Paginator className={className} />;

const Slider: ForwardRefRenderFunction<SwiperCore, SliderProps> = (
    {
        list,
        Component,
        sliderParams,
        onPaginationMove,
        hp,
        comingSoon,
        specialBanner,
    },
    ref
) => {
    return (
        <Swiper
            onSwiper={(swiper: SwiperCore) => {
                if (ref && typeof ref === "object") {
                    ref.current = swiper;
                }
            }}
            onPaginationUpdate={(swiper: SwiperCore) => {
                if (onPaginationMove !== undefined) {
                    onPaginationMove({
                        reachedEnd: swiper.isEnd,
                        reachedBeginning: swiper.isBeginning,
                    });
                }
            }}
            {...sliderParams}
        >
            {specialBanner && <SwiperSlide>{specialBanner}</SwiperSlide>}
            {list.map((data: any, index: number) => (
                <SwiperSlide key={index}>
                    <Component
                        {...data}
                        data={data}
                        hp={hp}
                        comingSoon={comingSoon}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

Slider.displayName = "SwiperPhoto";

export { Paginator, SliderPagination };

export default forwardRef(Slider);
