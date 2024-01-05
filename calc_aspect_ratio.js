const calc_aspect_ratio = async () => {
    const resp = await fetch(
        "https://www.shutterstock.com/shutterstock/photos/2370070997/display_1500/stock-photo-texture-of-wood-boards-with-cracked-aging-paint-background-with-wooden-planks-of-different-colors-2370070997.jpg"
    );
    if (resp.ok) {
        const blob = await resp.blob();
        let { width, height } = await createImageBitmap(blob);

        if (width === height) {
            return `1:1`
        }

        let i = 2;
        while (i <= width && i <= height) {
            if (width % i === 0 && height % i === 0) {
                width = width / i;
                height = height / i;
            } else {
                i += 1;
            }

        }
        console.log(`${width}:${height}`)
        return `${width}:${height}`
    }
};

calc_aspect_ratio();