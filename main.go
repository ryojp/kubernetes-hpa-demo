package main

import (
	"fmt"
	"math"
	"math/rand"
	"net/http"

	"github.com/gin-gonic/gin"
)

func cpu_intensive(rnd int) float64 {
	f := 0.
	for i := 0; i < 10_000*rnd; i++ {
		f += math.Sqrt(float64(i))
	}
	return f
}

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		_rnd := rand.Intn(1000)
		f := cpu_intensive(_rnd)
		ret := fmt.Sprintf("%d: %.2f", _rnd, f)
		c.String(http.StatusOK, ret)
	})
	r.Run(":8080")
}
