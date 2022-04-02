import React, { FC } from "react";
import BlockTitle from "../BlockTitle";
import PageContainer from "../PageContainer";
import LoginStep from "./LoginStep";

export interface ILoginProcess {
    readonly id: number;
    readonly subtitle: string;
    readonly text: string;
}

const LoginProcess: FC<{ data: ILoginProcess[]; title: string }> = ({
    data,
    title,
}) => {
    return (
        <PageContainer>
            <BlockTitle>{title}</BlockTitle>
            {data.map((step) => {
                return <LoginStep stepLength={data.length} step={step} />;
            })}
        </PageContainer>
    );
};

export default LoginProcess;
