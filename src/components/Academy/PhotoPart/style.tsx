export const PhotoGridStyle = {
    h: "auto",
    gridTemplateRows: "repeat(1, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateAreas: {
        base: `'bigTop bigTop smallFirst smallSecond' 'bigTop bigTop bigBottom bigBottom' 'smallThree smallFour bigBottom bigBottom'`,
    },
    gap: 4,
};
