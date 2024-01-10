package main

import (
	rl "github.com/gen2brain/raylib-go/raylib"
)

func main() {

	rl.InitWindow(800, 600, "Music")
	rl.SetTargetFPS(60)
	rl.InitAudioDevice()
	music := rl.LoadMusicStream("./hh.wav")
	rl.PlayMusicStream(music)

	for !rl.WindowShouldClose() {
		rl.UpdateMusicStream(music)
		rl.BeginDrawing()
		rl.ClearBackground(rl.Red)
		rl.EndDrawing()
	}

}
