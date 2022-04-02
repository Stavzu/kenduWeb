import React, { FC } from "react";
import { useFormik } from "formik";
import { Box, Button, Input } from "@chakra-ui/react";
import { buttonStyle, inputStyle, inputContainerStyle } from "./styles";

// TODO create custom validation

const NewsletterInput: FC = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box {...inputContainerStyle}>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Váš email"
                    {...inputStyle}
                />

                <Button type="submit" {...buttonStyle}>
                    Chci o všem vědět
                </Button>
            </Box>
        </form>
    );
};

export default NewsletterInput;
