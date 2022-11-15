const directions = {
	left: { x: -1, y: 0 },
	right: { x: 1, y: 0 },
	top: { x: 0, y: 1 },
	bottom: { x: 0, y: -1 },
};

const getXValue = (
	shape, boardSize, half, distance
) => {
	const limit = shape.size * half;
	const margin = boardSize - limit;
	const direction = directions[shape.direction];

	return limit >= shape.x || shape.x >= margin
		? shape.x
		: shape.x + (direction.x * distance);
};

const getYValue = (
	shape, boardSize, half, distance
) => {
	const limit = shape.size * half;
	const margin = boardSize - limit;
	const direction = directions[shape.direction];

	return limit >= shape.y || shape.y >= margin
		? shape.y
		: shape.y + (direction.y * distance);
};

const MovementManager = {
	movingShapes: ({ state: { shapes },
		config: { distance, boardSize, half }}) =>
		shapes.map((shape) => ({
			...shape,
			x: getXValue(
				shape, boardSize, half, distance
			),
			y: getYValue(
				shape, boardSize, half, distance
			),
		})),
};

export default MovementManager;
