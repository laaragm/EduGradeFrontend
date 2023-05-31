import { Poppins } from "next/font/google";

function pxToRem(value: number) {
    return `${value / 16}rem`;
}

export const poppins = Poppins({
    weight: ["400", "600", "800"],
    subsets: ["latin"],
});

export const typography = {
    fontFamily: poppins.style.fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    fontSize: 16,
    h1: {
        fontWeight: 700,
        lineHeight: pxToRem(68),
        fontSize: pxToRem(56),
    },
    h2: {
        fontWeight: 700,
        lineHeight: pxToRem(51),
        fontSize: pxToRem(42),
    },
    h3: {
        fontWeight: 700,
        lineHeight: pxToRem(44),
        fontSize: pxToRem(36),
    },
    h4: {
        fontWeight: 700,
        lineHeight: pxToRem(34),
        fontSize: pxToRem(28),
    },
    h5: {
        fontWeight: 700,
        lineHeight: pxToRem(27),
        fontSize: pxToRem(22),
    },
    h6: {
        fontWeight: 700,
        lineHeight: pxToRem(19),
        fontSize: pxToRem(16),
    },
    body1: {
        lineHeight: pxToRem(27),
        fontSize: pxToRem(22),
        fontWeight: 400,
    },
    body2: {
        lineHeight: pxToRem(22),
        fontSize: pxToRem(20),
        fontWeight: 400,
    },
    body3: {
        lineHeight: pxToRem(22),
        fontSize: pxToRem(18),
        fontWeight: 400,
    },
    body4: {
        lineHeight: pxToRem(19),
        fontSize: pxToRem(16),
        fontWeight: 400,
    },
    body5: {
        lineHeight: pxToRem(17),
        fontSize: pxToRem(14),
        fontWeight: 400,
    },
    body6: {
        lineHeight: pxToRem(15),
        fontSize: pxToRem(12),
        fontWeight: 400,
    },
    button: {
        fontWeight: 400,
        fontSize: pxToRem(16),
    },
    link: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: "1.75rem",
    },
};

// Module Augmentation - we want to add new variants to the Typography component
declare module "@mui/material/styles" {
    interface TypographyVariants {
        body3: React.CSSProperties;
        body4: React.CSSProperties;
        body5: React.CSSProperties;
        body6: React.CSSProperties;
    }

    // Allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
        body4?: React.CSSProperties;
        body5?: React.CSSProperties;
        body6?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        body3: true;
        body4: true;
        body5: true;
        body6: true;
    }
}
