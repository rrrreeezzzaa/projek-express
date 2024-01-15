import  express  from "express"
import { kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran, luasPersegi, luasPersegiPanjang, luasSegitiga } from "../controler/bangunDatar"
import { validatelingkaran } from "../midleware/bangunDatar/validateLingkaran"
import { validatepersegi } from "../midleware/bangunDatar/validatePersegi"
import { validatepersegipanjang } from "../midleware/bangunDatar/validatePersegiPanjang"
import { validatesegitiga } from "../midleware/bangunDatar/validateSegitiga"
const app = express()

/** allow read a body */
app.use(express.json())

/** fungsi use() digunakan untuk menerapkan 
 * sebuah fungsi pada object express.
 *  fungsi tsb akan otomatis  dijalankan */

app.post(`/lingkaran/luas` ,validatelingkaran ,luasLingkaran)
app.post(`/lingkaran/keliling`,validatelingkaran ,kelilingLingkaran)
app.post(`/persegi/luas`,validatepersegi ,luasPersegi)
app.post(`/persegi/keliling`,validatepersegi ,kelilingPersegi)
app.post(`/persegipanjang/luas`,validatepersegipanjang ,luasPersegiPanjang)
app.post(`/persegipanjang/luas`,validatepersegipanjang ,kelilingPersegiPanjang)
app.post(`/segitiga/luas`,validatesegitiga ,luasSegitiga)

export default app