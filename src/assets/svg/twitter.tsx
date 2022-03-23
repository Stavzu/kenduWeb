import React from "react";
import { Icon } from "@chakra-ui/react";
import { ISvg } from "./types";

export const Twitter = ({ height, width }: ISvg) => (
    <Icon viewBox="0 0 16 16" height={height} width={width}>
        <path
            d="M5.03344 14.5C11.0697 14.5 14.3722 9.4978 14.3722 5.16124C14.3722 5.02062 14.3691 4.87687 14.3628 4.73624C15.0052 4.27164 15.5597 3.69617 16 3.03687C15.4017 3.30307 14.7664 3.47692 14.1159 3.55249C14.8009 3.14194 15.3137 2.49698 15.5594 1.73718C14.915 2.11904 14.2104 2.38841 13.4756 2.53374C12.9806 2.00771 12.326 1.65941 11.6131 1.5427C10.9003 1.42599 10.1688 1.54737 9.53183 1.88806C8.89486 2.22876 8.38787 2.7698 8.08923 3.42754C7.7906 4.08528 7.71695 4.82308 7.87969 5.52687C6.575 5.46139 5.29862 5.12247 4.13332 4.53207C2.96802 3.94166 1.9398 3.11296 1.11531 2.09968C0.696266 2.82216 0.568038 3.6771 0.756687 4.49073C0.945337 5.30436 1.43671 6.01563 2.13094 6.47999C1.60975 6.46344 1.09998 6.32312 0.64375 6.07062V6.11124C0.643283 6.86943 0.905399 7.60439 1.38554 8.19118C1.86568 8.77797 2.53422 9.18037 3.2775 9.32999C2.7947 9.46209 2.28799 9.48133 1.79656 9.38624C2.0063 10.0383 2.41438 10.6086 2.96385 11.0176C3.51331 11.4265 4.17675 11.6537 4.86156 11.6675C3.69895 12.5807 2.26278 13.0761 0.784375 13.0737C0.522191 13.0733 0.260266 13.0573 0 13.0256C1.5019 13.9892 3.24902 14.5009 5.03344 14.5Z"
            fill="#999999"
        />
    </Icon>
);
