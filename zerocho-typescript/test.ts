interface Color {
	white: "#fff";
	black: "#000";
}

const getColors = (colorname: Color[keyof Color]) => {
	console.log(colorname);
};

// getColors("white");
