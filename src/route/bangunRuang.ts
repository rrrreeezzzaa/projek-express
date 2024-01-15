import express from "express";
import { luaspermukaanBalok, luaspermukaanBola, luaspermukaanKubus, luaspermukaanTabung, volumeBalok, volumeBola, volumeTabung, volumekubus } from "../controler/bangunRuang";
import { validatebalok } from "../midleware/bangunRuang/validateBalok";
import { validatetabung } from "../midleware/bangunRuang/validateTabung";
import { validatekubus } from "../midleware/bangunRuang/validateKubus";
import { validatebola } from "../midleware/bangunRuang/validateBola";
const app = express()


/** use digunakan untuk memberi izin  */
app.use(express.json())

app.post(`/tabung/volume`,validatetabung ,volumeTabung)
app.post(`/tabung/luaspermukaan`,validatetabung ,luaspermukaanTabung)
app.post(`/kubus/volume`,validatekubus ,volumekubus)
app.post(`/kubus/luaspermukaan`,validatekubus ,luaspermukaanKubus)
app.post(`/balok/volume`,validatebalok ,volumeBalok)
app.post(`/balok/luaspermukaan`,validatebalok ,luaspermukaanBalok)
app.post(`/bola/volume`,validatebola ,volumeBola)
app.post(`/bola/luaspermukaan`,validatebola ,luaspermukaanBola)

export default app