import React from "react";
import { Box } from "@chakra-ui/react";
import NewsletterInput from "../../Newsletter/NewsletterInput";

const HeroNewsletter = () => {
    return (
        <Box
            maxW={{
                lg: "33rem",
                xl: "49rem",
            }}
            mt={{
                base: "2.4rem",
                md: "5.6rem",
            }}
            textAlign="center"
        >
            <NewsletterInput />
        </Box>
    );
};

export default HeroNewsletter;
