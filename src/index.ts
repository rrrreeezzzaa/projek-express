// file utama yang ada proses menjalankan server backend

// memanggil library express
import Express, { Request, Response } from "express";
import routebangunDatar from "./route/bangunDatar"
import routebangunRuang from "./route/bangunRuang"
// buat wadah untuk inisiasi express
const app = Express()

// mendefiniskan port berjalannya server
const PORT = 8000

// proses pertama untuk req
app.get(`/serena`, (request : Request, response: Response) => {
    // proses handle request dengan url: http://localhost:8000/serena
    // methodnya menggunakan get
    // memberi response
    return response.status(200).json({
        massage: `Hello World`
    })
})
app.use(routebangunDatar)
app.use(routebangunRuang)
// running server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})