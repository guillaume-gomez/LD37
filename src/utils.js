export function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

export function hasGamepad(game) {
  return game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected;
}


export function initAndInstallGamepad1(game) {
	game.input.gamepad.start();
	return game.input.gamepad.pad1;
}