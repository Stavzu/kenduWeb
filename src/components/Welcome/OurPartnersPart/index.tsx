import React, { FC } from "react";
import { Box, Divider } from "@chakra-ui/react";
import { socialLinks } from "./data";
import PartnersLogoType from "./PartnersLogoType";
import BlockTitle from "../../BlockTitle";
import PageContainer from "../../PageContainer";
import { PartnerType } from "../../constants";

const getPartnerLink = (partnerType: PartnerType) =>
    socialLinks.filter((link) => link.type === partnerType);

const OurPartners: FC = () => {
    return (
        <PageContainer>
            <Box mt="220px">
                <BlockTitle> Naši partneři</BlockTitle>
                <PartnersLogoType
                    data={getPartnerLink(PartnerType.GOLD)}
                    subTitle="Gold"
                    type={PartnerType.GOLD}
                />
                <Divider my="1rem" />
                <PartnersLogoType
                    data={getPartnerLink(PartnerType.SILVER)}
                    subTitle="Silver"
                    type={PartnerType.SILVER}
                />
                <Divider my="1rem" />
                <PartnersLogoType
                    data={getPartnerLink(PartnerType.COMMUNITY)}
                    subTitle="Community"
                    type={PartnerType.COMMUNITY}
                />
            </Box>
        </PageContainer>
    );
};

export default OurPartners;
