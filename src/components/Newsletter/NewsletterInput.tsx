import React from "react";
import { useFormik } from "formik";
import { Box, Button, Input } from "@chakra-ui/react";

function NewsletterInput() {
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
            <Box
                display={{
                    base: "grid",
                    md: "flex",
                }}
                border={{
                    md: "1px solid",
                }}
                borderRadius="8px"
                borderColor="brand.grey.30"
                minW={{
                    md: "420px",
                }}
            >
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Váš email"
                    height="56px"
                    color="brand.text.3"
                    fontSize="sm"
                    borderRadius="8px"
                    borderColor="brand.grey.30"
                    fontWeight="400"
                    border={{
                        base: "1px solid",
                        md: "none",
                    }}
                    _focus={{
                        border: ["1px solid", "1px solid", "none"],
                    }}
                />

                <Button
                    type="submit"
                    fontSize="sm"
                    mt="2"
                    mr={{
                        md: "2",
                    }}
                    w={{
                        base: "auto",
                        md: "fit-content",
                    }}
                    px="40px"
                    bg="brand.grey.10"
                    color="brand.white"
                    fontWeight="400"
                    _hover={{
                        color: "brand.grey.10",
                        bg: "transparent",
                        borderColor: "brand.grey.30",
                        border: "1px solid",
                        cursor: "pointer",
                    }}
                >
                    Chci o všem vědět
                </Button>
            </Box>
        </form>
    );
}

export default NewsletterInput;
